import Footer from "@/components/footer/page";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/navbar/page";

const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'container mx-auto'}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
