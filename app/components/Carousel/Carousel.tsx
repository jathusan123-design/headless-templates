'use client';
import { Carousel } from 'flowbite-react';

export const CarouselClient = () => {
  const testimonials = [
    {
      text: '"This apartment management system has completely transformed how we operate. Our efficiency has increased by 40% and our tenants are much happier with the streamlined processes."',
      author: 'Sarah Mitchell',
      role: 'Property Manager, Sunrise Apartments',
    },
    {
      text: '"The employee management features have made scheduling and payroll so much easier. We can track everything in one place and our HR team loves the automated reporting."',
      author: 'Michael Chen',
      role: 'Operations Director, Metro Housing Group',
    },
    {
      text: '"Managing maintenance requests and invoicing used to be a nightmare. Now everything is automated and transparent. Our response time has improved dramatically."',
      author: 'Jennifer Rodriguez',
      role: 'Facilities Manager, Lakeside Residences',
    },
    {
      text: '"The sales management module helped us close 30% more deals last quarter. Having all our listings, leads, and client information in one system is invaluable."',
      author: 'David Thompson',
      role: 'Sales Director, Premier Properties',
    },
  ];

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-20 sm:mt-40">
      <Carousel>
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="flex flex-col gap-14 h-full items-center justify-center bg-blue-site text-white p-8"
          >
            <h3 className="text-lg sm:text-4xl max-w-xs sm:max-w-3xl font-site">
              {testimonial.text}
            </h3>
            <p>
              {testimonial.author}, {testimonial.role}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
