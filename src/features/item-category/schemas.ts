import { z } from "zod";

export const createItemCategorySchema = z.object({
    code : z.string().min(1,"Chưa nhập mã loại"),
    name : z.string().min(1,"Chưa nhập tên loại"),
    description : z.string().optional()
})

export const updateItemCategorySchema = z.object({
    code : z.string(),
    name : z.string(),
    description : z.string().optional()
})