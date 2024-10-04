import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

// Adding Styles 
import '@/app/_styles/globals.css'

// Adding fonts
import {Josefin_Sans} from 'next/font/google'
import { ReservationProvider } from "./_components/ReservationContext";
const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap'
})

// Adding meta 
export const metadata = {
  title: 'The Wild Osis',
  description: 'Cabins Hotal'
} 

export default function RootLayout({ children }){
  return (
    <html>
      <body className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}>
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full ">
            <ReservationProvider>
              {children}
            </ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  )
}