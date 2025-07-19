"use client";

import {
  ILeaderboardResponseItem,
  getLeaderboard,
} from "@/api/leaderboard.api";
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
  { key: "rank", label: "Peringkat", type: "number" },
  { key: "name", label: "Nama", type: "text" },
  { key: "duration", label: "Durasi Ujian", type: "duration" },
  { key: "score", label: "Skor", type: "number" },
];

const ITEMS_PER_PAGE = 20;

const LeaderboardBySubjectPage: React.FC<ILeaderboardBySubjectPage> = ({}) => {
  const params = useParams();
  const { subject } = params as { subject: string };
  const [loading, setLoading] = useState(true);
  const [leaderboard, setLeaderboard] = useState<ILeaderboardItem[]>([]);

  const [totalCount, setTotalCount] = useState(0);
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  //   const currentPage = parseInt((page as string) || "1");
  //   const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  console.log("subject", subject);

  const fetchLeaderboard = async (offset: number) => {
    setLoading(true);
    try {
      const data: ILeaderboardResponseItem = await getLeaderboard(
        ITEMS_PER_PAGE,
        offset,
        subject
      );
      console.log("data leaderboard", data);
      setLeaderboard(data?.data);
      setTotalCount(data?.total);
    } catch (error) {
      console.error("Failed to fetch leaderboard:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard(0);
  }, []);

  console.log("zzz", leaderboard);
  return (
    <Stack className="px-40 py-10 gap-8">
      <HeaderText1
        title="Leaderboard"
        subTitle={`Daftar nilai quiz ${subject} siswa diurutkan berdasarkan nilai tertinggi dan durasi terpendek`}
      />
      <MyTable columns={columns} data={leaderboard} isLoading={loading} />
      <div style={{ marginTop: "1rem" }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => {
              fetchLeaderboard(ITEMS_PER_PAGE);
            }}
            style={{
              fontWeight: "normal",
              marginRight: "0.5rem",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </Stack>
  );
};
export default LeaderboardBySubjectPage;
