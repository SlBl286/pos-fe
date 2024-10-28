import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"

function Sidebar() {
    const {}
  return (
    <div className="flex flex-col justify-between h-full">
        <div>Logo</div>
        <div>Main</div>
        <div className="">
            <ModeToggle/>
            <Button onClick={logout}>logout</Button>

        </div>
    </div>
  )
}

export default Sidebar