import React from 'react'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>New language, same old learning attitude :D I hope you like it</p>
                <h1 className='py-4 text-gray-700'>
                    This page was made with love by me,<span className='text-[#5651e5]'> Chico Vicente</span>,to 
                </h1>
                <h1 className=' text-gray-700'>
                    tell you a little more about myself beyond my Resume. 
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I want to give you a little peak into my personality, beacause I can tell that
                    a value fit is as important to you as it is to me. I also want to take this
                    opportunity to let you in on the secret of my super-powers. And lastly, the juice...
                    why I want to be a part of the SovTech Team.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main