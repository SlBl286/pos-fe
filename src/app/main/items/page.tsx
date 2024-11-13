import { useGetItems } from "@/features/items/api/use-get-items";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { DataTable } from "@/features/items/components/data-table";
import { columns } from "@/features/items/components/columns";

function ItemPage() {
  const { data: items } = useGetItems({ keyword: "" });
  return (
    <div>
      <div>Danh mục hàng hoá</div>
      <div className="flex flex-row gap-x-1">
        <Input className="w-4/12" />
        <Button variant={"outline"}>+ Thêm danh mục</Button>
        <Button variant={"outline"}>
          <MoreVertical />
        </Button>
      </div>
      <div className="mt-4  px-2">
        <DataTable columns={columns} data={items ?? []} />
      </div>
    </div>
  );
}

export default ItemPage;
