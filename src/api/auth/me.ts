import axiosInstance from "@/lib/axiosInstance";

export const getMe = async () => {
  const access = localStorage.getItem("access_token");

  const res = await axiosInstance.get("auth/users/me/", {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });

  return res.data;
};
