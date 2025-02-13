import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start space-x-4">
        <MapPin className="text-blue-600 mt-1" size={24} />
        <div>
          <h3 className="font-semibold mb-2">Address</h3>
          <p>TCG panorama A wing 104 ambegaon katraj pune -411046</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <Mail className="text-blue-600 mt-1" size={24} />
        <div>
          <h3 className="font-semibold mb-2">Email</h3>
          <a href="mailto:rushimorale10@gmail.com" className="text-blue-600 hover:text-blue-800">
            rushimorale10@gmail.com
          </a>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <Phone className="text-blue-600 mt-1" size={24} />
        <div>
          <h3 className="font-semibold mb-2">Phone</h3>
          <a href="tel:+919730379079" className="text-blue-600 hover:text-blue-800">
            +91 97303 79079
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
