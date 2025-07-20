import HeaderText1 from "@/components/HeaderText1.component";
import Loading from "@/components/Loading.component";
import QuizCard from "@/components/QuizCard.component";
import { Grid, Stack } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { IQuizzesWithStats } from "./leaderboard/page";
import { getQuizzesListWithStats } from "@/api/quiz.api";

export interface IHomeLeaderboardSection {}

const HomeLeaderboardSection: React.FC<IHomeLeaderboardSection> = ({}) => {
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
    <Stack className="gap-8">
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
export default HomeLeaderboardSection;
