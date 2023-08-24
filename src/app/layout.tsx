import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ausbakelia",
  description: "Home page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Notification />
        <Navbar />
        <div className="mt-40 md:mt-32">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
