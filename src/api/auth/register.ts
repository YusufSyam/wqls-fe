import axiosInstance from "@/lib/axiosInstance";

interface RegisterPayload {
  username: string;
  email: string;
  password: string;
  name: string;
  number: string;
  school: string;
  tutor_name: string;
  tutor_number: string;
}

export const registerUser = async (data: RegisterPayload) => {
  const res = await axiosInstance.post("auth/users/", data);
  return res.data;
};