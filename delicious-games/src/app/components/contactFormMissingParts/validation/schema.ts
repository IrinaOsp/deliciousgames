import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(2, { message: "Username is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email." }),
  shippingAddress: z
    .string()
    .min(1, { message: "Shipping address is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  reasonOfSalesReturn: z
    .string()
    .min(1, { message: "Reason of sales return is required" }),
  boardgameName: z.string().min(1, { message: "Boardgame name is required" }),
  detailInfo: z.string().min(1, { message: "Detail info is required" }),
  image: z
    .any()
    .refine((file) => file instanceof File || file === undefined, {
      message: "Image should be a file",
    })
    .refine((file) => !file || file.size <= 10 * 1024 * 1024, {
      message: "Image size should be less than 10MB",
    })
    .refine(
      (file) =>
        !file ||
        file.name.endsWith(".png") ||
        file.name.endsWith(".jpg") ||
        file.name.endsWith(".jpeg") ||
        file.name.endsWith(".gif"),
      {
        message: "Image should be an image file (png, jpg, jpeg, gif)",
      }
    ),
  privacyPolicy: z.boolean().refine((value) => value, {
    message: "You must accept the privacy policy",
  }),
});
