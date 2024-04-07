import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import StoreProvider from "./StoreProvider"
import Sidebar from "@/components/sidebar"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "Made Resto",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StoreProvider>
          <Sidebar/>
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
