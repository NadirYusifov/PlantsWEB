'use client'

import { useState } from "react";
import Link from "next/link";
import MainHeaderLinks from "../mainheaderlinks";
import { TbMenuDeep } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";

export default function MainHeaderDesktop() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="main-header py-[15px] bg-white">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <div className="logo-image">
                            <Link href={"/"}>
                                <h3>Logo</h3>
                            </Link>
                        </div>
                        <div className="hidden lg:block">
                            <MainHeaderLinks />
                        </div>
                        <div className="block lg:hidden">
                            <button className="appearance-none block lg:hidden text-[30px]" onClick={() => setOpen(!open)}>{!open ? <TbMenuDeep /> :
                                <div className="absolute z-50 top-5 right-4 text-white" style={{ transition: "ease-in-out" }}>
                                    <IoMdClose />
                                </div>
                            }
                            </button>
                            {open &&
                                <div className="block lg:hidden bg-opacity-50 bg-black w-full h-screen absolute right-0 top-0 z-40">
                                    <nav className={`w-1/2 h-screen absolute right-0 bg-emerald-900 py-20 transform transition-transform ${open ? "opacity-100" : "opacity-0"}`} style={{ transition: "transform 0.3s ease-in-out opacity 0.3s ease" }}>
                                        <MainHeaderLinks />
                                    </nav>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
