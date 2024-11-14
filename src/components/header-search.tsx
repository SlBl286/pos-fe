import { useHeaderSearch } from "@/hooks/use-header-search";
import { SearchIcon } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";

const HeaderSearch = () => {
    const {keyword,setKeyWord} = useHeaderSearch();
    const debounced = useDebouncedCallback(
        // function
        (value) => {
          setKeyWord(value);
        },
        // delay in ms
        500
      );
    const onSearch = (key: string) => {

        debounced(key)
      };
    return (  <div className="w-4/12 flex flex-row gap-x-2 items-center justify-center border rounded-md py-1 px-4">
        <SearchIcon className="text-primary/75" />
        <input
          className="bg-transparent border-none focus:outline-none h-full w-full text-primary/75"
          placeholder="Tìm kiếm...."
          onChange={(e) => onSearch(e.target.value)}
          defaultValue={keyword ?? ""}
        />
      </div> );
}
 
export { HeaderSearch};