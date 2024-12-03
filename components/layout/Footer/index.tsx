import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="bg-cyprus text-white pt-[170px]">
                <div className="container">
                    <div className="py-5">
                        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-20">
                            <div className="footer-section-first mb-[41px]">
                                <div className="footer-header text-[24px] font-bold leading-[32.74px] mb-10">
                                    <h3>Subscribe To Newsletter</h3>
                                </div>
                                <div className="footer-content text-[18px] font-normal leading-[30px] mb-11">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentes queet non erat. Maecenas nibh dolor.</p>
                                </div>
                                <div className="footer-form relative mb-[30px]">
                                    <form className="flex items-center">
                                        <input className="relative text-[14px] font-normal bg-transparent border-b-2 outline-none w-full placeholder-white px-1 pb-1 leading-[25px]" placeholder="Email..." type="text" required />
                                        <button className="absolute right-0 bottom-0 text-[24px] font-bold leading-[32.74px] px-1 pb-1" type="submit">Subscribe</button>
                                    </form>
                                </div>
                                <div className="footer-social flex items-center gap-[30px]">
                                    <a href="" target="_blank" className="relative inline-flex items-center justify-center border w-9 h-9 rounded-full ">
                                        <p className="sr-only">
                                            Facebook
                                        </p>
                                        <svg width="25" height="25" fill="currentColor" viewBox="0 0 30 30">
                                            <path d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z"></path>
                                        </svg>
                                    {/* <p className="absolute top-0 opacity-0 hover:opacity-100">Facebook</p> */}
                                    </a>
                                    <a className="inline-flex items-center justify-center border rounded-full w-9 h-9">
                                        <p className="sr-only">
                                            Linkedin
                                        </p>
                                        <svg width="25" height="25" fill="currentColor" viewBox="0 0 30 30">
                                            <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
                                        </svg>
                                    </a>
                                    <a className="inline-flex items-center justify-center border rounded-full w-9 h-9">
                                        <p className="sr-only">
                                            Google+
                                        </p>
                                        <svg width="25" height="25" fill="currentColor" viewBox="0 0 50 50">
                                            <path d="M 17.1875 10.9375 C 9.421875 10.9375 3.125 17.234375 3.125 25 C 3.125 32.765625 9.421875 39.0625 17.1875 39.0625 C 24.953125 39.0625 31.25 32.765625 31.25 25 C 31.25 24.035156 31.144531 23.09375 30.960938 22.1875 L 30.882813 21.875 L 17.1875 21.875 L 17.1875 26.5625 L 26.5625 26.5625 C 25.816406 30.996094 21.832031 34.375 17.1875 34.375 C 12.007813 34.375 7.8125 30.179688 7.8125 25 C 7.8125 19.820313 12.007813 15.625 17.1875 15.625 C 19.53125 15.625 21.667969 16.492188 23.3125 17.914063 L 26.671875 14.625 C 24.171875 12.335938 20.84375 10.9375 17.1875 10.9375 Z M 39.0625 17.1875 L 39.0625 21.875 L 34.375 21.875 L 34.375 25 L 39.0625 25 L 39.0625 29.6875 L 42.1875 29.6875 L 42.1875 25 L 46.875 25 L 46.875 21.875 L 42.1875 21.875 L 42.1875 17.1875 Z"></path>
                                        </svg>
                                    </a>
                                    <a href="https://x.com/" target="_blank" className="inline-flex justify-center items-center border rounded-full w-9 h-9">
                                        <p className="sr-only">
                                            TwitterX
                                        </p>
                                        <svg width="25" height="25" fill="currentColor" viewBox="0 0 30 30">
                                            <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 lg:col-span-2 lg:gap-24">
                                <div className="contacts-footer mb-[41px] text-white">
                                    <h3 className="text-[24px] font-bold leading-[32.74px] mb-10">Contacts</h3>
                                    <div className="text-[18px] font-normal leading-[30px] space-y-5">
                                        <p>
                                            27 Division St, New York, NY 10002, USA
                                        </p>
                                        <p className=" inline-flex flex-col">
                                            <a href="tel:+01 1123456789">+01 1123456789</a>
                                            <a href="tel:+01 1123456789">+01 1123456789</a>
                                        </p>
                                        <p>
                                            <a href="mailto:Solarpenal@gmail.com">Solarpenal@gmail.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="useful-links mb-[41px]">
                                    <h3 className="text-[24px] font-bold leading-[32.74px] mb-10">Useful Links</h3>
                                    <div className="text-[18px] font-normal leading-[30px] grid grid-cols-2 gap-x-3">
                                        <ul className="space-y-5">
                                            <li>≻ Home</li>
                                            <li>≻ About Us</li>
                                            <li>≻ Services</li>
                                            <li>≻ Project</li>
                                        </ul>
                                        <ul className="space-y-5">
                                            <li>≻ Blog</li>
                                            <li>≻ FAQ</li>
                                            <li>≻ Contact Us</li>
                                            <li>≻ Thank You</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="popular-services mb-[41px]">
                                    <h3 className="text-[24px] font-bold leading-[32.74px] mb-10">Popular Services</h3>
                                    <div className="text-[18px] font-normal leading-[30px]">
                                        <ul className="space-y-5">
                                            <li>Tree Planting</li>
                                            <li>Grass Cutting</li>
                                            <li>Pests, Weeds Control</li>
                                            <li>Project</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="copyright-footer py-[31px]">
                    <div className="container lg:px-[150px]">
                        <div className="copyright-footer-content lg:flex items-center justify-between">
                            <p>© Copyright Industrio 2021-22. All right reserved.</p>
                            <ul className="flex justify-between gap-x-[30px] mt-5 lg:mt-0">
                                <Link href={"/privacypolicy"}>
                                    <li>Privacy Policy</li>
                                </Link>
                                <Link href={"/sitemap"}>
                                    <li>Site Map</li>
                                </Link>
                                <Link href={'/termsofuse'}>
                                    <li>Terms of Use</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
