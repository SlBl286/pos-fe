import axiosClient from "@/api/base";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/hooks/use-sidebar";

export default function DashboardPage() {
  const close = useSidebar((state) => state.close);
  const open = useSidebar((state) => state.open);
  const toggle = useSidebar((state) => state.toggle);
  const api = axiosClient();

  return (
    <div className="flex gap-x-2">
      <Button variant={"default"} size="lg" onClick={() => open()}>
        open
      </Button>
      <Button variant={"destructive"} size="lg" onClick={() => close()}>
        close
      </Button>
      <Button variant={"destructive"} size="lg" onClick={() => toggle()}>
        toggle
      </Button>
    </div>
  );
}
