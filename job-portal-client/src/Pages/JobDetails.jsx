import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import PageHeader from '../components/PageHeader';

const JobDetails = () => {
    const {id} = useParams();
    const [job, setJob] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/all-jobs/${id}`).then(res => res.json()).then(data => setJob(data))
    }, [])
 

    const handleEmail = async() => {
      const { value: text } = await Swal.fire({
        input: "textarea",
        inputLabel: "Message",
        inputPlaceholder: "Type your message here...",
        inputAttributes: {
          "aria-label": "Type your message here"
        },
        showCancelButton: true
      });
      if (text) {
        Swal.fire(text);
      }
    }



    const handleApply = async() => {
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
    <div className='mx-auto xl:px-24 px-4'>
        <div>
        <PageHeader title={"Single Job Page"} path={"single job"}/>
        <h2 className='text-strong px-4 py-5'>JobDetails: {id}</h2>
        <h1 className='text-strong text-lg px-4 py-4'>Job Title: {job.jobTitle}</h1>
        <h1 className='text-strong text-lg px-4 py-4'>Job Description: {job.description}</h1>
        <h1 className='text-strong text-lg px-4 py-4'>Write Email to: {job.postedBy}</h1>
        <button className='bg-blue px-8 py-2 mb-4 block text-white' onClick={handleEmail}>Write Cover Letter</button>
        <button className='bg-blue px-8 py-2 mb-4 block text-white' onClick={handleApply}> Apply Here Now</button>
        </div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center'>
            <div className='text-2xl text-primary'>Benefits
               <ol className='text-lg mt-3' type="1">
                        <li>1. ${job.minPrice}-{job.maxPrice}k</li>
                        <li>2. Disability insurance</li>
                        <li>3. Employee discount</li>
                        <li>4. Flexible spending account</li>
                        <li>5. Health insurance</li>
                        <li>6. paid time off</li>
                        <li>7. Vision insurance</li>
                        <li>8. Volunteer time off</li>
                        <li>9. Dental insurance</li>

               </ol>
            </div>
            <div className='text-2xl text-primary'>Outline
                 <p className='text-lg mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem beatae sunt numquam nobis. 
                    Fugit pariatur, illo doloremqu
                     obcaecati rerum, doloribus fugiat perspiciatis, ipsam accusantium 
                     provident minus distinctio. Quam, ullam incidunt!
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem beatae sunt numquam nobis. 
                    Fugit pariatur, illo doloremqu
                     obcaecati rerum, doloribus fugiat perspiciatis, ipsam accusantium 
                     provident minus distinctio. Quam, ullam incidunt!
                     </p>
            </div>
            <div className='text-2xl'>Future Growth
                <p className='text-lg mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem beatae sunt numquam nobis. 
                    Fugit pariatur, illo doloremqu
                     obcaecati rerum, doloribus fugiat perspiciatis, ipsam accusantium 
                     provident minus distinctio. Quam, ullam incidunt!
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem beatae sunt numquam nobis. 
                    Fugit pariatur, illo doloremqu
                     obcaecati rerum, doloribus fugiat perspiciatis, ipsam accusantium 
                     provident minus distinctio. Quam, ullam incidunt!
                     </p>
            </div>
            
        </div>
    </div>

   
    
  )
}

export default JobDetails