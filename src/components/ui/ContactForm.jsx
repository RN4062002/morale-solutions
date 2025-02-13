import React from 'react';

const ContactForm = () => {
  return (
    <form className="space-y-6">
      <div>
        <label className="block mb-2 font-medium">Name</label>
        <input type="text" className="w-full p-3 border rounded-lg" />
      </div>
      <div>
        <label className="block mb-2 font-medium">Email</label>
        <input type="email" className="w-full p-3 border rounded-lg" />
      </div>
      <div>
        <label className="block mb-2 font-medium">Message</label>
        <textarea className="w-full p-3 border rounded-lg h-32"></textarea>
      </div>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 w-full">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;