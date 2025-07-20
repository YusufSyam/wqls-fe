"use client";

import HeaderText1 from "@/components/HeaderText1.component";
import { useAuth } from "@/context/AuthContext.context";
import { Stack } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export interface IProfile {}

const Profile: React.FC<IProfile> = ({}) => {
  const router = useRouter();

  const { user, isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
      notifications.show({
        title: "Silahkan login terlebih dahulu",
        message:
          "Login untuk melihat profil anda",
        color: "red",
      });
    }
  }, [isLoggedIn, router]);

  console.log('user', user)
  return (
    <Stack className="gap-12 px-40 py-10">
      <HeaderText1 title="Profil" />
    </Stack>
  );
};
export default Profile;
