import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Personality = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Personality</p>
                <h2>Intellectual Glutton</h2>
                <p>
                    The earliest trait my family can recall about me was how much joy I got out of learning new things. That is 
                    the reason why my illiterate parents invested everything they could into my education. That hunger has remained 
                    with me, and it is a corner stone for my personality. I am and always was interested in a wide array of topics, and 
                    I learned early on to absorb information rapidly. This skill was mostly unfocused, until I built the next pillar of
                    my personality.
                </p>
                <p>
                    When I was 15 a friend of mine showed me how to make HTML files on my tablet and run them on my browser, and that 
                    was love at first sight. I had finally found somewhere to channel my ravenous hunger for knowledge. For some reason 
                    programming was the one task I was motivated enough to actually want to master. Every afternoon for about 3 years
                    straight was spent in my school's computer lab making games. This culminated in me being top of my IT class and studying
                    Computer Science at university.
                </p>
                <p>
                    The third pillar of my personality is the most recent, and the most valuable. I was always a lonely child who couldn't connect
                    with other people. One day my best friend invited me to the debate club at break, and that's where I learned how to interact with 
                    an audience and a team. When you meet up with me in the near future you will find it unbelieavable that I used to be a shy 16 year 
                    old with few friends. I have learned to ineract with others empathetically, and the drive and ability to connect have become a corner
                    stone in my life.
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src="/../public/assets/about.jpeg" alt="/" width='400' height='38' />
            </div>
        </div>
    </div>
  )
}

export default Personality