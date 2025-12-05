import "./globals.css"
import Header from "./components/Header"

export const metadata = {
  title: "Lillypad",
  description: "Landing page",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body style={{margin:0}}>
        <Header />
        {children}
      </body>
    </html>
  )
}
