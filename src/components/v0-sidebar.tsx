import { cn } from "@/lib/utils";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  ListIcon,
  ListOrdered,
  ReceiptText,
  Settings,
} from "lucide-react";
import React from "react";
import { SidebarItem } from "./sidebar-item";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className, ...props }: SidebarProps) {
  const [expanded, setExpanded] = React.useState(false);
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={cn(
        "flex h-screen flex-col items-center border-r bg-background py-4 transition-all duration-300",
        expanded ? "w-44" : "w-[72px]",
        className
      )}
      {...props}
    >
      <div
        className=
          "flex w-full justify-end px-4 mb-4"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          {expanded ? (
            <ChevronLeft className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
        </Button>
      </div>

      <SidebarItem
        link="/dashboard"
        Icon={Home}
        name="Trang Chủ"
        expanded={expanded}
      />
      <SidebarItem
        link="/items"
        Icon={ListIcon}
        name="Mặt hàng"
        expanded={expanded}
      />
      <SidebarItem
        link="/bills"
        Icon={ReceiptText}
        name="Hoá đơn"
        expanded={expanded}
      />

      <div className="mt-auto flex items-center content-center space-x-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" className="h-10">
                <Settings className="h-11 w-11" />
                {expanded && <span className="font-medium">Cài đặt</span>}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Cài đặt</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
