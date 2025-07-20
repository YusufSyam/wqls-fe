import { IQuizzesWithStats } from "@/app/leaderboard/page";
import { IQuizSubmissionHistoryItem } from "@/app/quiz/history/page";
import axios from "@/lib/axiosInstance";

export interface IQuizSubmissionHistory {
  data: IQuizSubmissionHistoryItem[];
}

export const getQuizSubmissionHistory = async (): Promise<
  IQuizSubmissionHistoryItem[]
> => {
  const response = await axios.get(`/quiz/history/`);

  return response.data;
};

export const getQuizzesListWithStats = async (): Promise<
  IQuizzesWithStats[]
> => {
  const response = await axios.get(`/quiz/quizzes-stats/`);

  return response.data;
};

export const postQuiz = async (
  quiz: number,
  score: number,
  user_start: string,
  user_end: string
): Promise<any> => {
  const response = await axios.post(`/quiz/submit/`, {
    quiz: quiz,
    score: score,
    user_start: user_start,
    user_end: user_end,
  });

  return response.data;
};
