import { create } from "zustand";

const useAuthStore = create((set) => ({
  isLoggedIn: false,
  user: null,
  login: (email, password) => {
    // Static user
    if (email === "admin@test.com" && password === "1234") {
      set({
        isLoggedIn: true,
        user: { email, role: "admin" },
      });
      return "admin";
    }

    if (email === "user@test.com" && password === "1234") {
      set({
        isLoggedIn: true,
        user: { email, role: "user" },
      });
      return "user";
    }

    return null;
  },
  logout: () => set({ isLoggedIn: false, user: null }),
}));

export default useAuthStore;
