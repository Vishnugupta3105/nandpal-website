import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-cream min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-saffron-100 p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p className="text-sm text-slate-500">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">1. Agreement to Terms</h2>
            <p>These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Nandpal ("we", "us", or "our"), concerning your access to and use of the Nandpal website and mobile application.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">2. Description of Services</h2>
            <p>Nandpal is a platform that facilitates the booking of guided spiritual experiences, seva participation, and devotional interactions. <strong>We do not facilitate anonymous donations, crowdfunding, or public fundraising.</strong> All transactions are payments for specific services, experiences, or guided participation rendered by our verified partners or platform.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">3. User Responsibilities</h2>
            <p>By using the platform, you represent and warrant that:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>All registration information you submit will be true, accurate, current, and complete.</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
              <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
              <li>You will not use the platform for any illegal or unauthorized purpose.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">4. Misuse Prevention</h2>
            <p>We reserve the right to refuse service, terminate accounts, or cancel bookings in our sole discretion if we believe that user conduct violates applicable law or is harmful to our interests or the interests of our partners.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">5. Service Facilitation</h2>
            <p>Nandpal acts as a technology facilitator connecting users with spiritual experiences. We endeavor to ensure that all services are delivered as described, but we are not liable for any modifications or interruptions caused by the respective service providers (e.g., Gaushalas, Temples) beyond our reasonable control.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
