"use client";

import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";
import { Notifications } from "@mantine/notifications";
import { themeColors } from "@/utils/constants/misc.const";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <MantineProvider
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: themeColors,
      }}
    >
      <Notifications />
      {children}
    </MantineProvider>
  );
}
