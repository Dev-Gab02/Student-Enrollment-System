import API from "../api/axios";

export const login = async (data) => {
  const response =
    await API.post("/auth/login", data);

  return response.data;
};