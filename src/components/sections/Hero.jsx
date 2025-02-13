import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-blue-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">Your Trusted Partner in RERA Legal Services</h2>
        <p className="text-xl mb-8 max-w-2xl">
          Expert legal services in full compliance with the Real Estate (Regulation and Development) Act, 2016 (RERA).
        </p>
        <a href="#contact" className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 inline-flex items-center">
          Contact Us <ArrowRight className="ml-2" size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;