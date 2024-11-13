import { create } from "zustand";

type DataTable = {
  keyword: string | null;
  pageSize: number;
  page: number;
};

export const useDataTable = create<DataTable>((set) => ({
  keyword: null,
  pageSize: 2,
  page: 0,
  // set(() => ({ isOpen: true }));
}));
