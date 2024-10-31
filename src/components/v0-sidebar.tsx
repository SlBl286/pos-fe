import { cn } from "@/lib/utils";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import {
  ChartBar,
  ChevronLeft,
  ChevronRight,
  Home,
  ListIcon,
  ReceiptText,
  Settings,
  Warehouse,
} from "lucide-react";
import React from "react";
import { SidebarItem } from "./sidebar-item";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth } from "@/hooks/use-auth";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className, ...props }: SidebarProps) {
  const user = {
    name: "Test",
  };
  const [expanded, setExpanded] = React.useState(false);
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };
  const {logout} = useAuth();
  return (
    <div
      className={cn(
        "flex h-screen flex-col items-center border-r bg-background py-4 transition-all duration-300",
        expanded ? "w-44" : "w-[72px]",
        className
      )}
      {...props}
    >
      <div className="flex w-full justify-between px-4 mb-4">
        {expanded && (
          <div className="flex self-center font-bold text-xl ml-2">CHTL</div>
        )}
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
      <SidebarItem
        link="/warehouses"
        Icon={Warehouse}
        name="Kho"
        expanded={expanded}
      />
      <SidebarItem
        link="/reports"
        Icon={ChartBar}
        name="Thống kê"
        expanded={expanded}
      />
      <SidebarItem
        link="/settings"
        Icon={Settings}
        name="Cài đặt"
        expanded={expanded}
      />

      <div
        className={cn(
          expanded && " w-full px-5",
          "mt-auto flex items-center content-center space-x-1"
        )}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-10 w-full">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {expanded && <span className="font-medium">{user.name}</span>}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Thông tin cá nhân</DropdownMenuItem>
            <DropdownMenuItem>Bảo mật</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>{logout()}}>Đăng xuất</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
