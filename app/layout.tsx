import './css/style.css';
import { Poppins } from 'next/font/google';
import Header from '@/components/header';
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({ weight: "500", subsets: ["latin"]});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${poppins.className} antialised md:subpixel-antialiased bg-white text-blue relative`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[30rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <div className="bg-[#fbe2e3] absolute bottom-[6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute bottom-[1rem] -z-10 left-[-35rem] h-[31.25rem] w-[30rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right"/>
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}
