import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Quicksand } from 'next/font/google'
import "./globals.css"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";



const quickSand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={quickSand.className}>
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
