import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ title }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <a href="#contact" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
        Learn more <ArrowRight className="ml-2" size={16} />
      </a>
    </div>
  );
};

export default ServiceCard;