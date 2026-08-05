import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vishal General Store | विशाल जनरल स्टोर",
  description: "रोज़ की ज़रूरतों का भरोसेमंद स्टोर — Since 2008, wholesale and retail.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
