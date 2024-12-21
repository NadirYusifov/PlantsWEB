'use client'

import { useState } from "react";
import Link from "next/link";
import MainHeaderLinks from "../mainheaderlinks";
import { TbMenuDeep } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import WebLogo from "/app/public/WebLogo.png"
import Image from "next/image";

export default function MainHeaderDesktop() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="main-header py-[15px] bg-white">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <div className="logo-image">
                            <Link href={"/"}>
                                <Image src={WebLogo} alt="web logo" width={100} height={100} quality={100} />
                            </Link>
                        </div>
                        <div className="hidden lg:block">
                            <MainHeaderLinks />
                        </div>
                        <div className="block lg:hidden">
                            <button className="appearance-none block lg:hidden text-[30px]" onClick={() => setOpen(!open)}>{!open ? <TbMenuDeep /> :
                                <div className={`absolute z-50 top-5 right-4 text-white ${!open ? "fadeOut" : "fadeIn"}`}>
                                    <IoMdClose />
                                </div>
                            }
                            </button>
                            {open &&
                                <div className={`block lg:hidden bg-opacity-50 bg-black w-full h-screen fixed right-0 top-0 z-40 ${!open ? "opacityOut" : "opacityIn"}`}>
                                    <nav className={`w-1/2 h-screen fixed right-0 bg-emerald-900 py-20 ${!open ? "fadeOut" : "fadeIn"}`}>
                                        <MainHeaderLinks />
                                    </nav>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    0% {
                        opacity: 0;
                        transform: translate(100px);
                        transtion-delay: 20s, 250ms;
                        overflow: hidden;
                    }

                    100% {
                        opacity: 1;
                        transform: translate(0px);
                        overflow: hidden;
                       
                    }
                }

                @keyframes fadeOut {
                    0% {
                        opacity: 1;
                        transform: translate(0);
                        }
                    
                    100% {
                        opacity: 0;
                        transform: translate(100px);
                        transtion-delay: 20s, 250ms;
                    }
                }


                @keyframes opacityIn {
                    0% {
                        opacity: 0;
                        transform: translate(100px);
                        overflow: hidden;
                    }

                    100% {
                        opacity: 1;
                        transform: translate(0px);
                        overflow: hidden;
                    }
                }

                @keyframes opacityOut {
                    0% {
                        opacity: 1;
                        transform: translate(0);
                    }

                    100% {
                        opacity: 0;
                        transform: translate(100px);
                    }
                }
                       
                .opacityIn {
                    animation: fadeIn 0.5s ease-out;
                }
                    
                .opacityOut {
                    animation: fadeOut 0.5s ease-in;
                }

                .fadeIn {
                    animation: fadeIn 0.8s ease-in-out;
                }

                .fadeOut {
                    animation: fadeOut 0.8s ease-in-out;

                }
            `}</style>
        </>
    )
}
