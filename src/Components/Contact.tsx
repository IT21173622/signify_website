'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('Thank you for your feedback!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section
      id="contactus"
      className="bg-[#1f104a] min-h-screen py-16 px-6 flex justify-center items-center"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-6 rounded-md shadow-lg"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#1f104a]">
          Your Feedback is Important to Us
        </h2>

        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1 text-[#1f104a]">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#536dfe] border border-gray-300 text-black"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1 text-[#1f104a]">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#536dfe] border border-gray-300 text-black"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block font-semibold mb-1 text-[#1f104a]">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#536dfe] border border-gray-300 text-black"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block font-semibold mb-1 text-[#1f104a]">
            Message
          </label>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#536dfe] border border-gray-300 resize-none text-black"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#536dfe] text-white font-medium py-2 rounded hover:bg-[#5e35b1] transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
