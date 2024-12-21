'use client'

import styled from "styled-components"
import BgHero from "../../../app/public/leave.png"
// import { usePathname } from "next/navigation"

const HeroVariants = styled.section`
    background-image: url(${BgHero.src});
    height: 540px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-postion: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (max-width: 768px) {
    width: 100%;
    height: 450px;  /* Mobilde daha küçük yükseklik */
    background-size: cover;
  }

    /* Ekstra küçük cihazlar için (örn. 480px altı) */
    @media (max-width: 480px) {
    height: 300px;  /* Daha küçük ekranlar için daha da küçük bir yükseklik */
    background-size: cover;
  }
`

export default function Hero({ title, descprtion }: any) {
    // const location = usePathname()

    return (
        <>
        <HeroVariants>
            <div className="container text-white">
                <h1 className="text-[50px]">
                    {title}
                </h1>
                <p className="text-[16px]">
                    {descprtion}
                </p>
            </div>
        </HeroVariants>
        </>
    )
}
