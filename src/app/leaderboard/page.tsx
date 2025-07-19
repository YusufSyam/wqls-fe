"use client";

import {
  ILeaderboardResponseItem,
  getLeaderboard,
} from "@/api/leaderboard.api";
import { getQuizzesListWithStats } from "@/api/quiz.api";
import HeaderText1 from "@/components/HeaderText1.component";
import MyTable, { IMyTableColumn } from "@/components/MyTable.component";
import QuizCard from "@/components/QuizCard.component";
import { dummyLeaderboard } from "@/utils/constants/dummies.const";
import { TQuizSubject } from "@/utils/constants/quizSubject.const";
import { Grid, Stack } from "@mantine/core";
import React, { useEffect, useState } from "react";

export interface ILeaderboardPage {}

export interface ILeaderboardItem {
  rank: number;
  username: string;
  duration: number;
  score: number;
  subject: TQuizSubject;
}

export interface IQuizzesWithStats {
  id: number;
  title: string;
  bidang: TQuizSubject;
  start_date: string;
  end_date: string;
  total_submissions: number;
  user_submissions: number;
  user_best_rank?: number | null;
}

const columns: IMyTableColumn[] = [
  { key: "rank", label: "Rank", type: "number" },
  { key: "username", label: "Username", type: "text" },
  { key: "duration", label: "Duration", type: "duration" },
  { key: "score", label: "Score", type: "number" },
  { key: "subject", label: "Subject", type: "text" },
];

const LeaderboardPage: React.FC<ILeaderboardPage> = ({}) => {
  const [loading, setLoading] = useState(true);
  const [leaderboard, setLeaderboard] = useState<ILeaderboardItem[]>([]);
  const [quizzes, setQuizzes] = useState<IQuizzesWithStats[]>([]);

  // useEffect(() => {
  //   const fetchLeaderboard = async () => {
  //     try {
  //       const data : ILeaderboardResponseItem = await getLeaderboard(10, 0, "Matematika");
  //       console.log('data leaderboard',data)
  //       setLeaderboard(data?.data)
  //     } catch (error) {
  //       console.error("Failed to fetch leaderboard:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchLeaderboard();
  // }, []);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const data: IQuizzesWithStats[] = await getQuizzesListWithStats();
        console.log("data leaderboard", data);
        setQuizzes(data);
      } catch (error) {
        console.error("Failed to fetch leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  console.log("quizzes", quizzes);
  return (
    <Stack>
      <HeaderText1 title="Leaderboard" />
      {/* <MyTable columns={columns} data={leaderboard} /> */}
      <Grid gutter={"xl"}>
        {quizzes?.map((quiz: IQuizzesWithStats) => {
          return (
            <Grid.Col key={quiz?.id} span={4}>
              <QuizCard {...quiz} />
            </Grid.Col>
          );
        })}
      </Grid>

      <Stack></Stack>
    </Stack>
  );
};
export default LeaderboardPage;
