import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Form submission logic would go here
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-cream min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Get in Touch</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have questions about our spiritual wellness platform or need help with a booking? Our team is here to assist you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-saffron-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-saffron-50 text-saffron-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email Us</h3>
                    <p className="text-slate-600 mb-1">Our team typically responds within 24-48 hours.</p>
                    <a href="mailto:nandpal3105@gmail.com" className="text-saffron-600 font-medium hover:text-saffron-700">nandpal3105@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-saffron-50 text-saffron-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Call Us</h3>
                    <p className="text-slate-600 mb-1">Available Mon-Sat, 9 AM to 6 PM IST</p>
                    <a href="tel:+919472521003" className="text-saffron-600 font-medium hover:text-saffron-700">+91-9472521003</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-saffron-50 text-saffron-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Registered Office</h3>
                    <p className="text-slate-600">Nandpal Platform Services<br />Rajasthan Paatrika Road<br />Kota , Rajasthan , 324007 <br />India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-saffron-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
            
            {isSubmitted ? (
              <div className="bg-emerald-50 text-emerald-800 p-6 rounded-xl border border-emerald-100 text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">Message Sent!</h3>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" id="name" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 outline-none transition-shadow" placeholder="Your Name" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input type="email" id="email" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 outline-none transition-shadow" placeholder="you@example.com" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                  <select id="subject" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 outline-none bg-white transition-shadow">
                    <option>General Inquiry</option>
                    <option>Booking Support</option>
                    <option>Payment Issue</option>
                    <option>Partnership</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea id="message" required rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 outline-none transition-shadow resize-none" placeholder="How can we help you?"></textarea>
                </div>
                
                <button type="submit" className="w-full py-3 px-6 bg-saffron-500 text-white font-medium rounded-lg hover:bg-saffron-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-saffron-500 transition-colors shadow-sm">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
