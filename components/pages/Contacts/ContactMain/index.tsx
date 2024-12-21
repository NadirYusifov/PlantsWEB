// import Hero from "@/components/variants/Hero";
import Input from "@/components/variants/Input";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaPinterestP, FaTwitter } from "react-icons/fa";

export default function ContactMain() {
    return (
        <>
            {/* <Hero/> */}
            <section className="my-10">
                <div className="container">
                    <div className="block lg:flex justify-between gap-0 lg:gap-10">
                        <div className="w-full lg:w-[930px]">
                            <div className="text-[45px] font-bold leading-[61.38px]">
                                <h3>Contact Us</h3>
                            </div>
                            <Input placeholder="Name"/>
                        </div>
                        <div className="w-full lg:w-[450px] bg-[#FFF8F1] px-6 py-10 rounded-md">
                            <div className="mb-[50px]">
                                <div className="text-[33px] font-bold leading-[45px]">
                                    <h4>Get in Touch</h4>
                                </div>
                                <div className="text-[18px] text-gray-500 leading-[30px] mt-[30px]">
                                    <p>Lorem Ipsum is simply dummy text of the
                                        printingand typesetting industry. Lorem Ipsum
                                        has been the industry.</p>
                                </div>
                            </div>
                            <div className="space-y-[30px]">
                                <div className="bg-white hover:bg-green-800 hover:text-white transition-all py-5 px-3 rounded-md font-bold leading-[20px]">
                                    <a href="tel:+01 123456789, 1234567890">+01 123456789, 1234567890</a>
                                </div>
                                <div className="bg-white hover:bg-green-800 hover:text-white transition-all py-5 px-3 rounded-md font-bold leading-[24px]">
                                    <a href="mailTo:Plantingservice@gmail.com">Plantingservice@gmail.com</a>
                                </div>
                                <div className="bg-white hover:bg-green-800 hover:text-white transition-all py-5 px-3 rounded-md font-bold leading-[24px]">
                                    <a href="https://www.google.com/maps/">2072 Pinnickinick Street, WA 98370</a>
                                </div>
                                <div className="flex gap-3 justify-center items-center">
                                    <span className="p-3 rounded-full bg-[#34508B] text-white text-[22px]">
                                        <a href="https://facebook.com/">
                                            <FaFacebookF />
                                        </a>
                                    </span>
                                    <span className="p-3 rounded-full bg-sky-400 text-white text-[22px]">
                                        <a href="https://twitter.com/">
                                            <FaTwitter />
                                        </a>
                                    </span>
                                    <span className="p-3 rounded-full bg-sky-600 text-white text-[22px]">
                                        <a href="#">
                                            <FaGooglePlusG />
                                        </a>
                                    </span>
                                    <span className="p-3 rounded-full bg-red-600 text-white text-[22px]">
                                        <a href="https://www.pinterest.com/">
                                            <FaPinterestP />
                                        </a>
                                    </span>
                                    <span className="p-3 rounded-full bg-sky-700 text-white text-[22px]">
                                        <a href="https://www.linkedin.com/">
                                            <FaLinkedinIn />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
