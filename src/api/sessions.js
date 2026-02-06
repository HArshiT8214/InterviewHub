
import { useAxios } from "../lib/useAxios.js";

export const sessionApi = () => {
  const axios = useAxios();

  return {
    createSession: (data) =>
      axios.post("/api/sessions", data).then((res) => res.data),

    getActiveSessions: () =>
      axios.get("/api/sessions/active").then((res) => res.data),

    getMyRecentSessions: () =>
      axios.get("/api/sessions/my-recent").then((res) => res.data),

    getSessionById: (id) =>
      axios.get(`/api/sessions/${id}`).then((res) => res.data),

    joinSession: (id) =>
      axios.post(`/api/sessions/${id}/join`).then((res) => res.data),

    endSession: (id) =>
      axios.post(`/api/sessions/${id}/end`).then((res) => res.data),

    getStreamToken: () =>
      axios.get("/api/chat/token").then((res) => res.data),
  };
};
