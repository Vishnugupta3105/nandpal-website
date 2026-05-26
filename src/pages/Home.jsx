import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar, Video, Heart, ShieldCheck, Phone, CheckCircle2,
  Star, HandHeart, Users, Sparkles, Eye, BookOpen, MessageCircle, Music
} from 'lucide-react';

const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.nandpal.app';

/* ── Shared animation presets ── */
const sectionFade = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const stagger = (i, base = 0.12) => ({
  ...sectionFade,
  transition: { ...sectionFade.transition, delay: i * base },
});

/* ================================================================== */
const Home = () => {
  return (
    <div className="bg-cream overflow-hidden">
      {/* ─────────────── HERO ─────────────── */}
      <section className="relative pt-16 pb-10 lg:pt-24 lg:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute top-[-120px] left-[10%] w-[500px] h-[500px] bg-saffron-300/20 rounded-full blur-3xl animate-blob -z-10" />
        <div className="absolute top-[-60px] right-[5%] w-[400px] h-[400px] bg-rose-200/25 rounded-full blur-3xl animate-blob animation-delay-2000 -z-10" />
        <div className="absolute bottom-[-100px] left-[40%] w-[450px] h-[450px] bg-amber-200/20 rounded-full blur-3xl animate-blob animation-delay-4000 -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left – copy */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saffron-100/60 border border-saffron-200/60 text-saffron-700 text-sm font-medium mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-saffron-500" />
                </span>
                Now on Google Play
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Modern Spiritual<br />
                Experiences{' '}
                <span className="text-saffron-600 italic">Through Technology</span>
              </h1>

              <p className="max-w-lg mx-auto lg:mx-0 text-lg text-slate-500 mb-8 leading-relaxed">
                Participate in guided Gau Seva, live devotional experiences, chanting, and spiritual wellness journeys — all from the Nandpal app.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold rounded-full text-white bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 shadow-lg shadow-saffron-500/25 transition-all duration-300 hover:shadow-saffron-500/40 hover:-translate-y-0.5"
                >
                  Download App
                </a>
                <a
                  href="#services"
                  className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold rounded-full text-slate-700 bg-white border border-slate-200 hover:border-saffron-300 hover:text-saffron-700 transition-all duration-300"
                >
                  Explore Seva
                </a>
              </div>

              {/* Trust badges row */}
              <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Secure Payments</span>
                <span className="flex items-center gap-1.5"><Eye className="w-4 h-4 text-saffron-500" /> Live Proof</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Verified Partners</span>
              </div>
            </motion.div>

            {/* Right – phone mockup */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center order-1 lg:order-2"
            >
              <div className="relative">
                {/* Glow ring behind phone */}
                <div className="absolute inset-0 m-auto w-[260px] h-[260px] bg-saffron-400/15 rounded-full blur-[80px] -z-10" />

                {/* The phone frame */}
                <div className="phone-mockup">
                  <div className="phone-screen">
                    <img
                      src="/assets/home.png"
                      alt="Nandpal App Home Screen"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────── HOW IT WORKS ─────────────── */}
      <section className="py-20 lg:py-28 bg-white bg-grid px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div {...sectionFade} className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest text-saffron-600 uppercase mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Book a Seva in 3 Simple Steps
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 relative">
            {/* Dashed connector */}
            <div className="hidden md:block absolute top-14 left-[18%] right-[18%] border-t-2 border-dashed border-saffron-200 z-0" />

            {[
              { icon: HandHeart, title: 'Choose a Seva Experience', desc: 'Browse curated devotional services — Gau Seva, Anna Daan, Live Darshan and more.' },
              { icon: Calendar, title: 'Select Time & Participate', desc: 'Pick a slot that suits you. Pay securely. We handle everything on-ground.' },
              { icon: Video, title: 'Receive Live Updates', desc: 'Watch live video, get photos, and connect with the experience in real time.' },
            ].map((step, i) => (
              <motion.div key={i} {...stagger(i, 0.18)} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-saffron-50 to-saffron-100 border-4 border-white shadow-lg flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-saffron-600" strokeWidth={1.5} />
                </div>
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-saffron-500 text-white text-xs font-bold mb-3">{i + 1}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── FEATURED SERVICES (App-screenshot cards) ─────────────── */}
      <section id="services" className="py-20 lg:py-28 bg-cream px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...sectionFade} className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest text-saffron-600 uppercase mb-3">Experiences</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Featured Services</h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">Explore our guided spiritual experiences designed for participation, wellness and inner peace.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
            {[
              { title: 'Guided Gau Seva', img: '/assets/gau-seva.jpeg', icon: HandHeart },
              { title: 'Live Darshan', img: '/assets/seva.png', icon: Eye },
              { title: 'Krishna AI Guidance', img: '/assets/screen-kanha-chat.jpeg', icon: MessageCircle },
              { title: 'Chanting & Mindfulness', img: '/assets/screen-chanting.jpeg', icon: Music },
              { title: 'Spiritual Community', img: '/assets/screen-home.png', icon: Users },
              { title: 'Shastrartha Discussions', img: '/assets/shastr.jpeg', icon: BookOpen },
            ].map((svc, i) => (
              <motion.div key={i} {...stagger(i, 0.1)} className="group flex flex-col items-center">
                {/* Phone-style card */}
                <div className="relative w-full max-w-[220px] bg-slate-900 rounded-[28px] p-2 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="rounded-[22px] overflow-hidden aspect-[9/16] bg-slate-800">
                    <img
                      src={svc.img}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <svc.icon className="w-4 h-4 text-saffron-500" />
                    <h4 className="text-sm font-bold text-slate-900">{svc.title}</h4>
                  </div>
                  <a href="#" className="text-xs text-saffron-600 font-medium hover:underline underline-offset-2">
                    Book Experience →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── LIVE SEVA EXPERIENCE ─────────────── */}
      <section className="py-20 lg:py-28 bg-white px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div {...sectionFade}>
              <p className="text-sm font-semibold tracking-widest text-saffron-600 uppercase mb-3">Live Experience</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">
                Participate Remotely,<br />Experience Fully
              </h2>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Distance shouldn't limit devotion. Book guided seva experiences and participate from anywhere — receive live video updates, photos, and guided interactions directly in your app.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Book specialized guided experiences',
                  'Receive high-quality live video & photo updates',
                  'Participate virtually with guided audio',
                  'Transparent booking and facilitation',
                ].map((item, i) => (
                  <motion.li key={i} {...stagger(i, 0.1)} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-saffron-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-saffron-600" />
                    </div>
                    <span className="text-slate-600">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex px-7 py-3 bg-slate-900 text-white rounded-full font-semibold text-sm hover:bg-slate-800 transition-colors shadow-lg"
              >
                Experience Now
              </a>
            </motion.div>

            {/* Phone mockup */}
            <motion.div
              {...sectionFade}
              transition={{ ...sectionFade.transition, delay: 0.2 }}
              className="flex justify-center relative"
            >
              <div className="absolute inset-0 m-auto w-[300px] h-[300px] bg-saffron-300/10 rounded-full blur-[100px] -z-10" />

              <div className="phone-mockup">
                <div className="phone-screen">
                  <img src="/assets/seva-done.jpeg" alt="Live Seva Experience" loading="lazy" />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                className="absolute -right-2 lg:right-4 top-[20%] glass p-3 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Video className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Live Update</p>
                  <p className="text-sm font-bold text-slate-900">Seva Started ✨</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                className="absolute -left-2 lg:left-4 bottom-[25%] glass p-3 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-saffron-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-saffron-600" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Verified</p>
                  <p className="text-sm font-bold text-slate-900">Photo Proof Sent</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────── COMMUNITY ─────────────── */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-saffron-500/5 rounded-full blur-[120px]" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div {...sectionFade}>
            <Heart className="w-10 h-10 text-saffron-400 mx-auto mb-5" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 leading-tight">
              A Spiritual Youth Movement
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto mb-14">
              Join seekers cultivating positivity, mindfulness, and devotion in our active online communities.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              { icon: Users, title: 'Reddit Community', desc: 'Deep Shastrartha discussions and shared spiritual journeys.', link: 'Join r/Nandpal', url: 'https://www.reddit.com/r/Nandpal/' },
              { icon: Star, title: 'Instagram Presence', desc: 'Daily positivity, spiritual insights, and live seva snippets.', link: 'Follow @nandpal_app', url: 'https://www.instagram.com/nandpal_app/' },
            ].map((c, i) => (
              <motion.div
                key={i}
                {...stagger(i, 0.15)}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-saffron-500/30 transition-colors duration-300 flex flex-col items-center"
              >
                <c.icon className="w-7 h-7 text-saffron-400 mb-4" strokeWidth={1.5} />
                <h4 className="text-lg font-bold mb-2">{c.title}</h4>
                <p className="text-slate-400 text-sm mb-4">{c.desc}</p>
                <a href={c.url} target="_blank" rel="noreferrer" className="text-saffron-400 text-sm font-semibold hover:underline underline-offset-2">{c.link}</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── TRUST SECTION ─────────────── */}
      <section className="py-20 lg:py-24 bg-saffron-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            {...sectionFade}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-saffron-100 relative overflow-hidden"
          >
            {/* Shimmer accent bar */}
            <div className="absolute top-0 inset-x-0 h-1 shimmer-border" />

            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="w-6 h-6 text-emerald-500" />
                  <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase">Trust & Safety</p>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-3">
                  Trusted & Transparent
                </h3>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  We prioritize a secure, customer-first approach. All bookings are processed through certified gateways, ensuring transparent facilitation of services.
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 bg-emerald-50 px-5 py-2.5 rounded-full border border-emerald-100">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Secure payments powered by trusted payment partners.
                </div>
              </div>

              <div className="grid gap-4 flex-shrink-0">
                <div className="flex items-center gap-4 bg-cream p-4 pr-8 rounded-xl border border-slate-100">
                  <div className="w-11 h-11 bg-saffron-100 text-saffron-600 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Support</p>
                    <p className="font-bold text-slate-900">Always Available</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-cream p-4 pr-8 rounded-xl border border-slate-100">
                  <div className="w-11 h-11 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Partners</p>
                    <p className="font-bold text-slate-900">Fully Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── DOWNLOAD CTA ─────────────── */}
      <section id="download" className="py-20 lg:py-28 bg-cream px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-[20%] w-[400px] h-[400px] bg-saffron-300/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-[20%] w-[350px] h-[350px] bg-rose-200/10 rounded-full blur-3xl -z-10" />

        <motion.div {...sectionFade} className="max-w-3xl mx-auto text-center">
          <Sparkles className="w-10 h-10 text-saffron-500 mx-auto mb-5" strokeWidth={1.5} />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4 leading-tight">
            Begin Your Spiritual Journey
          </h2>
          <p className="text-lg text-slate-500 mb-10 max-w-lg mx-auto">
            Download Nandpal and experience guided seva, live darshan, spiritual wellness and a community that uplifts you every day.
          </p>
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 text-base font-semibold rounded-full text-white bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 shadow-lg shadow-saffron-500/25 transition-all duration-300 hover:shadow-saffron-500/40 hover:-translate-y-0.5"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-lg">▶</span>
            Get Nandpal on Google Play
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
