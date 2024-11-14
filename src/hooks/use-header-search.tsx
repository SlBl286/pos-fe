import { create } from "zustand";

type HeaderSearchStore = {
  keyword: string | null;
  setKeyWord: (value: string) => void;
};

export const useHeaderSearch = create<HeaderSearchStore>((set) => ({
    keyword: null,
    setKeyWord: (value:string) =>{
        set(() => ({ keyword: value }));
    }
}));
