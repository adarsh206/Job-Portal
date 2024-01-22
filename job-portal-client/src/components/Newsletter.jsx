import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"
const Newsletter = () => {
  return (
    <div>
        <div>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
            <FaEnvelopeOpenText />
            Email me for jobs</h3>
            <p className='text-primary/75 text-base mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque provident fugit, ad ex sed rem
                 architecto culpa veritatis ab laboriosam
                 officiis cumque adipisci! Dicta veritatis illo labore esse et temporibus.</p>
                 <div className='w-full space-y-4'>
                    <input type='email' name='email' id='email' placeholder='name@mail.com' className='w-full block py-2 pl-3 border
                    focus:outline-none'></input>
                    <input type='submit' value={"Subscribe"} className='w-full block py-2 pl-3 border
                    focus:outline-none bg-blue rounded text-white cursor-pointer font-semibold'></input>
                 </div>
                
        </div>

        {/* 2nd part */}
        <div className='mt-20'>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
            <FaRocket />
            Get noticed here</h3>
            <p className='text-primary/75 text-base mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque provident fugit, ad ex sed rem
                 architecto culpa veritatis ab laboriosam
                 officiis cumque adipisci! Dicta veritatis illo labore esse et temporibus.</p>
                 <div className='w-full space-y-4'>
                    <input type='email' name='email' id='email' placeholder='name@mail.com' className='w-full block py-2 pl-3 border
                    focus:outline-none'></input>
                    <input type='submit' value={"Upload your resume "} className='w-full block py-2 pl-3 border
                    focus:outline-none bg-blue rounded text-white cursor-pointer font-semibold'></input>
                 </div>
                
        </div>
    </div>
  )
}

export default Newsletter