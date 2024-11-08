import { useGetItems } from "@/api/items/use-get-items";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";


function ItemPage() {
  const {data: items} = useGetItems({keyword: ""});
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle> </CardTitle>
        </CardHeader>
        <CardContent>
            {items?.map((item)=> (
<div key={item.id}>
  {item.name}
</div>
            ))}
        </CardContent>
       
      </Card>
    </div>
  );
}

export default ItemPage;
