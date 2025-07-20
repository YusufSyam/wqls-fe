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
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext.context";
import LoadingModal from "@/components/LoadingModal.component";
import HeaderText1 from "@/components/HeaderText1.component";
import { notifications } from "@mantine/notifications";

export interface ILoginPage {}

const loginSchema = yup.object().shape({
  username: yup.string().required("Username wajib diisi"),
  password: yup
    .string()
    .min(6, "Minimal 6 karakter")
    .required("Password wajib diisi"),
});

const LoginPage: React.FC<ILoginPage> = ({}) => {
  const { login } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    validate: yupResolver(loginSchema),
    initialValues: {
      username: "",
      password: "",
    },
  });

  const handleLogin = async (values: typeof form.values) => {
    setIsLoading(true);
    // console.log(values);
    try {
      await login(values.username, values.password);
      router.push("/");
    } catch {
      alert("Login gagal");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack maw={400} mx="auto" mt={60} className="gap-8">
      <LoadingModal opened={isLoading} />
      <HeaderText1
        title="Log In"
        textPosition="center"
        subTitle="Log in untuk mengerjakan quiz, dan melihat posisi anda pada leaderboard"
      />

      <form onSubmit={form.onSubmit(handleLogin)} className="space-y-4">
        <TextInput
          label="Username"
          placeholder="username"
          {...form.getInputProps("username")}
        />

        <PasswordInput
          label="Password"
          placeholder="********"
          {...form.getInputProps("password")}
        />

        <Stack className="mt-4">
          <Button
            type="submit"
            fullWidth
            className="rounded-full bg-dark-blue hover:bg-blue duration-300 ease-in-out transition-all"
          >
            Login
          </Button>
          <Text>
            Belum mempunyai akun?
            <Link href={ROUTES.REGISTER} className="text-blue">
              {" "}
              register{" "}
            </Link>
            terlebih dahulu
          </Text>
        </Stack>
      </form>
    </Stack>
  );
};
export default LoginPage;
