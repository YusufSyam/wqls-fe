"use client";

import { Group, Text } from "@mantine/core";
import React from "react";
import NavbarMenu from "./NavbarMenu.component";

export interface IHeaderLayout {}

const HeaderLayout: React.FC<IHeaderLayout> = ({}) => {
  return (
    <Group className="justify-between">
      <Text>OSN</Text>
      <Group className="gap-8">
        <NavbarMenu label="Submit" />
        <NavbarMenu label="Leaderboard" />
        <Text>|</Text>
        <NavbarMenu label="Logout" />
      </Group>
    </Group>
  );
};
export default HeaderLayout;
