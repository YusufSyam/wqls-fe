import { Text } from "@mantine/core";
import React from "react";

export interface IBubbleChat {
  chat: string;
}

const BubbleChat: React.FC<IBubbleChat> = ({ chat }) => {
  return (
    <div className="rounded-full  bg-white py-2 px-6 relative border border-blue">
      <div className="w-full h-full -bottom-2 -left-1 bg-blue absolute rounded-full -z-10"></div>
      <Text className="text-primary-text z-10">{chat}</Text>
    </div>
  );
};
export default BubbleChat;
