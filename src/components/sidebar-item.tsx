import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  Icon: React.ElementType;
  name: string;
  expanded: boolean;
  link: string;
}

export function SidebarItem({ Icon, name, expanded, link }: SidebarItemProps) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(link);
  };
  return (
    <div
      className={cn(
        expanded && " w-full px-5",
        "flex items-center content-center space-x-1 mt-4"
      )}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" className="h-10 w-full" onClick={onClick}>
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
