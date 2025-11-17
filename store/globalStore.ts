import { create } from 'zustand';

export const useGlobalStore = create((set) => ({
  isGlobalLoading: false,
  globalError: null,

  startLoading: () => set({ isGlobalLoading: true }),
  stopLoading: () => set({ isGlobalLoading: false }),

  setGlobalError: (msg: string | null) => set({ globalError: msg }),
}));
