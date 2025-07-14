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

export interface ILoginPage {}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Format email tidak valid")
    .required("Email wajib diisi"),
  password: yup
    .string()
    .min(6, "Minimal 6 karakter")
    .required("Password wajib diisi"),
});

const LoginPage: React.FC<ILoginPage> = ({}) => {
  const form = useForm({
    validate: yupResolver(loginSchema),
    initialValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (values: typeof form.values) => {
    console.log(values);
    // try {
    //   // TODO: Ganti dengan panggilan ke API login kamu
    //   console.log("Submitting login...", values);

    //   // Simulasi berhasil login
    //   alert("Login berhasil (dummy)");
    // } catch (error) {
    //   console.error(error);
    //   alert("Login gagal");
    // }
  };

  return (
    <Stack maw={400} mx="auto" mt={60}>
      <Text className="text-2xl font-bold mb-6 text-center">Login</Text>

      <form onSubmit={form.onSubmit(handleLogin)} className="space-y-4">
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

        <Stack>
          <Button type="submit" fullWidth>
            Login
          </Button>
          <Text>
            Belum mempunyai akun?
            <Link href={ROUTES.REGISTER}>{" "}Register{" "}</Link>
            terlebih dahulu
          </Text>
        </Stack>
      </form>
    </Stack>
  );
};
export default LoginPage;
