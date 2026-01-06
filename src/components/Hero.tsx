import { motion } from 'framer-motion';
import profilePhoto from '@/assets/profile.png.jpeg';
import { ArrowDown, Code, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{ background: 'var(--hero-gradient)' }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-muted-foreground text-sm mb-6"
            >
              <Code size={16} className="text-primary" />
              <span>Full-Stack Developer</span>
              <span className="text-border">•</span>
              <TrendingUp size={16} className="text-accent" />
              <span>Digital Marketing</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold mb-6"
            >
              <span className="text-foreground">Abdulaziz</span>
              <br />
              <span className="gradient-text">Patel</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 max-w-lg"
            >
              Full-Stack Web Developer & Digital Marketing Expert crafting high-performance websites and driving online success through data-driven strategies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#projects" className="btn-primary inline-flex items-center justify-center gap-2">
                View My Work
              </a>
              <a href="#contact" className="btn-outline inline-flex items-center justify-center gap-2">
                Let's Connect
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              <div>
                <div className="text-3xl font-display font-bold gradient-text">6+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>

              <div>
                <div className="text-3xl font-display font-bold gradient-text">∞</div>
                <div className="text-sm text-muted-foreground">Learning & Growing</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 scale-110 animate-pulse" />
              <div className="absolute inset-0 rounded-full border border-accent/20 scale-125" />
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glow-box">
                <img
                  src={profilePhoto}
                  alt="Abdulaziz Patel"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -left-4 top-1/4 card-glass px-3 py-2 rounded-lg animate-float"
              >
                <span className="text-xs font-medium"><a href='https://www.instagram.com/patel_bros_tech?igsh=ZGw4Mml3ZGs5emNh'>🚀 Patel Bros Tech</a></span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -right-4 bottom-1/4 card-glass px-3 py-2 rounded-lg animate-float delay-500"
              >
                <span className="text-xs font-medium">💻 Web Developer</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
