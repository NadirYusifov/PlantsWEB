import React from 'react'

export default function TopHeader() {
  return (
    <>
    <div className='bg-cyprus py-[17px] text-[14px]'>
      <div className='container'>
        <div className='row'>
          <div className='flex justify-between'>
            <div className='right-header-bar flex space-x-4 text-white max-md:hidden'>
              <a href='mailto:Plantingservice@7oroof.com'>✉️ Email: Plantingservice@7oroof.com</a>
              <a href='tel:+01 123456789'>📞 +01 123456789</a>
              <a href='#'>📍 2072 Pinnickinick Street, WA 98370</a>
            </div>
            <div className='language-bar text-white'>
              <button className='cursor-not-allowed opacity-50'>Engilsh ↓</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
