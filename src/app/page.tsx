"use client";
import HeaderText1 from "@/components/HeaderText1.component";
import { Stack, Text } from "@mantine/core";

import React from "react";

export interface IHomePage {}

const HomePage: React.FC<IHomePage> = ({}) => {
  return (
    <Stack>
      <HeaderText1 title="Selamat Datang" subTitle="lorem ipsum dolor sit amet" />
    </Stack>
  );
};
export default HomePage;
