import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gabriel | Portfolio",
  description: "Gabriel | DevOps Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-10 md:pt-36
        dark:bg-gray-950 dark:text-gray-50 dark:bg-opacity-90 dark:bg-blend-multiply`}
      >
        <div
          className="bg-[#fbe2e3] 
          absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] 
          w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"
        ></div>
        <div
          className="bg-[#dbd7fb] 
          absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] 
          w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]
          md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
          dark:bg-[#676394]"
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
          <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
