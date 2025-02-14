// import React from 'react';

// const ContactForm = () => {
//   return (
//     <form className="space-y-6">
//       <div>
//         <label className="block mb-2 font-medium">Name</label>
//         <input type="text" className="w-full p-3 border rounded-lg" />
//       </div>
//       <div>
//         <label className="block mb-2 font-medium">Email</label>
//         <input type="email" className="w-full p-3 border rounded-lg" />
//       </div>
//       <div>
//         <label className="block mb-2 font-medium">Message</label>
//         <textarea className="w-full p-3 border rounded-lg h-32"></textarea>
//       </div>
//       <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 w-full">
//         Send Message
//       </button>
//     </form>
//   );
// };// Suggested code may be subject to a license. Learn more: ~LicenseLog:3086148065.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1382741768.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3079696548.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3939708446.
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    }
  };
  
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block mb-2 font-medium">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
      </div>
      <div>
        <label className="block mb-2 font-medium">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
      </div>
      <div>
        <label className="block mb-2 font-medium">Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-3 border rounded-lg h-32" required></textarea>
      </div>
      <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 w-full">
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;