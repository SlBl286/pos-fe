import { Button } from "@/components/ui/button";
import { useGetItemCategories } from "@/features/item-category/api/use-get-item-categories";
import { columns } from "@/features/item-category/components/columns";
import CreateItemCategoryModal from "@/features/item-category/components/create-item-catetory-modal";
import { DataTable } from "@/features/item-category/components/data-table";
import { useDataTable } from "@/features/item-category/hooks/use-data-table";
import { MoreVertical, SearchIcon } from "lucide-react";

const ItemCategoryPage = () => {
  const {keyword ,page,pageSize} = useDataTable();
  const { data } = useGetItemCategories({ keyword,page,pageSize });
  return (
    <div>
      <div className="mb-4 font-semibold text-2xl px-2">Danh mục hàng hoá</div>
      <div className="flex flex-row justify-between px-2">
        <div className="w-4/12 flex flex-row gap-x-2 items-center justify-center border rounded-md py-1 px-4" >
          <SearchIcon className="text-primary/75" />
          <input className="bg-transparent border-none focus:outline-none h-full w-full text-primary/75" placeholder="Tìm kiếm...." />
        </div>
        <div className="flex flex-row gap-x-2 ">
          <CreateItemCategoryModal />
          <Button variant={"outline"} size={"icon"}>
            <MoreVertical />
          </Button>
        </div>
      </div>
      <div className="mt-4 px-2">
        <DataTable columns={columns} data={data?.items ?? []} rowCount={data?.total ?? 0}/>
      </div>
    </div>
  );
};

export default ItemCategoryPage;
