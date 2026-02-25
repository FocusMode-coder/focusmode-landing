import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LucianoAI Systems",
  description: "Premium digital solutions — Web, AI, Automation, Real Estate",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children as unknown as React.ReactElement;
}
