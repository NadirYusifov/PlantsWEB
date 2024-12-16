'use client'

import useBlazeSlider from "@/components/utils/BlazeSlider"
import "blaze-slider/dist/blaze.css"
import PartnerOne from "../../../app/public/CompanyLogo1.png"
import PartnerTwo from "../../../app/public/CompanyLogo2.png"
import PartnerThree from "../../../app/public/CompanyLogo3.png"
import Image from "next/image"
import { useEffect, useState } from "react"

// const image = [
//     { image: PartnerOne },
//     { image: PartnerTwo },
//     { image: PartnerThree },
//     { image: PartnerOne },
//     { image: PartnerTwo },
//     { image: PartnerThree },
//     { image: PartnerOne },
//     { image: PartnerTwo },
//     { image: PartnerThree },
// ]


export default function Patner() {
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const elRef = useBlazeSlider({
        all: {
            enableAutoplay: true,
            transitionDuration: 700,
            slidesToShow: 6,
        },
        "(max-width: 1024px)": {
            slidesToShow: 3,
        },
        "(max-width: 768px)": {
            slidesToShow: 2,
        },
        "(max-width: 425px)": {
            slidesToShow: 1,
        },
    })
    return (
        <>
            <section className="mt-[130px]">
                <div className="container">

                    <div className="blaze-slider" ref={elRef}>
                        <div className="blaze-container">
                            <div className="blaze-track-container">
                                {/* {image.map(img => {
                            return( */}
                                {loading ? <h1>Loading</h1> :

                                    <div className="blaze-track">
                                        <div className="grayscale hover:grayscale-0 hover:transtion-all place-items-center"><Image src={PartnerOne} alt="morris" /></div>
                                        <div className="grayscale hover:grayscale-0 hover:transtion-all place-items-center"><Image src={PartnerTwo} alt="forest ridge" /></div>
                                        <div className="grayscale hover:grayscale-0 hover:transtion-all place-items-center"><Image src={PartnerThree} alt="acme garden center" /></div>
                                        <div className="grayscale hover:grayscale-0 hover:transtion-all place-items-center"><Image src={PartnerOne} alt="morris" /></div>
                                        <div className="grayscale hover:grayscale-0 hover:transtion-all place-items-center"><Image src={PartnerTwo} alt="forest ridge" /></div>
                                        <div className="grayscale hover:grayscale-0 hover:transtion-all place-items-center"><Image src={PartnerThree} alt="acme garden center" /></div>
                                        <div className="grayscale hover:grayscale-0 hover:transtion-all place-items-center"><Image src={PartnerOne} alt="morris" /></div>
                                        <div className="grayscale hover:grayscale-0 hover:transtion-all place-items-center"><Image src={PartnerTwo} alt="forest ridge" /></div>
                                        <div className="grayscale hover:grayscale-0 hover:transtion-all place-items-center"><Image src={PartnerThree} alt="acme garden center" /></div>
                                        <div className="grayscale hover:grayscale-0 hover:transtion-all place-items-center"><Image src={PartnerOne} alt="morris" /></div>
                                        <div className="grayscale hover:grayscale-0 hover:transtion-all place-items-center"><Image src={PartnerTwo} alt="forest ridge" /></div>
                                        <div className="grayscale hover:grayscale-0 hover:transtion-all place-items-center"><Image src={PartnerThree} alt="acme garden center" /></div>
                                    </div>

                                }
                                {/* //     )
                        // })} */}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
