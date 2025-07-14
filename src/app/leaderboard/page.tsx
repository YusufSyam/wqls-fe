"use client";

import HeaderText1 from "@/components/HeaderText1.component";
import MyTable, { IMyTableColumn } from "@/components/MyTable.component";
import { dummyLeaderboard } from "@/utils/constants/dummies.const";
import { Stack } from "@mantine/core";
import React from "react";

export interface ILeaderboardPage {}

const columns: IMyTableColumn[] = [
  { key: "rank", label: "Rank", type: "number" },
  { key: "username", label: "Username", type: "text" },
  { key: "duration", label: "Duration", type: "duration" },
  { key: "score", label: "Score", type: "number" },
  { key: "subject", label: "Subject", type: "text" },
];

const LeaderboardPage: React.FC<ILeaderboardPage> = ({}) => {
  return (
    <Stack>
      <HeaderText1 title="Leaderboard" />
      <MyTable columns={columns} data={dummyLeaderboard} />
    </Stack>
  );
};
export default LeaderboardPage;
