import { useGetItems } from "@/features/items/api/use-get-items";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { useGetItemCategories } from "@/features/item-category/api/use-get-item-categories";
import { Badge } from "@/components/ui/badge";

function ItemPage() {
  const { data: categories } = useGetItemCategories();
  const { data: items } = useGetItems({ keyword: "" });
  return (
    <div>
      <div className="flex gap-x-2">
        {categories?.items.map((c) => (
          <Badge key={c.id} className="hover:cursor-pointer h-8">{c.name}</Badge>
        ))}
      </div>
    </div>
  );
}

export default ItemPage;
