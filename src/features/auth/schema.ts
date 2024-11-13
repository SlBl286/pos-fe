
import z from "zod";

export const loginSchema = z.object({
    username: z.string().trim().min(1,"Username is required"),
    password: z.string().min(6, "Minimum 6 character"),
});
