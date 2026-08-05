import type { Metadata } from "next";
import "./globals.css";
import { PreferencesProvider } from "@/components/Preferences";

export const metadata: Metadata = {
  title: "Vishal General Store | विशाल जनरल स्टोर",
  description: "Your trusted store for everyday needs — Since 2008, wholesale and retail.",
};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="hi" suppressHydrationWarning><body><PreferencesProvider>{children}</PreferencesProvider></body></html>;
}
