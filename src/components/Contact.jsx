import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className=' w-full h-full    bg-[#0a192f] flex justify-center items-center p-4 '>

      <form method='POST' action="https://getform.io/f/f2a6d596-d119-4868-955f-e8cbcd19a096" className='flex flex-col max-w-[600px] h-full mt-20 w-full '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4  text-gray-300  border-pink-600'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or shoot me an email- shrirambarai46@gmail.com</p>
        </div>

        <input className=' my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Mobile' name='mobile' />

        <textarea className=' p-2 bg-[#ccd6f6]' name="message" cols="30" rows="10" placeholder='Message'></textarea>

        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center '>Lets Connect</button>

      </form>

    </div>
  )
}

export default Contact
