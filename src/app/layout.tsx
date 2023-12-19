import "./globals.css";
import { Montserrat } from "next/font/google";
import Providers from "@components/Providers";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full transition-all scroll-smooth text-slate-900 bg-slate-50 ">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
