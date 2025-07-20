"use client";

import HeaderText1 from "@/components/HeaderText1.component";
import MainButton from "@/components/MainButton.component";
import ROUTES from "@/utils/constants/routes.const";
import { Stack, Text } from "@mantine/core";
import React from "react";

export interface INotFoundPage {}

const NotFoundPage: React.FC<INotFoundPage> = ({}) => {
  return (
    <Stack className="gap-2 self-center py-40">
      <HeaderText1
        title="Halaman Tidak Ditemukan"
        subTitle="Periksa url anda atau kembali ke halaman beranda"
        textPosition="center"
      />
      <div className="w-fit mx-auto">

      <MainButton href={ROUTES.HOME} label="Kembali Ke Beranda" type="link" />
      </div>
    </Stack>
  );
};
export default NotFoundPage;
