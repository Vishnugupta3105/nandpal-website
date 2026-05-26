import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="bg-cream min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-saffron-100 p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8">Refund & Cancellation Policy</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p className="text-sm text-slate-500">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">1. Cancellation Policy</h2>
            <p>We understand that plans can change. Our cancellation policy is designed to be fair to both our users and our service partners:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Before Service Execution:</strong> Cancellations made at least 24 hours prior to the scheduled seva or spiritual experience will be fully honored, subject to standard payment gateway deduction fees.</li>
              <li><strong>Within 24 Hours:</strong> Cancellations made within 24 hours of the scheduled service may not be accepted as arrangements and preparations with our partners are already underway.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">2. Refund Policy</h2>
            <p>Due to the nature of our guided spiritual experiences:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Completed Services:</strong> Once a seva or guided experience has been completed, it is strictly <strong>non-refundable</strong>. The resources and facilitation have already been rendered.</li>
              <li><strong>Eligible Refunds:</strong> If a cancellation is accepted (as per Section 1), or if the service could not be rendered due to unforeseen circumstances on our end, a full refund will be initiated to the original payment method.</li>
              <li><strong>Processing Time:</strong> Please allow 5-7 business days for the refunded amount to reflect in your bank account, depending on your bank's processing time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">3. Support Escalation Process</h2>
            <p>If you believe you have been incorrectly charged, or if a service was not rendered as promised, please escalate the issue through our support channels. We are committed to a customer-first approach.</p>
            <p className="mt-2">Email: nandpal3105@gmail.com</p>
            <p>We aim to respond to all escalations within 48 hours.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
