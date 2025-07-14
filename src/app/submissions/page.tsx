"use client";

import HeaderText1 from "@/components/HeaderText1.component";
import MyTable, { IMyTableColumn } from "@/components/MyTable.component";
import { dummyLeaderboard, dummySubmissions } from "@/utils/constants/dummies.const";
import { Stack } from "@mantine/core";
import React from "react";

export interface ISubmissionPage {}

const columns: IMyTableColumn[] = [
  { key: "number", label: "No", type: "number" },
  { key: "subject", label: "Subject", type: "text" },
  { key: "duration", label: "Duration", type: "duration" },
  { key: "dateSubmitted", label: "Data Submitted", type: "text" },
  { key: "score", label: "Score", type: "number" },
  { key: "rank", label: "Rank", type: "number" },
];

const SubmissionPage: React.FC<ISubmissionPage> = ({}) => {
  return (
    <Stack>
      <HeaderText1 title="Submissions" />
      <MyTable columns={columns} data={dummySubmissions} />
    </Stack>
  );
};
export default SubmissionPage;
