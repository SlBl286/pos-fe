import { create } from "zustand";

type QuickBillStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export const useQuickBill = create<QuickBillStore>((set) => ({
  isOpen: false,
  open: () => {
    set(() => ({ isOpen: true }));
  },
  close: () => {
    set(() => ({ isOpen: false }));
  },
  toggle: () => {
    set((state) => ({ isOpen: !state.isOpen }));
  },
}));
