import HeaderText1 from "@/components/HeaderText1.component";
import { IconQuizOutlinedRounded } from "@/components/icons/Icons.component";
import { StickerQuiz } from "@/components/icons/Stickers.component";
import MainButton from "@/components/MainButton.component";
import { useAuth } from "@/context/AuthContext.context";
import ROUTES from "@/utils/constants/routes.const";
import { Grid, Group, Stack, Text, useMantineTheme } from "@mantine/core";
import React from "react";

export interface IHomeQuizSection {}

const HomeQuizSection: React.FC<IHomeQuizSection> = ({}) => {
  const theme = useMantineTheme();
  return (
    <Grid className="rounded-3xl bg-white py-4 px-6 relative border border-blue mx-20">
      <div className="w-full h-full -bottom-2 -left-2 bg-blue absolute rounded-3xl -z-10"></div>
      <Grid.Col span={6}>
        <Stack className="gap-8 mt-4">
          <Group className="self-center my-2">
            <IconQuizOutlinedRounded
              size={40}
              color={theme.colors["primary-text"][5]}
            />
            <Text className="font-poppins text-primary-text text-4xl">
              Kerja Quiz Sekarang!
            </Text>
          </Group>
          <Stack className="gap-4 px-4">
            <Text className="text-primary-text tracking-4 justify-center">
              Tantang dirimu setiap minggu dengan kumpulan soal pilihan ganda
              dari berbagai bidang seperti Matematika, Informatika, Biologi, dan bidang-bidang lainnya
            </Text>
            <Text className="text-primary-text tracking-4 justify-center">
              Setiap kuis dirancang untuk menguji logika, wawasan, dan
              konsistensi belajarmu
            </Text>
            <Text className="text-primary-text tracking-4 justify-center">
              Ikuti sekarang dan lihat seberapa tinggi kamu bisa naik di
              leaderboard!
            </Text>
          </Stack>
          <Group className="gap-6 justify-center">
            <MainButton
              href={ROUTES.QUIZ}
              label="Kerja Quiz Sekarang"
              buttonColor="blue"
            />
          </Group>
        </Stack>
      </Grid.Col>
      <Grid.Col span={6}>
        <StickerQuiz size={400} />
      </Grid.Col>
    </Grid>
  );
};
export default HomeQuizSection;
