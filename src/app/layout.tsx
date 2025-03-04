import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { inter } from "./fonts";
import { poppins } from "./fonts";
import Particles from "@/components/Particles/Particles";
import { Toaster } from "sonner";







export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Header />
        <main>
          {children}
        </main>
        {/* <Footer /> */}
        <Toaster position="top-center" />
        <Particles id={"tsparticles"} />
      </body>

      {/* <Corner /> */}
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
