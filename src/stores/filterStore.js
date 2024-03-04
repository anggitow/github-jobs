import { create } from "zustand";

export const useFilterStore = create((set) => ({
  filters: {
    jobDescription: "",
    location: "",
    isFullTime: false,
  },
  setFilters: (filters) => set({ filters }),
}));
