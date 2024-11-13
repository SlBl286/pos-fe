import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createItemCategorySchema } from "../schemas";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCreateItemCategory } from "../api/use-create-item-category";
import { Textarea } from "@/components/ui/textarea";

const CreateItemCategoryModal = () => {
  const { mutate, isPending } = useCreateItemCategory();
  const form = useForm<z.infer<typeof createItemCategorySchema>>({
    resolver: zodResolver(createItemCategorySchema),
    defaultValues: {
      code: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof createItemCategorySchema>) => {
    mutate(values, {
      onSuccess: ({}) => {
        form.reset();
      },
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">+Thêm danh mục</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thêm mới danh mục</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Separator />
        </div>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-y-4">
                <FormField
                  control={form.control}
                  name="code"
                  disabled={isPending}
                  render={({ field }) => (
                    <div>
                      <FormLabel>Mã loại</FormLabel>
                      <FormItem>
                        <Input {...field} />
                      </FormItem>
                      <FormMessage />
                    </div>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  disabled={isPending}
                  render={({ field }) => (
                    <div>
                      <FormLabel>Tên loại</FormLabel>
                      <FormItem>
                        <Input {...field} />
                      </FormItem>
                      <FormMessage />
                    </div>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  disabled={isPending}
                  render={({ field }) => (
                    <div>
                      <FormLabel>Mô tả</FormLabel>
                      <FormItem>
                        <Textarea {...field} />
                      </FormItem>
                      <FormMessage />
                    </div>
                  )}
                />
              </div>
              <div className="py-4">
                <Separator />
              </div>
              <div className="flex items-center justify-between">
                <Button
                  type="button"
                  size={"lg"}
                  variant={"secondary"}
                  disabled={isPending}
                >
                  Huỷ bỏ
                </Button>
                <Button
                  type="submit"
                  size={"lg"}
                  variant={"default"}
                  disabled={isPending}
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  Thêm mới
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateItemCategoryModal;
