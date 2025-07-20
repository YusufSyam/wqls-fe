"use client";

import { Group, Stack, Text } from "@mantine/core";
import React from "react";
import { WQLSIcon } from "../icons/Stickers.component";

export interface IFooterLayout {}

const FooterLayout: React.FC<IFooterLayout> = ({}) => {
  return (
    <footer>
      <Stack className="pt-8 bg-dark-blue mt-20 gap-8">
        <Group className="self-center">
          {/* <div className="w-12">
            <img src={"assets/images/icon-white.png"} />
          </div> */}
          <div className="rounded-full bg-white p-2">
            
          <WQLSIcon size={28} className="" />
          </div>
          <Stack className="gap-0">
            <Text className="font-quicksand-bold text-xl text-white">
              sparring mingguan
            </Text>
            <Text className="-mt-[6px] text-white text-md">leadearboard</Text>
          </Stack>
        </Group>
        <Stack className="gap-0 py-4 border-t border-white">
          <Text className="text-white text-center">
            © 2025 Pejuang OSN. All rights reserved.
          </Text>
          <Text className="text-secondary text-center text-md">
            Icons provided by Google Icons. Stickers by Flaticon.
          </Text>
        </Stack>
      </Stack>
    </footer>
  );
};
export default FooterLayout;
