import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Provider from "@/components/providers";
// import Provider from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AJ Cloth Shop",
  description: "AJ web solution limited",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {" "}
          <div className="min-h-screen flex flex-col">
            <Header />
            {children}
            <div className="p-12 bg-black text-white font-bold text-center">
              this is fotter section later i will impliment
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
