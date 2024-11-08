"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "react-router-dom";
import { loginSchema } from "@/features/auth/schema";
import { uselogin } from "@/api/auth/use-login";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
function LoginPage() {
  const [searchParams] = useSearchParams();
  const { mutate, isPending } = uselogin();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    mutate(
      { json : values},
    );
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="fixed top-4 right-4">
        <ModeToggle />
      </div>
      <Card className="w-[400px]">
        <CardHeader className="flex justify-center items-center">
          <CardTitle className="text-2xl font-semibold">Đăng Nhập</CardTitle>
        </CardHeader>
        <CardContent>
        <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-4">
              <FormField
                control={form.control}
                name="username"
                disabled={isPending}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter username" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                disabled={isPending}
                render={({ field }) => (
                  <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter password" type={"password"} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                )}
              />
            </div>
            <div className="flex items-center justify-between">
              <Button
                type="submit"
                size={"lg"}
                variant={"primary"}
                disabled={isPending}
              >
                Login
              </Button>
            </div>
          </form>
        </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginPage;
