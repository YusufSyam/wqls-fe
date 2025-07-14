"use client";

import { Group, Text } from "@mantine/core";
import React from "react";
import NavbarMenu from "./NavbarMenu.component";
import ROUTES from "@/utils/constants/routes.const";

export interface IHeaderLayout {}

const HeaderLayout: React.FC<IHeaderLayout> = ({}) => {
  return (
    <Group className="justify-between">
        <NavbarMenu label="OSN" href={ROUTES.HOME} />
      <Group className="gap-8">
        <NavbarMenu label="Quiz" href={ROUTES.QUIZ} />
        <NavbarMenu label="Submissions" href={ROUTES.SUBMISSIONS} />
        <NavbarMenu label="Leaderboard" href={ROUTES.LEADERBOARD} />
        <Text>|</Text>
        <NavbarMenu label="Log Out"/>
        <NavbarMenu label="Log In" href={ROUTES.LOGIN}/>
      </Group>
    </Group>
  );
};
export default HeaderLayout;
