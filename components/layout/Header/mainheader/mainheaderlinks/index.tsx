import Link from "next/link";

export default function MainHeaderLinks() {
    return (
        <>
            <div className="pages-router">
                <nav className="flex flex-col lg:flex-row flex-wrap items-center space-x-0 space-y-7 lg:space-x-11 lg:space-y-0 text-[23px] lg:text-[16px] font-bold leading-5 text-white lg:text-black">
                    <Link href={"#"}>Home</Link>
                    <Link href={"#"}>Compnay</Link>
                    <Link href={"#"}>Services</Link>
                    <Link href={"#"}>Project</Link>
                    <Link href={"#"}>Blog</Link>
                    <Link href={"#"}>Contact</Link>
                    <a><button className="bg-green-700 rounded-md px-[35px] py-[10px] text-[18px] text-white font-bold leading-6 ml-0 lg:ml-[101px] hover:bg-green-900 hover:transition hover:duration-200 duration-200 hover:ease-in-out ease-in-out">Call Us</button></a>
                </nav>
            </div>
        </>
    )
}
