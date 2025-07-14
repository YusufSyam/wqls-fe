"use client";

import React from "react";
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

export interface IRegisterPage {}

const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Format email tidak valid")
    .required("Email wajib diisi"),
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
  const form = useForm({
    validate: yupResolver(registerSchema),
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleRegister = async (values: typeof form.values) => {
    console.log(values);
    // try {
    //   // TODO: Ganti dengan panggilan ke API login kamu
    //   console.log("Submitting login...", values);

    //   // Simulasi berhasil login
    //   alert("Register berhasil (dummy)");
    // } catch (error) {
    //   console.error(error);
    //   alert("Register gagal");
    // }
  };

  return (
    <Stack maw={400} mx="auto" mt={60}>
      <Text className="text-2xl font-bold mb-6 text-center">Register</Text>

      <form onSubmit={form.onSubmit(handleRegister)} className="space-y-4">
        <TextInput
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />

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
