"use client";

import { Grid, Group, Stack, Text } from "@mantine/core";
import React from "react";
import NavbarMenu from "./NavbarMenu.component";
import ROUTES from "@/utils/constants/routes.const";
import { useAuth } from "@/context/AuthContext.context";
import { usePathname, useRouter } from "next/navigation";
import { WQLSIcon } from "../icons/Stickers.component";
import Link from "next/link";
import { IconLogoutOutline } from "../icons/Icons.component";

export interface IHeaderLayout {}

const HeaderLayout: React.FC<IHeaderLayout> = ({}) => {
  const pathname = usePathname();
  const { logout, isLoggedIn } = useAuth();

  const router = useRouter();
  console.log("pathname", pathname);
  return (
    <header
      className={`py-4 px-40 ${
        pathname == ROUTES.HOME ? "bg-lightest-gray" : "shadow bg-white"
      }`}
    >
      <Grid className="justify-between">
        <Grid.Col span={4}>
          <Link href={ROUTES.HOME}>
            <Group>
              <WQLSIcon size={48} className="" />
              <Stack className="gap-0">
                <Text className="font-quicksand-bold text-xl text-blue">
                  sparring mingguan
                </Text>
                <Text className="-mt-[6px] text-dark-blue text-md">
                  leadearboard
                </Text>
              </Stack>
            </Group>
          </Link>
        </Grid.Col>
        <Grid.Col span={4}>
          <Group className="mx-auto w-fit h-full gap-12">
            <NavbarMenu
              pathname={pathname}
              label="Beranda"
              href={ROUTES.HOME}
            />
            <NavbarMenu pathname={pathname} label="Quiz" href={ROUTES.QUIZ} />
            <NavbarMenu
              pathname={pathname}
              label="Leaderboard"
              href={ROUTES.LEADERBOARD}
            />
          </Group>
        </Grid.Col>
        <Grid.Col span={4}>
          <Group className="h-full justify-end">
            {isLoggedIn ? (
              <Group
                onClick={() => {
                  logout();

                  router.push(ROUTES.LOGIN);
                }}
                className="cursor-pointer gap-2"
              >
                <Text>Log out</Text>
                <IconLogoutOutline size={20} />
              </Group>
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
                <NavbarMenu
                  pathname={pathname}
                  label="Log In"
                  href={ROUTES.LOGIN}
                />
              </>
            )}
          </Group>
        </Grid.Col>
      </Grid>
    </header>
  );
};
export default HeaderLayout;
