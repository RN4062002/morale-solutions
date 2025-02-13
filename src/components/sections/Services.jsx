import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import { services } from '../../data/services';

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;