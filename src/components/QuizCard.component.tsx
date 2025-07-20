import { IQuizzesWithStats } from "@/app/leaderboard/page";
import { useAuth } from "@/context/AuthContext.context";
import ROUTES from "@/utils/constants/routes.const";
import { Group, Stack, Text, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { IconRenderer } from "./icons/IconRenderer.component";

const QuizCard: React.FC<IQuizzesWithStats> = ({
  bidang,
  end_date,
  id,
  start_date,
  title,
  total_submissions,
  user_submissions,
  user_best_rank,
}) => {
  const { isLoggedIn } = useAuth();
  const theme = useMantineTheme();
  return (
    <Link
      href={`${ROUTES.LEADERBOARD}/${bidang?.toLowerCase()}`}
      className="relative"
    >
      <div className="w-full h-full absolute bg-light-blue -z-50 -left-2 -bottom-2 rounded-lg hover:tran"></div>
      <Stack className="py-4 px-6 w-full rounded-lg bg-dark-blue overflow-hidden relative">
        <IconRenderer
          iconName={bidang}
          size={44}
          color={theme?.colors['light-blue'][5]+"44"}
          className="absolute right-4 top-5"
        />
        <Stack className="gap-0 z-10">
          <Text className="text-white font-quicksand-semibold text-xl">
            {bidang}
          </Text>
          <Text className="text-md text-white -mt-1">
            {total_submissions} entry
          </Text>
        </Stack>
        {!isLoggedIn ? (
          <Text className="text-md text-white z-10">
            Login untuk melihat informasi ranking anda
          </Text>
        ) : (
          <>
            {user_submissions <= 0 ? (
              <Text className="text-md text-secondary italic z-10">
                Anda belum pernah melakukan quiz ini
              </Text>
            ) : (
              <Group className="gap-4 z-10">
                <Text className="text-md text-white -mt-1">
                  Rank tertinggi: {user_best_rank || "-"}
                </Text>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <Text className="text-md text-white -mt-1">
                  Total submit: {user_submissions || "-"}
                </Text>
              </Group>
            )}
          </>
        )}
      </Stack>
    </Link>
  );
};
export default QuizCard;
