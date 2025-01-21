import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { inter } from "./fonts";
import { poppins } from "./fonts";





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
        <Footer />
      </body>
      {/* <Corner /> */}
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
