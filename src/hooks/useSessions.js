import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sessionApi } from "../api/sessions";

export const useCreateSession = () => {
  const api = sessionApi(); // ✅ CALL IT

  return useMutation({
    mutationKey: ["createSession"],
    mutationFn: api.createSession, // ✅ now valid
    onSuccess: () => toast.success("Session created successfully!"),
    onError: (error) =>
      toast.error(
        error?.response?.data?.message || "Failed to create room"
      ),
  });
};

export const useActiveSessions = () => {
  const api = sessionApi();

  return useQuery({
    queryKey: ["activeSessions"],
    queryFn: api.getActiveSessions,
  });
};

export const useMyRecentSessions = () => {
  const api = sessionApi();

  return useQuery({
    queryKey: ["myRecentSessions"],
    queryFn: api.getMyRecentSessions,
  });
};

export const useSessionById = (id) => {
  const api = sessionApi();

  return useQuery({
    queryKey: ["session", id],
    queryFn: () => api.getSessionById(id),
    enabled: !!id,
    refetchInterval: 5000,
  });
};

export const useJoinSession = () => {
  const api = sessionApi();

  return useMutation({
    mutationKey: ["joinSession"],
    mutationFn: api.joinSession,
    onSuccess: () => toast.success("Joined session successfully!"),
    onError: (error) =>
      toast.error(
        error?.response?.data?.message || "Failed to join session"
      ),
  });
};

export const useEndSession = () => {
  const api = sessionApi();

  return useMutation({
    mutationKey: ["endSession"],
    mutationFn: api.endSession,
    onSuccess: () => toast.success("Session ended successfully!"),
    onError: (error) =>
      toast.error(
        error?.response?.data?.message || "Failed to end session"
      ),
  });
};
