"use client";

import {
  ILeaderboardResponseItem,
  getLeaderboard,
} from "@/api/leaderboard.api";
import HeaderText1 from "@/components/HeaderText1.component";
import MyTable, { IMyTableColumn } from "@/components/MyTable.component";
import { dummyLeaderboard } from "@/utils/constants/dummies.const";
import { TQuizSubject } from "@/utils/constants/quizSubject.const";
import { Button, Group, Stack, Text } from "@mantine/core";
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
  { key: "username", label: "Username", type: "text" },
  { key: "duration", label: "Durasi Ujian", type: "duration" },
  { key: "score", label: "Skor", type: "number" },
];

const ITEMS_PER_PAGE = 20;

const LeaderboardBySubjectPage: React.FC<ILeaderboardBySubjectPage> = ({}) => {
  const params = useParams();
  const { subject } = params as { subject: string };
  const [loading, setLoading] = useState(true);
  const [leaderboard, setLeaderboard] = useState<ILeaderboardItem[]>([]);
  const [userRankList, setUserRankList] = useState<number[]>([]);

  const [totalCount, setTotalCount] = useState(0);
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  const [activePage, setActivePage] = useState(1);
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
      setUserRankList(data?.userRankList || []);
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
      {userRankList?.length > 0 && (
        <Stack className="gap-0">
          <Text className="text-primary-text font-quicksand-semibold text-2xl">
            Ranking {Math.min(...userRankList)}
          </Text>
          <Text className="text-secondary-text text-md -mt-1">
            Ranking tertinggi anda setelah melakukan quiz sebanyak{" "}
            {userRankList?.length}x
          </Text>
        </Stack>
      )}
      <MyTable
        columns={columns}
        data={leaderboard}
        isLoading={loading}
        tableSpotlightIndexList={userRankList}
      />
      <Group className="gap-0 self-center">
        <Button
          onClick={() => {
            fetchLeaderboard(0);
          }}
          style={{
            fontWeight: "normal",
            marginRight: "0.5rem",
          }}
          className="rounded-full bg-dark-blue text-white px-4 py-2 hover:bg-blue duration-300 ease-in-out"
        >
          {"<"}
        </Button>
        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            onClick={() => {
              if (activePage != i + 1) {
                fetchLeaderboard(ITEMS_PER_PAGE * i);
                setActivePage(i+1)
              }
            }}
            style={{
              fontWeight: "normal",
              marginRight: "0.5rem",
            }}
            className={`rounded-full text-white px-4 py-2 duration-300 ease-in-out ${activePage==i+1? "cursor-default bg-primary-text hover:bg-primary-text" : "bg-dark-blue cursor-pointer hover:bg-blue"}`}
          >
            {i + 1}
          </Button>
        ))}
        <Button
          onClick={() => {
            fetchLeaderboard(ITEMS_PER_PAGE * (totalPages - 1));
          }}
          style={{
            fontWeight: "normal",
            marginRight: "0.5rem",
          }}
          className="rounded-full bg-dark-blue text-white px-4 py-2 hover:bg-blue duration-300 ease-in-out"
        >
          {">"}
        </Button>
      </Group>
    </Stack>
  );
};
export default LeaderboardBySubjectPage;
