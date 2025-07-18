"use client";

import { ILeaderboardResponseItem, getLeaderboard } from "@/api/leaderboard.api";
import HeaderText1 from "@/components/HeaderText1.component";
import MyTable, { IMyTableColumn } from "@/components/MyTable.component";
import { dummyLeaderboard } from "@/utils/constants/dummies.const";
import { TQuizSubject } from "@/utils/constants/quizSubject.const";
import { Stack } from "@mantine/core";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export interface ILeaderboardBySubjectPage {}

export interface ILeaderboardItem {
  rank: number;
  username: string;
  duration: number;
  score: number;
  subject: TQuizSubject;
}

const columns: IMyTableColumn[] = [
  { key: "rank", label: "Rank", type: "number" },
  { key: "username", label: "Username", type: "text" },
  { key: "duration", label: "Duration", type: "duration" },
  { key: "score", label: "Score", type: "number" },
  { key: "subject", label: "Subject", type: "text" },
];

const LeaderboardBySubjectPage: React.FC<ILeaderboardBySubjectPage> = ({}) => {
    
  const params = useParams()
  const { subject } = params as { subject: string }
  const [loading, setLoading] = useState(true);
  const [leaderboard, setLeaderboard] = useState<ILeaderboardItem[]>([]);

  console.log('subject', subject)
  
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data : ILeaderboardResponseItem = await getLeaderboard(20, 0, subject);
        console.log('data leaderboard',data)
        setLeaderboard(data?.data)
      } catch (error) {
        console.error("Failed to fetch leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  console.log('zzz',leaderboard)
  return (
    <Stack>
      <HeaderText1 title="Leaderboard" />
      <MyTable columns={columns} data={leaderboard} />
    </Stack>
  );
};
export default LeaderboardBySubjectPage;
