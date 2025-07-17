import { ILeaderboardItem } from "@/app/leaderboard/page";
import axios from "@/lib/axiosInstance";

export interface ILeaderboardResponseItem {
  data: ILeaderboardItem[];
  total: number;
}

export const getLeaderboard = async (
  limit: number = 10,
  offset: number = 0,
  bidang?: string
): Promise<ILeaderboardResponseItem> => {
  const params: any = { limit, offset };
//   if (bidang) {
//     params.bidang = bidang;
//   }
    // bidang= 'astronomi'

  const response = await axios.get(`/quiz/leaderboard/${bidang}/`, { params });
  
  return response.data;
};
