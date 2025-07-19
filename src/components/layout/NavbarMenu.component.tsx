import { Text } from "@mantine/core";
import { hr } from "date-fns/locale";
import Link from "next/link";
import React from "react";

export interface INavbarMenu {
  label: string;
  href?: string;
  pathname?: string;
}

const NavbarMenu: React.FC<INavbarMenu> = ({
  label,
  href = "#",
  pathname = "",
}) => {
  const isActive= pathname==href
  return (
    <Link href={href}>
      <Text
        className={`text-primary-text duration-300 ease-in-out transition-all ${
          isActive ? "font-semibold" : ""
        }`}
      >
        {label}
      </Text>
    </Link>
  );
};
export default NavbarMenu;
