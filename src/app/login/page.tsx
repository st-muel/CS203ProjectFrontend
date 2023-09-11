'use client'

import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import { animated, useSpring } from '@react-spring/web'

export default function Login() {
    const springs = useSpring({
        from: { transform: 'translateX(0%)' },
        to: { transform: 'translateX(-100%)' },
    })

	return (
		<main className="flex min-h-screen items-center bg-neutral-900">
            <animated.div
                className='absolute z-10 w-7/12 h-screen bg-neutral-900'
                style={{...springs}}
            />
			<div className='relative w-7/12 h-screen'>
                <Image
                    src="https://static.ticketmaster.sg/images/activity/23_vibes2023_7838b3ee8f09a88967c31166a4c6c907.png"
                    alt="Concert Image"
                    objectFit="cover"
                    fill
                />
            </div>
            <div className='flex flex-col items-center w-5/12'>
                <div className='flex flex-col gap-6'>
                    <div>
                        <div className='font-bold text-white'>Email</div>
                        <input 
                            type='text' 
                            className='rounded-md w-80 py-2 px-4 text-black bg-white focus:outline-none focus:ring-2 focus:ring-purple-600'
                        />
                    </div>
                    <div>
                        <div className='font-bold text-white'>Password</div>
                        <input 
                            type='password'
                            className='rounded-md w-80 py-2 px-4 text-black bg-white focus:outline-none focus:ring-2 focus:ring-purple-600'
                        />
                    </div>
                    <div className='flex justify-between'>
                        <a
                            href='#'
                            className='text-neutral-400 hover:border-b'
                        >
                            New? Register here
                        </a>
                        <div className='flex items-center gap-2 text-purple-500 cursor-pointer hover:border-b'>
                            Login
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>
		</main>
	)
}
