'use client'

import React, { useEffect } from 'react'
import TestimonialItem from '../atoms/TestimonialItem';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Testimonials() {
  useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true
		})
	}, [])

  const testimonials = [
    {
      name: 'John Doe',
      imageUrl: '/images/testimonials/john-doe.jpeg',
      rating: 5,
      text: 'SEA Salon provides the best haircut I have ever had. The staff is friendly and professional. Highly recommended!',
    },
    {
      name: 'Jane Smith',
      imageUrl: '/images/testimonials/jane-smith.jpg',
      rating: 4,
      text: 'I love the manicure and pedicure services at SEA Salon. The environment is clean and relaxing. Will definitely come back.',
    },
    {
      name: 'Mike Johnson',
      imageUrl: '/images/testimonials/mike-johnson.jpg',
      rating: 3,
      text: 'The facial treatments are good, but the waiting time can be a bit long. Overall, a satisfactory experience.',
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos='fade-up'>
          {testimonials.map((testimonial, index) => (
            <TestimonialItem
              key={index}
              name={testimonial.name}
              imageUrl={testimonial.imageUrl}
              rating={testimonial.rating}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
