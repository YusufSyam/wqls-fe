import { ILeaderboardItem } from "@/app/leaderboard/page";
import { TQuizSubject } from "./quizSubject.const";


export const dummyLeaderboard : ILeaderboardItem[] = [
  { rank: 1, username: "alice", duration: 95, score: 98, subject: "Kimia" },
  { rank: 2, username: "bob", duration: 110, score: 95, subject: "Biologi" },
  {
    rank: 3,
    username: "charlie",
    duration: 122,
    score: 91,
    subject: "Matematika",
  },
];

export const dummySubmissions = [
  {
    number: 1,
    subject: "Matematika",
    duration: 134,
    dateSubmitted: "2025-07-13 14:35",
    score: 92,
    rank: 5,
  },
  {
    number: 2,
    subject: "Biologi",
    duration: 148,
    dateSubmitted: "2025-07-13 15:10",
    score: 88,
    rank: 12,
  },
  {
    number: 3,
    subject: "Kimia",
    duration: 112,
    dateSubmitted: "2025-07-12 13:20",
    score: 95,
    rank: 3,
  },
  {
    number: 4,
    subject: "Geografi",
    duration: 165,
    dateSubmitted: "2025-07-12 16:05",
    score: 84,
    rank: 19,
  },
  {
    number: 5,
    subject: "Informatika",
    duration: 120,
    dateSubmitted: "2025-07-11 09:50",
    score: 98,
    rank: 1,
  },
  {
    number: 6,
    subject: "Ekonomi",
    duration: 140,
    dateSubmitted: "2025-07-11 11:30",
    score: 81,
    rank: 23,
  },
  {
    number: 7,
    subject: "Kebumian",
    duration: 105,
    dateSubmitted: "2025-07-10 14:45",
    score: 89,
    rank: 10,
  },
  {
    number: 8,
    subject: "Astronomi",
    duration: 133,
    dateSubmitted: "2025-07-10 17:25",
    score: 91,
    rank: 8,
  },
  {
    number: 9,
    subject: "Kimia",
    duration: 149,
    dateSubmitted: "2025-07-09 10:10",
    score: 87,
    rank: 15,
  },
  {
    number: 10,
    subject: "Matematika",
    duration: 158,
    dateSubmitted: "2025-07-09 15:55",
    score: 93,
    rank: 6,
  },
];
