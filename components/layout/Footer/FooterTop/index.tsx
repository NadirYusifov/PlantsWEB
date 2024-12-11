import React from 'react'

export default function FooterTop() {
    return (
        <>
            <section className="absolute -translate-y-1/2 w-full">
                <div className="container">
                    <div className="bg-[#D9F1E0] rounded-md px-5 lg:px-10 py-8">
                        <div className="block lg:flex justify-between items-center">
                            <div className='text-[25px] lg:text-[35px] font-bold leading-[61px]'>
                                <h3>We Have <span className="text-green-800">Solutions</span> For Your <span className="text-green-800">Garden.</span></h3>
                            </div>
                            <div>
                            <button className="bg-green-800 text-white font-bold leading-[24px] py-3 px-6 rounded-md text-[18px]">Get A Quate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
