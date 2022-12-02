import React from 'react'
import Image from 'next/image'

const Why = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Why SovTech?</p>
                <h2>Short Answer: I'm feeling your vibe</h2>
                <dl>
                    <dt className='font-bold'>Value and Culture Fit</dt>
                    <dd>The only way you get a good team is by building one deliberately. The recruitment process that you follow is enough evidence for me that the team on the other
                        side must be of high quality. I embody all of your Spex and I believe that they are a recipe for us to do great things together. I would like to be a part of that.
                    </dd>
                    <dt className='font-bold'>A good Graduate Programme</dt>
                    <dd>A good technical skill base, soft skill nurturing, a great team cultture, and am emphasis on mentorship. This is the perfect bedrock for any young career, and I 
                        can tell that a lot of thought went into setting the programme up in this way.
                    </dd>
                    <dt className='font-bold'>Jealousy</dt>
                    <dd>I realized that I cannot do anything either than programming because I get an overwhelming feeling of jealousy when someone else is coding and I am not. With every 
                        step of this application process I realized that this is a great opportunity. So great that I would actually feel something about the rejection, which is not the 
                        case for many applications. Alongside reflecting on where I can improve, I would be so jealous of whoever else gets this opportunity if I don't.
                    </dd>
                </dl>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src="/../public/assets/sovtech.png" alt="/" width='400' height='38' />
            </div>
        </div>
    </div>
  )
}

export default Why