import React from 'react';
import { Sparkles, Heart, Globe2 } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-cream min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900">About Nandpal</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A modern spiritual wellness and devotional experiences platform.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-saffron-100 p-8 md:p-12">
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
            <p className="text-lg">
              Nandpal was created with a singular vision: to bridge the gap between ancient spiritual practices and modern daily life. In today's fast-paced world, maintaining a connection to our roots and inner peace can be challenging. We exist to make devotional participation accessible, transparent, and seamlessly integrated into your lifestyle through technology.
            </p>
            
            <p>
              We are <strong>not a charity or a crowdfunding platform.</strong> Instead, we are a technology facilitator that allows you to securely book and participate in guided spiritual experiences, such as Gau Seva and Live Darshan, regardless of where you are in the world.
            </p>

            <div className="grid md:grid-cols-3 gap-8 py-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-saffron-50 text-saffron-600 rounded-2xl flex items-center justify-center mb-4">
                  <Globe2 className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Global Access</h3>
                <p className="text-sm">Participate in authentic seva from anywhere in the world.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-saffron-50 text-saffron-600 rounded-2xl flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Spiritual Wellness</h3>
                <p className="text-sm">Guided practices for a calmer, more centered mind.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-saffron-50 text-saffron-600 rounded-2xl flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Verified Partners</h3>
                <p className="text-sm">We work only with vetted Gaushalas and temples.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 pt-4">Our Mission</h2>
            <p>
              To foster a global community rooted in positivity, devotion, and mindfulness by providing a trusted platform for modern spiritual experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
