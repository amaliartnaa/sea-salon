'use client'

import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {
  useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true
		})
	}, [])

  return (
    <section id='about' className="bg-[#DBB5B5] py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:pr-10 mb-6 md:mb-0 relative" data-aos='fade-right'>
            <h2 className="text-4xl font-bold text-stone-700 mb-4">Our Story</h2>
            <p className="text-lg text-stone-700 leading-relaxed">
              Founded in 2005 by Sisca, SEA Salon began as a small family-owned business
              with a passion for beauty and elegance. Starting with just a few clients in our
              neighborhood, we quickly gained a reputation for our meticulous haircuts, luxurious
              manicures, and rejuvenating facial treatments.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed mt-4">
              Over the years, we have expanded our services and clientele, becoming a beloved
              establishment in Surabaya. Our commitment to quality, innovation, and customer
              satisfaction remains unwavering as we continue to redefine beauty standards and
              provide exceptional salon experiences.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-10 flex justify-center" data-aos='fade-left'>
            <Image
                src="/images/about/salon.jpg"
                alt="salon"
                width={500}
                height={600}
                className="object-cover rounded-xl"
              />
          </div>
        </div>
      </div>
    </section>
  );
};
