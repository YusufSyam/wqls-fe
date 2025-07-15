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
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext.context";

export interface ILoginPage {}

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username wajib diisi"),
  password: yup
    .string()
    .min(6, "Minimal 6 karakter")
    .required("Password wajib diisi"),
});

const LoginPage: React.FC<ILoginPage> = ({}) => {
  const { login } = useAuth();
  const router = useRouter();

  const form = useForm({
    validate: yupResolver(loginSchema),
    initialValues: {
      username: "",
      password: "",
    },
  });

  const handleLogin = async (values: typeof form.values) => {
    console.log(values);
    try {
      await login(values.username, values.password);
      router.push("/");
    } catch {
      alert("Login gagal");
    }
  };

  return (
    <Stack maw={400} mx="auto" mt={60}>
      <Text className="text-2xl font-bold mb-6 text-center">Login</Text>

      <form onSubmit={form.onSubmit(handleLogin)} className="space-y-4">
        <TextInput
          label="username"
          placeholder="username"
          {...form.getInputProps("username")}
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
            <Link href={ROUTES.REGISTER}> Register </Link>
            terlebih dahulu
          </Text>
        </Stack>
      </form>
    </Stack>
  );
};
export default LoginPage;
