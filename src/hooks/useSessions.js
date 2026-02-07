import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSessionApi } from "../api/sessions";

export const useCreateSession = () => {
  const api = useSessionApi(); // ✅ CALL IT

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
  const api = useSessionApi();

  return useQuery({
    queryKey: ["activeSessions"],
    queryFn: api.getActiveSessions,
  });
};

export const useMyRecentSessions = () => {
  const api = useSessionApi();

  return useQuery({
    queryKey: ["myRecentSessions"],
    queryFn: api.getMyRecentSessions,
  });
};

export const useSessionById = (id) => {
  const api = useSessionApi();

  return useQuery({
    queryKey: ["session", id],
    queryFn: () => api.getSessionById(id),
    enabled: !!id,
    refetchInterval: 5000,
  });
};

export const useJoinSession = () => {
  const api = useSessionApi();

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
  const api = useSessionApi();

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
