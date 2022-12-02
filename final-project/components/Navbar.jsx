import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Image src="/../public/assets/navLogo.png" alt="/" width='95' height='38' />
            <div> 
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-bottom'>Home</li>
                    </Link>
                    <Link href='/#Personality'>
                        <li className='ml-10 text-sm uppercase hover:border-bottom'>Personality</li>
                    </Link>
                    <Link href='/#Powers'>
                        <li className='ml-10 text-sm uppercase hover:border-bottom'>Powers</li>
                    </Link>
                    <Link href='/#Why'>
                        <li className='ml-10 text-sm uppercase hover:border-bottom'>Why SovTech</li>
                    </Link>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Navbar