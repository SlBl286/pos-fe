import { create } from "zustand";

type DataTable = {
  keyword: string | null;
  pageSize: number;
  pageIndex: number;
  setPagination: ({pageIndex, pageSize}: {pageIndex: number,pageSize: number}) => void;
  setKeyword: (key :string | null) => void;
};

export const useDataTable = create<DataTable>((set) => ({
  keyword: null,
  pageSize: 5,
  pageIndex: 0,
  setPagination: ({pageIndex, pageSize}) => {
    set(() => ({ pageSize: pageSize, pageIndex: pageIndex }));
  },
  setKeyword: (key)=> {
    set(() => ({ keyword: key}));
  }
}));
