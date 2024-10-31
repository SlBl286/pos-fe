import {  Search } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Input } from "./ui/input";
import {  useSidebar } from "@/hooks/use-sidebar";

export function Header() {
  const isOpen = useSidebar((state) => state.isOpen);
  return (
    <div className="flex justify-between p-3 ">
      <div className="flex w-full">
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
