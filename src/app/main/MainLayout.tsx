import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useQuickBill } from "@/hooks/use-quick-bill";
import { useSidebarItem } from "@/hooks/use-sidebar-item";
import { Sidebar } from "@/components/v0-sidebar";
import { Header } from "@/components/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { QuickBill } from "@/components/quick-bill";

export default function MainLayout() {
  const { isOpen } = useQuickBill();
  const { change } = useSidebarItem();
  useEffect(() => {
    change(window.location.pathname);
  }, []);
  return (
    <div className="flex w-screen">
      <div className={""}>
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
        <ScrollArea className="">
          <div className={cn("p-2")}>
            <Outlet />
          </div>
        </ScrollArea>
      </div>
      <div
        className={cn(isOpen ? "flex" : "hidden", "flex-none w-96 h-screen")}
      >
        <QuickBill />
      </div>
    </div>
  );
}
