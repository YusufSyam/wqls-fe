"use client";

import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Box,
  Stack,
  Text,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import Link from "next/link";
import ROUTES from "@/utils/constants/routes.const";
import { registerUser } from "@/api/auth/register";

import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import LoadingModal from "@/components/LoadingModal.component";

export interface IRegisterPage {}

const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Format email tidak valid")
    .required("Email wajib diisi"),
  username: yup.string().required("Username wajib diisi"),
  // name: yup.string().required("Nama lengkap wajib diisi"),
  // school: yup.string().required("Asal sekolah lengkap wajib diisi"),
  // tutor_name: yup.string().required("Nama tutor lengkap wajib diisi"),
  // tutor_number: yup.string().required("Nomor tutor lengkap wajib diisi"),
  password: yup
    .string()
    .min(6, "Minimal 6 karakter")
    .required("Password wajib diisi"),
  confirmPassword: yup
    .string()
    .required("Ulangi password wajib diisi")
    .oneOf([yup.ref("password")], "Password tidak cocok"),
});

const RegisterPage: React.FC<IRegisterPage> = ({}) => {
  const router = useRouter(); // tambahkan
  const form = useForm({
    validate: yupResolver(registerSchema),
    initialValues: {
      email: "",
      username: "",
      // name: "",
      // school: "",
      // tutor_name: "",
      // tutor_number: "",
      password: "",
      confirmPassword: "",
    },
  });

  
  const [isLoading, setIsLoading] = useState(false)

  const handleRegister = async (values: typeof form.values) => {
    setIsLoading(true)
    try {
      const payload = {
        email: values.email,
        username: values.username,
        password: values.password,
        // name: values.name,
        // number: values.username, // menggunakan username sebagai nomor ID siswa
        // school: values.school,
        // tutor_name: values.tutor_name,
        // tutor_number: values.tutor_number,
      };

      await registerUser(payload);

      notifications.show({
        title: "Berhasil Register",
        message: "Silakan login untuk melanjutkan",
        color: "green",
      });

      router.push(ROUTES.LOGIN);
    } catch (error: any) {
      const message =
        error?.response?.data?.username?.[0] ||
        error?.response?.data?.email?.[0] ||
        "Gagal register. Cek inputan atau coba lagi.";
      notifications.show({
        title: "Gagal Register",
        message,
        color: "red",
      });
    }finally{
      setIsLoading(false)
    }
  };

  return (
    
    <Stack maw={400} mx="auto" mt={60}>
      <LoadingModal opened={isLoading} />
      <Text className="text-2xl font-bold mb-6 text-center">Register</Text>

      <form onSubmit={form.onSubmit(handleRegister)} className="space-y-4">
        <TextInput
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />

        <TextInput
          label="Username"
          placeholder="your name"
          {...form.getInputProps("username")}
        />
        {/* <TextInput
          label="Nama Lengkap"
          placeholder="your name"
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Asal Sekolah"
          placeholder="your name"
          {...form.getInputProps("school")}
        />
        <TextInput
          label="Nama tutor"
          placeholder="your name"
          {...form.getInputProps("tutor_name")}
        />
        <TextInput
          label="Nomor Tutor"
          placeholder="your name"
          {...form.getInputProps("tutor_number")}
        /> */}

        <PasswordInput
          label="Password"
          placeholder="********"
          {...form.getInputProps("password")}
        />
        <PasswordInput
          label="Ulangi Password"
          placeholder="********"
          {...form.getInputProps("confirmPassword")}
        />

        <Stack>
          <Button type="submit" fullWidth>
            Register
          </Button>
          <Text>
            Sudah punya akun? Pindah ke halaman
            <Link href={ROUTES.LOGIN}> Login </Link>
          </Text>
        </Stack>
      </form>
    </Stack>
  );
};
export default RegisterPage;
