import { Menu, Search } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useMobileSidebar } from "@/hooks/use-sidebar";

export function Header() {
  const {toggle} = useMobileSidebar();
  return (
    <div className="flex justify-between p-3 ">
      <div className="flex w-full">
        <Button className="flex items-center justify-center p-2 mr-2 md:hidden " variant={"outline"} onClick={toggle}>
          <Menu className="h-20 w-20"/>
        </Button>
        <div className=" w-1/4 min-w-56">
          <div className="relative">
            <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-8" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 ">
        <ModeToggle />
      </div>
    </div>
  );
}
