import { Nunito_Sans } from "next/font/google"
import { Footer } from "../footer/footer"
import { Header } from "../header/header"

type LayoutProps = {
  children?: React.ReactNode
}

const ptSansCaption = Nunito_Sans({
  subsets: ["latin"],
  weight:  ["400", "700", "900"],
  variable: "--font-sans",
})

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`${ptSansCaption.className} relative flex min-h-screen flex-col`}>
      <Header />
      <main className="flex-1 flex flex-col mb-12">{children}</main>
      <Footer />
    </div>
  )
}
