import Header from "../layout/Header"
import Footer from "../layout/Footer"
import type { AppProps } from "next/app"
import Layout from "@/app/(public)/layout"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
