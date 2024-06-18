import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

interface TestimonialItemProps {
  name: string;
  imageUrl: string;
  rating: number;
  text: string;
}

const TestimonialItem = ({ name, imageUrl, rating, text }: TestimonialItemProps) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} className="h-5 w-5 text-yellow-500" />);
    }
    return stars;
  };

  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative pb-2/3">
        <Image
          className="absolute h-full w-full object-cover rounded-t-lg"
          src={imageUrl}
          alt={`Photo of ${name}`}
          width={500}
          height={500}
        />
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {renderStars()}
          </div>
          <p className="ml-2 text-gray-600">Rated {rating} stars</p>
        </div>
        <p className="text-gray-800">{text}</p>
        <p className="text-gray-600 mt-2">- {name}</p>
      </div>
    </div>
  );
};

export default TestimonialItem;
