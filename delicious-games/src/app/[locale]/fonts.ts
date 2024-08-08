import { Titillium_Web, Red_Hat_Display } from "next/font/google";

export const titillium = Titillium_Web({
  variable: "--font-titillium",
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const redHat = Red_Hat_Display({
  variable: "--font-redHat",
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});
