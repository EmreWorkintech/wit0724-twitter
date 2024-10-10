import axios from "axios";

const axiosInstance = () => {
  const { token } = JSON.parse(localStorage.getItem("user"));

  return axios.create({
    baseURL: "https://66fce9bac3a184a84d185a08.mockapi.io/api/v1",
    headers: token
      ? {
          Authorization: token,
        }
      : {},
  });
};

export const API = axiosInstance();

export const getTweets = () => {
  return API.get("/tweets").then((response) => response.data);
};

export const addTweet = (tweet) => {
  return API.post("/tweets", tweet).then((response) => response.data);
};

export const deleteTweet = (id) => {
  return API.delete(`/tweets/${id}`).then((response) => response.data);
};

export const updateTweet = (id, tweet) => {
  return API.put(`/tweets/${id}`, tweet).then((response) => response.data);
};
