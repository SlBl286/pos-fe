import { ModeToggle } from "@/components/mode-toggle";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="fixed top-4 right-4">
        <ModeToggle />
      </div>
      <Outlet/>
    </div>
  );
};

export default AuthLayout;
