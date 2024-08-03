// import { Inter } from "next/font/google";
import "./globals.css";
import RouteHistory from "./utls/routerHistory/RouteHistory";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tooltip Store",
  description:
    "An website for publishing soft-were application or hosting files",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <RouteHistory></RouteHistory>
      {/* <body className={inter.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  );
}
