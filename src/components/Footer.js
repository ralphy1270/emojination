import React from 'react'

export default function Footer() {
  return (
    <div id="footer">
        <div className='flex flex-row items-center justify-between bg-gray-950 text-white py-4'>
            <div className='text-left pl-7 font-poppins font-normal text-base w-1/2'>@2024 Cignal TV &middot; All rights reserved.</div>
            <div className='flex flex-row w-1/2 items-center justify-around'>
                <div className='flex-1 cursor-pointer'>
                    Data Privacy
                </div>
                <div className='flex-1 cursor-pointer'>
                    Term of use
                </div>
                <div className='flex-1 cursor-pointer'>
                    Privacy policy
                </div>
            </div>
        </div>
    </div>
  )
}
