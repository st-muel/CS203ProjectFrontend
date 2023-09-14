'use client'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { useSearchParams } from 'next/navigation'
import {AnimationLeft, AnimationRight, headerAnimation} from '../components/animations'
import { motion } from "framer-motion";
import React from "react"
import TicketCard from '../components/TicketCard'
import { TicketCarousel } from '../components/SingersCarousel'


export default function Ticket() {
	const router =  useSearchParams();
	return (
		<main>
			<Navbar />
			{/* <TicketCarousel/>*/}  {/*TODO fix carousel*/} 
			<motion.div
                    className={
                        'z-10 flex flex-col gap-4 md:mt-12 text-white'
                    }
                    initial="hide"
                    whileInView="show"
                    exit="show"
                    variants={headerAnimation}>
					<h1 className="z-10 text-4xl font-bold mb-4 text-white">Concert {router.get("id")}</h1>
			</motion.div>
			<div className="grid grid-cols-2 items-center mt-56">
			<motion.div
					className="w-full lg:w-full px-4 mb-8 lg:mb-12"
					initial="hide"
					whileInView="show"
					exit="hide"
					viewport={{ once: true }}
					variants={AnimationLeft}>
					<Image
						src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b"
						alt="Cat and dog"
						objectFit="cover"
						sizes="100vw"
						height={500}
						width={500}
						className='rounded-lg' 
						/>
			</motion.div>
			<motion.div
					className="w-full lg:w-full px-4 mb-8 lg:mb-12"
					initial="hide"
					whileInView="show"
					exit="hide"
					viewport={{ once: true }}
					variants={AnimationRight}
					>
				<TicketCard
					title = "Description"
					description = "Join us for a night of electrifying music, stunning visuals, and top-tier artists at our concert! With a mesmerizing atmosphere and unforgettable performances, it's an experience you won't want to miss. Whether you're a dedicated fan or just out for a memorable night, get ready to dance and cheer for more!" 
				/>
			</motion.div>
			</div>

			<div className="grid grid-cols-2 justify-items-center items-center">
			<motion.div
					className="w-full lg:w-full px-4 mb-8 lg:mb-12"
					initial="hide"
					whileInView="show"
					exit="hide"
					viewport={{ once: true }}
					variants={AnimationRight}
					>
				<TicketCard
					title = "Time and location"
					date = "19 August 2025"
					time = "9.00pm to 12.00pm"
					location = "Esplanade theatre" 
				/>
			</motion.div>
			<motion.div
					className="w-full lg:w-full px-4 mb-8 lg:mb-12"
					initial="hide"
					whileInView="show"
					exit="hide"
					viewport={{ once: true }}
					variants={AnimationLeft}>
					<Image
						src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b"
						alt="Cat and dog"
						objectFit="cover"
						sizes="100vw"
						height={500}
						width={500}
						className='rounded-lg' 
						/>
			</motion.div>
			</div>

			<div className="grid grid-cols-2 items-center">
			<motion.div
					className="w-full lg:w-full px-4 mb-8 lg:mb-12"
					initial="hide"
					whileInView="show"
					exit="hide"
					viewport={{ once: true }}
					variants={AnimationLeft}>
					<Image
						src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b"
						alt="Cat and dog"
						objectFit="cover"
						sizes="100vw"
						height={500}
						width={500}
						className='rounded-lg' 
						/>
			</motion.div>
			<motion.div
					className="w-full lg:w-full px-4 mb-8 lg:mb-12"
					initial="hide"
					whileInView="show"
					exit="hide"
					viewport={{ once: true }}
					variants={AnimationRight}
					>
				<TicketCard
					title = "Terms and conditions"
					description = "By accessing and using our ticket-selling website, you agree to abide by the following terms and conditions. Our platform is designed for ticket purchases, and while we strive for accuracy, we cannot guarantee event information's completeness or accuracy. All transactions are subject to availability, and we reserve the right to cancel or refund any order. Ticket pricing and availability may change without notice. Personal information provided during the purchase process is governed by our Privacy Policy. We are not responsible for any damages or losses resulting from website use. These terms may be updated periodically, and continued use constitutes acceptance of any changes. Please review them regularly, and if you disagree with any part, refrain from using our services." 
				/>
			</motion.div>
			</div>
		</main>
	)
}


