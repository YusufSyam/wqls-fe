"use client";

import {
  ILeaderboardResponseItem,
  getLeaderboard,
} from "@/api/leaderboard.api";
import { getQuizzesListWithStats } from "@/api/quiz.api";
import HeaderText1 from "@/components/HeaderText1.component";
import Loading from "@/components/Loading.component";
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

const LeaderboardPage: React.FC<ILeaderboardPage> = ({}) => {
  const [loading, setLoading] = useState(true);
  const [quizzes, setQuizzes] = useState<IQuizzesWithStats[]>([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      setLoading(true);
      try {
        const data: IQuizzesWithStats[] = await getQuizzesListWithStats();
        // console.log("data leaderboard", data);
        setQuizzes(data);
      } catch (error) {
        console.error("Failed to fetch leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  // console.log("quizzes", quizzes);
  return (
    <Stack className="px-40 py-10 gap-8">
      <HeaderText1
        title="Daftar Subjek"
        subTitle="Pilih salah satu dari subjek di bawah untuk melihat leaderboard"
      />
      {/* <MyTable columns={columns} data={leaderboard} /> */}
      {loading ? (
        <Loading />
      ) : (
        <Grid gutter={32}>
          {quizzes?.map((quiz: IQuizzesWithStats) => {
            return (
              <Grid.Col
                key={quiz?.id}
                span={4}
                className="hover:translate-x-1 hover:-translate-y-1 transition-all duration-200 ease-linear"
              >
                <QuizCard {...quiz} />
              </Grid.Col>
            );
          })}
        </Grid>
      )}
    </Stack>
  );
};
export default LeaderboardPage;
