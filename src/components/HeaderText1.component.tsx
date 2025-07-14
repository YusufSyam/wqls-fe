"use client";
import { Stack, Text } from "@mantine/core";
import React from "react";

export interface IHeaderText1 {
  title: string;
  subTitle?: string;
}

const HeaderText1: React.FC<IHeaderText1> = ({ title, subTitle }) => {
  return (
    <Stack className="gap-0">
      <Text className="font-poppins text-primary-text text-2xl">
        {title}
      </Text>
      {subTitle && (
        <Text className=" text-secondary-text">
          {subTitle}
        </Text>
      )}
    </Stack>
  );
};
export default HeaderText1;
