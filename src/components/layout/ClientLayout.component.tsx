"use client";

import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";
import { Notifications } from "@mantine/notifications";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Notifications />
      {children}
    </MantineProvider>
  );
}
