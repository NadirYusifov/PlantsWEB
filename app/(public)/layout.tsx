import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Patner from "@/components/layout/Patner";

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Patner />
      <Footer />
    </>
  )
}
