import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUp } from 'lucide-react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  React.useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-cream text-slate-800 font-sans flex flex-col selection:bg-saffron-200 selection:text-saffron-900">
      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 bg-cream/70 backdrop-blur-xl border-b border-saffron-100/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="h-9 w-9 overflow-hidden rounded-xl border border-saffron-200/60 shadow-sm group-hover:shadow-md transition-shadow">
                <img src="/assets/logo-nandpal.png" alt="Nandpal Logo" className="h-full w-full object-cover" />
              </div>
              <span className="font-display font-semibold text-lg text-slate-900 tracking-tight">
                Nandpal
              </span>
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-saffron-700 bg-saffron-50'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/60'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://play.google.com/store/apps/details?id=com.nandpal.app"
                target="_blank"
                rel="noreferrer"
                className="ml-3 px-5 py-2 rounded-full text-sm font-semibold text-white bg-saffron-500 hover:bg-saffron-600 transition-colors shadow-sm"
              >
                Download App
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-saffron-100/40 px-4 py-4 space-y-1 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-saffron-600 hover:bg-saffron-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://play.google.com/store/apps/details?id=com.nandpal.app"
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center mt-3 px-5 py-3 text-base font-semibold rounded-xl text-white bg-saffron-500 hover:bg-saffron-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Download App
            </a>
          </div>
        )}
      </nav>

      {/* ── Main Content ── */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* ── Footer ── */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-14">
            {/* Brand */}
            <div className="col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="h-8 w-8 overflow-hidden rounded-lg bg-white/10">
                  <img src="/assets/logo-nandpal.png" alt="Nandpal Logo" className="h-full w-full object-cover" />
                </div>
                <span className="font-display font-semibold text-lg text-white">Nandpal</span>
              </div>
              <p className="text-sm text-slate-400 mb-5 max-w-sm leading-relaxed">
                A modern spiritual wellness platform offering guided devotional experiences and seamless seva participation through technology.
              </p>
              <div className="space-y-1.5 text-sm text-slate-400">
                <p><span className="text-slate-500 font-medium">Email:</span> nandpal3105@gmail.com</p>
                <p><span className="text-slate-500 font-medium">Phone:</span> +91-9472521003</p>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xs font-bold text-white tracking-widest uppercase mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/privacy" className="text-slate-400 hover:text-saffron-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-slate-400 hover:text-saffron-400 transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/refund" className="text-slate-400 hover:text-saffron-400 transition-colors">Refund & Cancellation</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xs font-bold text-white tracking-widest uppercase mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className="text-slate-400 hover:text-saffron-400 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-slate-400 hover:text-saffron-400 transition-colors">Contact Us</Link></li>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.nandpal.app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-saffron-400 hover:text-saffron-300 font-medium transition-colors"
                  >
                    Get the App →
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} Nandpal. All rights reserved.
            </p>
            <div className="flex gap-5">
              <a href="https://www.instagram.com/nandpal_app/" target="_blank" rel="noreferrer" className="text-xs text-slate-500 hover:text-saffron-400 transition-colors">Instagram</a>
              <a href="https://www.reddit.com/r/Nandpal/" target="_blank" rel="noreferrer" className="text-xs text-slate-500 hover:text-saffron-400 transition-colors">Reddit</a>
            </div>
          </div>

          <p className="mt-6 text-center text-[11px] text-slate-600">
            Secure payments powered by trusted payment partners.
          </p>
        </div>
      </footer>

      {/* ── Scroll-to-top button ── */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-saffron-500 text-white shadow-lg hover:bg-saffron-600 transition-colors flex items-center justify-center"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Layout;
