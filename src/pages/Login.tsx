import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

function Login() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Card className="w-[400px]">
        <CardHeader className="flex justify-center items-center">
          <CardTitle>Đăng Nhập</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Tài khoản</Label>
                <Input id="name" placeholder="Tên tài khoản" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Mật khẩu</Label>
                <Input id="password" placeholder="*****" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="w-full" variant={"default"}>
              Đăng nhập
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
