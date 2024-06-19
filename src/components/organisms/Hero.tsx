'use client'

import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Hero() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true
		})
	}, [])

	return (
		<section id='home' className="relative flex flex-row justify-between items-center min-h-screen bg-cover bg-center p-8 lg:p-20" style={{ backgroundImage: "url('/images/hero/bg-hero.jpg')" }}>
			<div className="relative w-1/2 -z-1" data-aos="fade-right">
				<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-slate-200 w-full relative" data-aos="fade-right">
					Beauty and Elegance
					Redefined
				</h1>
				<p className="text-white text-lg mt-4" data-aos="fade-right" data-aos-delay="200">
					Experience the best salon services in town.
					Your beauty, our passion.
				</p>
				<Button className="mt-8 px-6 py-3 text-black bg-[#F1E5D1] hover:bg-stone-400 font-semibold rounded-lg shadow-lg transition" data-aos="fade-up" data-aos-delay="400">
					Book Now
				</Button>
			</div>
		</section>
	)
}
