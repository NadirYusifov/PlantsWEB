'use client'

import BlazeSlider, { BlazeConfig } from "blaze-slider"
import { useEffect, useRef } from "react"

export default function useBlazeSlider(config: BlazeConfig) {
    const sliderRef = useRef<BlazeSlider | null>(null)
    const elRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if ( elRef.current && !sliderRef.current) {
            sliderRef.current = new BlazeSlider(elRef.current, config)
        }


    }, [])

    return elRef
}
