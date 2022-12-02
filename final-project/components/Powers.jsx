import React from 'react'
import Image from 'next/image'

const Powers = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Super Powers</p>
                <h2>This stays between us ;)</h2>
                <dl>
                    <dt className='font-bold'>Will of Fire</dt>
                    <dd>I am capable of great feats not because I am extraordinary in my inherent abilities, but because when I have my eyes set on a target I dedicate myself to it fully.</dd>
                    <dt className='font-bold'>Sharingan</dt>
                    <dd>There is an ability in the anime series Naruto, where the user can learn an ability by observing it once. My fast reading speed and vast stores of knowledge 
                        grant me a very similar ability in our world.
                    </dd>
                    <dt className='font-bold'>Plot-Armour</dt>
                    <dd>Like any good hero I have a healthy dose of plot armour that means I can defeat any challenge with "the power of friendship". You laugh now, but I am serious
                        I have the ability to lift the spirit of those around me to reach a common goal. The hero charisma comes in handy too.
                    </dd>
                    <dt className='font-bold'>Camouflage</dt>
                    <dd>I blend in very well as a regular civilian with valuable corporate skills such as Software Development and Business Analysis. But you've read my CV, so you already
                        know all of that.
                    </dd>
                </dl>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src="/../public/assets/superPower.jpg" alt="/" width='400' height='38' />
            </div>
        </div>
    </div>
  )
}

export default Powers