import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useSidebarItem } from "@/hooks/use-sidebar-item";

interface SidebarItemProps {
  Icon: React.ElementType;
  name: string;
  expanded: boolean;
  link: string;
  isActive?: boolean;
}

export function SidebarItem({
  Icon,
  name,
  expanded,
  link,
  isActive = true,
}: SidebarItemProps) {
  const { change } = useSidebarItem();
  const navigate = useNavigate();
  const onClick = () => {
    navigate(link);
    change(link);
  };
  return (
    <div
      className={cn(
        isActive && "shadow-sm",
        expanded && " w-full px-5",
        "flex flex-row items-start justify-start  content-start space-x-1 mt-4"
      )}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                isActive &&
                  "bg-blue-500 hover:bg-blue-500 text-primary-foreground hover:text-primary-foreground",
                "h-10 w-full flex justify-start"
              )}
              onClick={onClick}
            >
              <Icon className="h-11 w-11" />
              {expanded && (
                <span className="text-base font-medium">{name}</span>
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
