import BubbleChat from "@/components/BubbleChat.component";
import HeaderText1 from "@/components/HeaderText1.component";
import {
  IconHistory,
  IconLeaderboardOutlinedRounded,
  IconQuizOutlinedRounded,
} from "@/components/icons/Icons.component";
import { StickerChampion } from "@/components/icons/Stickers.component";
import MainButton from "@/components/MainButton.component";
import { useAuth } from "@/context/AuthContext.context";
import ROUTES from "@/utils/constants/routes.const";
import { Button, Group, Stack, Text } from "@mantine/core";
import React from "react";

export interface IHeroSection {}

const HeroSection: React.FC<IHeroSection> = ({}) => {
  const { user, isLoggedIn } = useAuth();
  return (
    <Stack className="relative bg-[#EEEEEE] px-40 pt-10 pb-12">
      <Stack className="self-end max-w-[55%] z-10 gap-8">
        <Stack className="gap-0">
          <Text className="font-poppins text-6xl text-primary-text tracking-4">
            Sparring Mingguan
          </Text>
          <Text className="text-dark-blue tracking-5 font-semibold -mt-1">
            Platform quiz mingguan dengan sistem leaderboard interaktif
          </Text>
        </Stack>
        <Stack className="ml-1 gap-6">
          <BubbleChat
            chat="Bergabunglah dalam tantangan sparring mingguan dan lihat
                  sejauh mana kamu bisa melaju di leaderboard!"
          />
          <BubbleChat chat="Belajar, berkompetisi, dan jadilah yang terbaik setiap minggu" />
          <Stack className="rounded-3xl  bg-white py-4 px-6 relative border border-blue">
            <div className="w-full h-full -bottom-2 -left-1 bg-blue absolute rounded-3xl -z-10"></div>
            <Text className="text-primary-text z-10 font-poppins">
              Jelajahi :
            </Text>
            <Group className="gap-6">
              <MainButton
                icon={<IconQuizOutlinedRounded size={20} color="white" />}
                href={ROUTES.QUIZ}
                label="Kerja Quiz"
              />
              <MainButton
                icon={
                  <IconLeaderboardOutlinedRounded size={20} color="white" />
                }
                href={ROUTES.LEADERBOARD}
                label="Periksa Ranking"
              />
              <MainButton
                icon={<IconHistory size={20} color="white" />}
                href={ROUTES.SUBMISSIONS}
                label="Riwayat Quiz"
              />
            </Group>
          </Stack>
        </Stack>
      </Stack>
      <StickerChampion size={512} className="absolute left-28 -top-10" />
    </Stack>
  );
};
export default HeroSection;
