import { IQuizzesWithStats } from "@/app/leaderboard/page";
import ROUTES from "@/utils/constants/routes.const";
import { Stack, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

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
  return (
    <Link href={`${ROUTES.LEADERBOARD}/${bidang?.toLowerCase()}`}>
      <Stack className="p-4 w-full rounded-lg border border-secondary">
        <Text>{title}</Text>
      </Stack>
    </Link>
  );
};
export default QuizCard;
