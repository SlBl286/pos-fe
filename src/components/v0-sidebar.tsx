import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  ChartBar,
  Home,
  ListIcon,
  ReceiptText,
  Settings,
  TypeIcon,
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
import { useLogout } from "@/features/auth/api/use-logout";
import { useCurrent } from "@/features/auth/api/use-current";
import { useSidebar } from "@/hooks/use-sidebar";
import logo from "@/assets/logo.svg";
import { useSidebarItem } from "@/hooks/use-sidebar-item";
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const tabs = [
  {
    link: "/dashboard",
    icon: Home,
    name: "Trang Chủ",
  },
  {
    link: "/bills",
    icon: ReceiptText,
    name: "Hoá đơn",
  },
  {
    link: "/items",
    icon: ListIcon,
    name: "Mặt hàng",
  },
  {
    link: "/itemCategory",
    icon: TypeIcon,
    name: "Danh mục",
  },
  {
    link: "/warehouses",
    icon: Warehouse,
    name: "Kho hàng",
  },
  {
    link: "/reports",
    icon: ChartBar,
    name: "Báo cáo",
  },
  {
    link: "/settings",
    icon: Settings,
    name: "Cài đặt",
  },
];

export function Sidebar({ className, ...props }: SidebarProps) {
  const { data: user } = useCurrent();
  const { isOpen } = useSidebar();
  const { current: currentTab } = useSidebarItem();
  const { mutate, isPending } = useLogout();
  return (
    <div
      className={cn(
        "flex h-screen flex-col items-center border-r bg-background py-4 transition-all duration-300",
        isOpen ? "w-44" : "w-[72px]",
        className
      )}
      {...props}
    >
      <div className="flex mb-3 gap-x-1 border-primary">
        <div>
          <img src={logo} width={35} height={35} />
        </div>
        {isOpen && (
          <div className="flex self-center font-bold text-xl ml-2">CHTL</div>
        )}
      </div>
      {tabs.map((tab) => (
        <SidebarItem
          key={tab.link}
          link={tab.link}
          Icon={tab.icon}
          name={tab.name}
          expanded={isOpen}
          isActive={tab.link === currentTab}
        />
      ))}

      <div
        className={cn(
          isOpen && " w-full px-5",
          "mt-auto flex items-center content-center space-x-1"
        )}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-10 w-full">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {isOpen && <span className="font-medium">{user?.username}</span>}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Thông tin cá nhân</DropdownMenuItem>
            <DropdownMenuItem>Bảo mật</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                mutate();
              }}
              disabled={isPending}
            >
              Đăng xuất
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
