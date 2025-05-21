import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { Download, Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'about', label: 'About' },
  { id: 'download', label: 'Download' },
];

const FEATURES = [
  {
    title: 'AI-Powered Insights',
    description: 'Get personalized recommendations and insights powered by advanced AI algorithms.',
    icon: '✨'
  },
  {
    title: 'Real-time Updates',
    description: 'Stay connected with instant notifications and live updates from your community.',
    icon: '🔄'
  },
  {
    title: 'Secure Platform',
    description: 'Your data is protected with enterprise-grade security and encryption.',
    icon: '🔒'
  },
  {
    title: 'Smart Integration',
    description: 'Seamlessly connect with other services and platforms you use daily.',
    icon: '🔗'
  }
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navAnimation = useSpring({
    backgroundColor: isOpen ? 'rgba(10, 10, 11, 0.95)' : 'rgba(10, 10, 11, 0.7)',
    backdropFilter: 'blur(12px)',
  });

  return (
    <animated.nav style={navAnimation} className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-bold text-gradient">
          Love Akot
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          
          <a
            href="https://play.google.com/store/apps/details?id=com.loveakot.android"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-border"
          >
            <button className="px-6 py-2 bg-secondary rounded-lg flex items-center space-x-2 hover:bg-opacity-80 transition-all">
              <Download size={18} />
              <span>Download</span>
            </button>
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-secondary p-4 md:hidden"
          >
            {NAV_ITEMS.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </animated.nav>
  );
};

const HeroSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen hero-gradient flex items-center justify-center pt-20 px-4"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
            Experience Your City in a
            <span className="text-gradient"> New Way</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Connect with your community, discover local businesses, and stay updated with
            everything happening in Akot - all in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.loveakot.android"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border"
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-secondary rounded-lg flex items-center justify-center space-x-3 hover:bg-opacity-80 transition-all">
                <Download size={24} />
                <span className="text-lg font-semibold">Download Now</span>
              </button>
            </a>
            
            <a href="#features" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <span>Learn More</span>
              <ChevronRight size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 relative"
        >
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 blur-3xl" />
            <img
              src="https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg"
              alt="App Preview"
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, description, icon, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 rounded-xl"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section
      ref={ref}
      id="features"
      className="py-20 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Powerful Features for a
            <span className="text-gradient"> Connected Community</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how Love Akot brings your community together with innovative features
            designed for modern city living.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const DownloadSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section
      ref={ref}
      id="download"
      className="py-20 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neon-purple/10 to-neon-blue/10" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Ready to Experience
                  <span className="text-gradient"> The Future?</span>
                </h2>
                <p className="text-gray-400 mb-6">
                  Download Love Akot now and join thousands of citizens already connected
                  to their community.
                </p>
                
                <a
                  href="https://play.google.com/store/apps/details?id=com.loveakot.android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-border inline-block"
                >
                  <button className="px-8 py-4 bg-secondary rounded-lg flex items-center space-x-3 hover:bg-opacity-80 transition-all">
                    <Download size={24} />
                    <span className="text-lg font-semibold">Get Started</span>
                  </button>
                </a>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <img
                src="https://images.pexels.com/photos/1447264/pexels-photo-1447264.jpeg"
                alt="App Preview"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 px-4">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <Link to="/" className="text-2xl font-display font-bold text-gradient">
            Love Akot
          </Link>
          <p className="text-gray-400 mt-2">Connecting communities, empowering cities.</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">
            Terms & Conditions
          </Link>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Contact Us
          </a>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Love Akot. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const Home = () => {
  return (
    <div className="bg-primary min-h-screen">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Home;