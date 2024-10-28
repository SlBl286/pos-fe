import { Button } from "@/components/ui/button";


function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen gap-4">
      <div className="text-6xl font-semibold">
        Page Not Found
      </div>
      <Button variant={"secondary"} size="lg" >Go back to home</Button>
    </div>
  );
}

export default NotFoundPage;
