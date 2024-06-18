import React from 'react'
import TestimonialItem from '../atoms/TestimonialItem';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      imageUrl: '/images/john-doe.jpeg',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec quam at nulla maximus finibus.',
    },
    {
      name: 'Jane Smith',
      imageUrl: '/images/jane-smith.jpg',
      rating: 4,
      text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
      name: 'Mike Johnson',
      imageUrl: '/images/mike-johnson.jpg',
      rating: 3,
      text: 'Nullam quis massa in sem aliquet porttitor. Duis eu sapien fringilla, lobortis elit eu, aliquam nulla.',
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
