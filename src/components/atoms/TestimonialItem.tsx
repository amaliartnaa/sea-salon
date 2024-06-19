import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

interface TestimonialItemProps {
  name: string
  imageUrl: string
  rating: number
  text: string
}

const TestimonialItem = ({ name, imageUrl, rating, text }: TestimonialItemProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Image src={imageUrl} alt={name} width={50} height={50} className="rounded-full mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <FaStar 
                key={index}
                color={index < rating ? 'gold' : 'gray'}
                className='w-5 h-5'
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default TestimonialItem;
