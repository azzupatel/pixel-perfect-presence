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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-muted-foreground text-sm mb-6 animate-fade-up">
              <Code size={16} className="text-primary" />
              <span>Full-Stack Developer</span>
              <span className="text-border">•</span>
              <TrendingUp size={16} className="text-accent" />
              <span>Digital Marketing</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-up delay-100">
              <span className="text-foreground">Abdulaziz</span>
              <br />
              <span className="gradient-text">Patel</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-lg animate-fade-up delay-200">
              Full-Stack Web Developer & Digital Marketing Expert crafting high-performance websites and driving online success through data-driven strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-300">
              <a href="#projects" className="btn-primary inline-flex items-center justify-center gap-2">
                View My Work
              </a>
              <a href="#contact" className="btn-outline inline-flex items-center justify-center gap-2">
                Let's Connect
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-up delay-400">
              <div>
                <div className="text-3xl font-display font-bold gradient-text">6+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>

              <div>
                <div className="text-3xl font-display font-bold gradient-text">∞</div>
                <div className="text-sm text-muted-foreground">Learning & Growing</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in">
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
              <div className="absolute -left-4 top-1/4 card-glass px-3 py-2 rounded-lg animate-float">
                <span className="text-xs font-medium"><a href='https://www.instagram.com/patel_bros_tech?igsh=ZGw4Mml3ZGs5emNh'>🚀 Patel Bros Tech</a></span>
              </div>
              <div className="absolute -right-4 bottom-1/4 card-glass px-3 py-2 rounded-lg animate-float delay-500">
                <span className="text-xs font-medium">💻 Web Developer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
