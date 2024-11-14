import { ChevronLeft, ChevronRight } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { useSidebar } from "@/hooks/use-sidebar";
import { Separator } from "./ui/separator";
import { HeaderSearch } from "./header-search";

export function Header() {
  const { isOpen, toggle } = useSidebar();

  return (
    <div className=" flex flex-col">
      <div className="flex justify-between p-3 ">
        <div className="flex w-full">

        <Button
          variant="outline"
          size="icon"
          onClick={toggle}
          aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
          {isOpen ? (
            <ChevronLeft className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
        </Button>
          <HeaderSearch/>
          </div>
        <div className="flex gap-4 ">
          <ModeToggle />
        </div>
      </div>
      <div className="px-4">
        <Separator />
      </div>
    </div>
  );
}
