import { Outlet } from "react-router-dom";
import { cn } from "./lib/utils";
import { Header } from "./components/header";
import { QuickBill } from "./components/quick-bill";
import { ScrollArea } from "./components/ui/scroll-area";
import { useMobileSidebar } from "./hooks/use-sidebar";
import { Sidebar } from "./components/v0-sidebar";

export default function App() {
  const {isOpen} = useMobileSidebar();
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
      <div className="flex-none w-96 h-screen">
        <QuickBill />
      </div>
    </div>
  );
}
