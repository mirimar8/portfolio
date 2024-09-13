import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Miri Markovitz | Web Developer",
  description:
    "Experienced full-stack web developer specializing in responsive website design, front-end development and SEO optimization. Delivering interactive, mobile-friendly websites tailored to your business needs. Contact today for innovative web solutions!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
