import axiosInstance from "@/lib/axiosInstance";

interface LoginPayload {
  username: string;
  password: string;
}

export const loginUser = async (data: LoginPayload) => {
  const res = await axiosInstance.post("auth/jwt/create/", data);
  const { access, refresh } = res.data;

  localStorage.setItem("access_token", access);
  localStorage.setItem("refresh_token", refresh);

  return { access, refresh };
};

export const getCurrentUser = async () => {
  const res = await axiosInstance.get("auth/users/me/");
  return res.data; // akan berisi user object
};

