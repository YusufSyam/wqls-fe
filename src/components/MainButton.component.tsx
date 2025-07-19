import { Button, Group, Text } from "@mantine/core";
import Link from "next/link";
import React, { ReactNode } from "react";

export interface IMainButton {
  label: string;
  icon?: ReactNode;
  href?: string;
  type?: "link" | "click";
}

const MainButton: React.FC<IMainButton> = ({
  icon,
  label,
  href = "#",
  type = "link",
}) => {
  const myButton = (
    <Group className=" rounded-xl bg-dark-blue tracking-4 py-2 px-4 gap-2 items-center hover:bg-blue duration-300 ease-in-out transition-all">
      {icon && icon}
      <Text className="text-white mb-[1px]">{label}</Text>
    </Group>
  );
  return <>{type == "link" ? <Link href={href}>{myButton}</Link> : <></>}</>;
};
export default MainButton;
