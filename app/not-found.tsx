import Link from "next/link";

export default function NotFound () {
  return (
    <>
      <section className="not-found-section">
        <div className="container">
          <div className="not-found-wrapper flex flex-col justify-center items-center">
            <div className="not-found-404">
              <h3 className="text-[186px] leading-[247px] font-bold bg-gradient-to-b to-green-700 to-100% from-slate-200 from-0% text-transparent bg-clip-text">404</h3>
            </div>
            <div className="not-found-text">
              <h2 className="text-[78px] font-semibold leading-[106.39px]">Oops! That page can’t be found</h2>
              <p className="text-[18px] font-normal leading-[30px] text-center">Sorry, but the page you are looking for does not existing</p>
            </div>
            {/* Search will add */}
            <div className="not-found-button">
              <Link href={"/"}>
              <button className="bg-green-900 text-white text-[18px] leading-6 font-bold px-8 py-3 rounded-md">Go To Home Page</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
