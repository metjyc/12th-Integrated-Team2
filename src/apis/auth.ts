import { apiClient } from "./apiClient";

export const signup = async (username: string, password: string) => {
  try {
    const res = await apiClient.post("/auth/signup", {
      username,
      password,
    });
    return res.data;
  } catch (error) {
    console.error("회원가입에러: ", error);
    throw error;
  }
};

export const login = async (username: string, password: string) => {
  try {
    const res = await apiClient.post("/auth/login", {
      username,
      password,
    });
    return res.data;
  } catch (error) {
    console.error("로그인에러: ", error);
  }
};

export const logout = async () => {
  try {
    const res = await apiClient.post("/auth/logout", {});
  } catch (error) {
    console.error("로그아웃에러: ", error);
  }
};
