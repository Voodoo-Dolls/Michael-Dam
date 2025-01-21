import { Inter, Poppins } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight:["400",'700'],
  variable: "--font-inter"
})
 
export const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight:["400"],
    variable: "--font-poppins"
})