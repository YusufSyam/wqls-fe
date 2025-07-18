"use client";

import { Group, Text } from "@mantine/core";
import React from "react";
import NavbarMenu from "./NavbarMenu.component";
import ROUTES from "@/utils/constants/routes.const";
import { useAuth } from "@/context/AuthContext.context";
import { useRouter } from "next/navigation";

export interface IHeaderLayout {}

const HeaderLayout: React.FC<IHeaderLayout> = ({}) => {
  const { logout, isLoggedIn } = useAuth();

  const router = useRouter();

  return (
    <Group className="justify-between">
      <NavbarMenu label="OSN" href={ROUTES.HOME} />
      <Group className="gap-8">
        <NavbarMenu label="Quiz" href={ROUTES.QUIZ} />
        <NavbarMenu label="Submissions" href={ROUTES.SUBMISSIONS} />
        <NavbarMenu label="Leaderboard" href={ROUTES.LEADERBOARD} />
        <Text>|</Text>
        {isLoggedIn ? (
          <div
            onClick={() => {
              logout();

              router.push(ROUTES.LOGIN);
            }}
            className="cursor-pointer"
          >
            <Text>Log out</Text>
          </div>
        ) : (
          <>
            {/* <div
              onClick={() => {
                logout();

                router.push(ROUTES.LOGIN);
              }}
              className="cursor-pointer"
            >
              <Text>Log out</Text>
            </div> */}
            <NavbarMenu label="Log In" href={ROUTES.LOGIN} />
          </>
        )}
      </Group>
    </Group>
  );
};
export default HeaderLayout;
