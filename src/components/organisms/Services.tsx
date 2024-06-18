import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';

const Services = () => {
  const services = [
    {
      title: 'Haircuts and Styling',
      description: 'Transform your look with our expert haircuts and styling services.',
      imageUrl: '/images/haircuts.jpg',
    },
    {
      title: 'Manicure and Pedicure',
      description: 'Pamper yourself with our luxurious manicure and pedicure treatments.',
      imageUrl: '/images/manicure.jpg',
    },
    {
      title: 'Facial Treatments',
      description: 'Revitalize your skin with our rejuvenating facial treatments.',
      imageUrl: '/images/facial.jpg',
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
        <Carousel className="w-full mx-auto">
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index}>
                <div className="p-4">
                  <Card className="flex flex-row p-5 h-[320px] justify-center items-center">
                    <div className="w-[600px]">
                      <Image src={service.imageUrl} alt={service.title} width={500} height={300} className="object-cover rounded-lg" />
                    </div>
                    <CardContent className="p-4 w-3/4 space-y-28">
                      <div className="space-y-4">
                        <h3 className="text-4xl font-semibold text-gray-800">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                      <Button className='bg-rose-800 hover:bg-rose-950'>See More</Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext/>
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
