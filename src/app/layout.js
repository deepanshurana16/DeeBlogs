import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "./context/ThemeContext";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Analytics } from "@vercel/analytics/react"
import { Providers } from "./providers/chakraProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harsh's Blog",
  description: "Blog-site created by Harsh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}><Providers><ThemeContextProvider>
  <ThemeProvider>{children}
  <Analytics /></ThemeProvider>
      </ThemeContextProvider></Providers></body>
      
    </html>
  );
}
