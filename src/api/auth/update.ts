import axiosInstance from "@/lib/axiosInstance";

export interface UpdateProfilePayload {
  name: string | undefined;
  number: string | undefined;
  school: string | undefined;
  tutor_name: string | undefined;
  tutor_number: string | undefined;
}

export const updateUserProfile = async (
  payload: UpdateProfilePayload
) => {
  const response = await axiosInstance.put(`quiz/me/update/`, payload);
  return response.data;
};
