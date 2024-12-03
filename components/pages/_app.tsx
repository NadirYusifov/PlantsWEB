import Header from "../layout/Header"
import Footer from "../layout/Footer"
import type { AppProps } from "next/app"
// import Layout from "@/app/(public)/layout"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
        <Component {...pageProps} />
      <Footer/>
    </>
  )
}
