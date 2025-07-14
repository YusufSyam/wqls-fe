import { Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

export interface INavbarMenu {
  label: string;
  href?: string;
}

const NavbarMenu: React.FC<INavbarMenu> = ({ label, href = "#" }) => {
  return (
    <Link href={href}>
      <Text>{label}</Text>
    </Link>
  )
};
export default NavbarMenu;
