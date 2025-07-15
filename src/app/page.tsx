"use client";
import HeaderText1 from "@/components/HeaderText1.component";
import { useAuth } from "@/context/AuthContext.context";
import { Stack, Text } from "@mantine/core";

import React from "react";

export interface IHomePage {}

const HomePage: React.FC<IHomePage> = ({}) => {
  const { user } = useAuth();
  return (
    <Stack>
      <HeaderText1 title={`Selamat Datang ${user?.username}`} subTitle="lorem ipsum dolor sit amet" />
      
    </Stack>
  );
};
export default HomePage;
