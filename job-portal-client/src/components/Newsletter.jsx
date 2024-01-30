import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"
import Swal from 'sweetalert2'
const Newsletter = () => {

  const handleResume = async() => {
    const { value: file } = await Swal.fire({
        title: "Select file",
        input: "file",
        inputAttributes: {
          "accept": "image/*",
          "aria-label": "Upload your file"
        }
      });
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          Swal.fire({
            title: "Your uploaded file",
            imageUrl: e.target.result,
            imageAlt: "The uploaded file"
          });
        };
        reader.readAsDataURL(file);
      }
}

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
                    focus:outline-none bg-blue rounded text-white cursor-pointer font-semibold' onClick={() => {
                      alert("Subscribed Successfully!!!")
                    }}></input>
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
                    <input type='email' name='email' id='email' placeholder='Upload resume' className='w-full block py-2 pl-3 border
                    focus:outline-none'></input>
                    <input type='submit' value={"Upload your resume "} className='w-full block py-2 pl-3 border
                    focus:outline-none bg-blue rounded text-white cursor-pointer font-semibold' onClick={handleResume}></input>
                 </div>
                
        </div>
    </div>
  )
}

export default Newsletter