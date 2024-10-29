

import { useState } from "react";

export function useMobileSidebar() {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
      };

  return {
    isOpen,
    toggle
  }
}
