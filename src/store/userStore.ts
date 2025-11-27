import { create } from "zustand";

interface UserState {
  id: string;
  username: string;
  setId: (id: string) => void;
  setUsername: (username: string) => void;
  clear: () => void;
}

export const useUserStore = create<UserState>(set => ({
  id: "",
  username: "",
  setId: (id: string) => set({ id }),
  setUsername: (username: string) => set({ username }),
  clear: () => set({ id: "", username: "" }),
}));
