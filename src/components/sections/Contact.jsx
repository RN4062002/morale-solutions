import React from 'react';
import ContactInfo from '../ui/ContactInfo';
import ContactForm from '../ui/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;