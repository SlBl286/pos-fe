
import z from "zod";

export const loginSchema = z.object({
    username: z.string().trim().min(1,"Username is required"),
    password: z.string().min(8, "Minimum 8 character"),
});
