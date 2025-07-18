import { IQuizSubmissionHistoryItem } from "@/app/quiz/history/page";
import axios from "@/lib/axiosInstance";

export interface IQuizSubmissionHistory {
  data: IQuizSubmissionHistoryItem[];
}

export const getQuizSubmissionHistory = async (
): Promise<IQuizSubmissionHistoryItem[]> => {

  const response = await axios.get(`/quiz/submissions/history/`);
  
  return response.data;
};
