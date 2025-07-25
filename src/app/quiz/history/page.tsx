"use client";

import {
  ILeaderboardResponseItem,
  getLeaderboard,
} from "@/api/leaderboard.api";
import {
  getQuizSubmissionHistory,
  IQuizSubmissionHistory,
} from "@/api/quiz.api";
import HeaderText1 from "@/components/HeaderText1.component";
import MyTable, { IMyTableColumn } from "@/components/MyTable.component";
import {
  dummyLeaderboard,
  dummySubmissions,
} from "@/utils/constants/dummies.const";
import { Stack } from "@mantine/core";
import React, { useEffect, useState } from "react";

export interface ISubmissionPage {}

export interface IQuizSubmissionHistoryItem {
  id: number;
  quizId: number;
  score: number;
  duration: number;
  user_start: Date;
  user_end: Date;
}

const columns: IMyTableColumn[] = [
  { key: "index", label: "No", type: "number" },
  { key: "quiz", label: "Subject", type: "subject" },
  { key: "duration", label: "Duration", type: "duration" },
  { key: "user_end", label: "Data Submitted", type: "date" },
  { key: "score", label: "Score", type: "number" },
];

const SubmissionPage: React.FC<ISubmissionPage> = ({}) => {
  const [loading, setLoading] = useState(true);
  const [quizSubmissionHistory, setQuizSubmissionHistory] = useState<
    IQuizSubmissionHistoryItem[]
  >([]);

  useEffect(() => {
    const fetchQuizSubmissionHistory = async () => {
      setLoading(true)
      try {
        const data: IQuizSubmissionHistoryItem[] =
          await getQuizSubmissionHistory();
        // console.log("data quiz submission", data);
        setQuizSubmissionHistory(data);
      } catch (error) {
        console.error("Failed to fetch leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizSubmissionHistory();
  }, []);

  // console.log("quizSubmissionHistory", quizSubmissionHistory);
  return (
    <Stack className="px-40 py-10">
      <HeaderText1 title="Riwayat" subTitle="Riwayat pengerjaan quiz" />
      <MyTable columns={columns} data={quizSubmissionHistory} isLoading={loading} />
    </Stack>
  );
};
export default SubmissionPage;
