import { Outlet } from "react-router-dom";
import { cn } from "./lib/utils";
import Sidebar from "./components/sidebar";
import Header from "./components/header";

export default function App() {
  return (
    <div className="flex w-screen">
      <div className="flex-none w-52 h-screen">
       <Sidebar/>
      </div>
      <div className="flex-1 h-screen grow ">

        <Header/>
        <div className={cn("w")}>
          <Outlet />
        </div>
      </div>
      <div className="flex-none w-96 h-screen">
       <Sidebar/>
      </div>
    </div>
  );
}
