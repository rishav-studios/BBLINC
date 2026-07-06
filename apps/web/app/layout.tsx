import localFont from "next/font/local";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import LenisProvider from "@/components/providers/LenisProvider";
import "@bbl/ui/globals.css";
import { cn } from "@bbl/ui/lib/utils";

const Archivo = localFont({
  src: './fonts/Archivo.ttf',
  display: 'swap',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", Archivo.className)}
    >
      <body className=" antialiased ">
        <LenisProvider>

          <Navbar />
          <main >{children}</main>
          <Footer />

        </LenisProvider>

      </body>
    </html>
  )
}
