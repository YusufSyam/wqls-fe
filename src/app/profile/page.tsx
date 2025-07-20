"use client";

import { updateUserProfile } from "@/api/auth/update";
import HeaderText1 from "@/components/HeaderText1.component";
import { useAuth } from "@/context/AuthContext.context";
import { Button, Group, Stack, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import * as yup from "yup";

export interface IProfile {}

const profileInformationSchema = yup.object().shape({
  name: yup.string(),
  number: yup.string(),
  tutor_name: yup.string(),
  tutor_number: yup.string(),
  school: yup.string(),
});

const Profile: React.FC<IProfile> = ({}) => {
  const router = useRouter();
  const { user, isLoggedIn, refetchUserInformation } = useAuth();

  const form = useForm({
    validate: yupResolver(profileInformationSchema),
    initialValues: {
      name: user?.name || undefined,
      number: user?.number || undefined,
      tutor_name: user?.tutor_name || undefined,
      tutor_number: user?.tutor_number || undefined,
      school: user?.school || undefined,
    },
  });

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
      notifications.show({
        title: "Silahkan login terlebih dahulu",
        message: "Login untuk melihat profil anda",
        color: "red",
      });
    }
  }, [isLoggedIn, router]);

  const handleSubmit = async (values: typeof form.values) => {
    try {
      await updateUserProfile(values);
      refetchUserInformation()
      console.log(values)
      notifications.show({
        title: "Berhasil Update Profil",
        message: "",
        color: "green",
      });
    } catch (err) {
      console.error("Update gagal:", err);
      notifications.show({
        title: "Gagal Update Profil",
        message: "Terjadi Kesalahan",
        color: "red",
      });
    }
  };

  console.log("user", user);
  return (
    <Stack maw={600} mx="auto" mt={60} className="gap-8">
      <form onSubmit={form.onSubmit(handleSubmit)} className="space-y-4">
        <HeaderText1 title="Profil" textPosition="center" />
        <Stack className="gap-6">
          <Group className="">
            <TextInput
              label="Nama"
              placeholder="Masukkan nama anda"
              {...form.getInputProps("name")}
              className="flex-1"
            />
            <TextInput
              label="Nomor Telepon"
              placeholder="Masukkan nomor telepon anda"
              {...form.getInputProps("number")}
              className="flex-1"
            />
          </Group>
          <TextInput
            label="Asal Sekolah"
            placeholder="Masukkan asal sekolah anda"
            {...form.getInputProps("school")}
          />
          <Group>
            <TextInput
              label="Nama Tutor"
              placeholder="Masukkan nama tutor anda"
              {...form.getInputProps("tutor_name")}
              className="flex-1"
            />
            <TextInput
              label="Nomor Tutor"
              placeholder="Masukkan nomor tutor anda"
              {...form.getInputProps("tutor_number")}
              className="flex-1"
            />
          </Group>
        </Stack>
        <Group>
          <Button
            type="submit"
            fullWidth
            className="rounded-full bg-dark-blue hover:bg-blue duration-300 ease-in-out transition-all"
          >
            Update Profil
          </Button>
        </Group>
      </form>
    </Stack>
  );
};
export default Profile;
