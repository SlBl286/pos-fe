import { create } from "zustand";

type SidebarStoreItem = {
  current: string;
  change: (value: string) => void;
};

export const useSidebarItem = create<SidebarStoreItem>((set) => ({
  current: "/dashboard",
  change: (value) => {
    set(() => ({ current: value }));
  },
}));
