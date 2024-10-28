import { ModeToggle } from "./mode-toggle";

function Header() {
  return (
    <div className="flex justify-between p-3 ">
      <div>
        Header
      </div>
      <div className="flex gap-4 ">
      <ModeToggle/>
      </div>
    </div>
  );
}

export default Header;
