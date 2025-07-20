"use client";
import { Stack, Text } from "@mantine/core";
import React from "react";

export interface IHeaderText1 {
  title: string;
  subTitle?: string;
  textPosition?: "start" | "center";
}

const HeaderText1: React.FC<IHeaderText1> = ({
  title,
  subTitle,
  textPosition = "start",
}) => {
  return (
    <Stack className="gap-0">
      <Text
        className={`font-poppins text-primary-text text-4xl ${
          textPosition == "start" ? "text-start" : "text-center"
        }`}
      >
        {title}
      </Text>
      {subTitle && (
        <Text
          className={`text-secondary-text -mt-2 text-md ${
            textPosition == "start" ? "text-start ml-[1px]" : "text-center"
          }`}
        >
          {subTitle}
        </Text>
      )}
    </Stack>
  );
};
export default HeaderText1;
