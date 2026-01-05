import { useEffect, useRef, useState } from 'react';

const techStack = [
  { name: 'PHP', icon: '🐘' },
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'Python', icon: '🐍' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Netlify', icon: '🚀' },
  { name: 'Render', icon: '🧩' },
  { name: 'Vercel', icon: '▲' },
  { name: 'Google Cloud', icon: '🌥️' },
  { name: 'Oracle', icon: '🔴' },
  { name: '.NET', icon: '💠' },
  { name: 'Angular', icon: '🅰️' },
  { name: 'AngularJS', icon: '📐' },
  { name: 'Express.js', icon: '🚂' },
  { name: 'jQuery', icon: '🧠' },
  { name: 'Laravel', icon: '🔥' },
  { name: 'Next.js', icon: '➡️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'React', icon: '⚛️' },
  { name: 'React Native', icon: '📱' },
  { name: 'React Hook Form', icon: '📝' },
  { name: 'React Query', icon: '🔄' },
  { name: 'Tailwind CSS', icon: '💨' },
  { name: 'Three.js', icon: '🧊' },
  { name: 'Vue.js', icon: '🟩' },
  { name: 'WordPress', icon: '📰' },
  { name: 'Apache', icon: '🪶' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'MS SQL Server', icon: '🏢' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Figma', icon: '🎯' },
  { name: 'Adobe Photoshop', icon: '🖌️' },
  { name: 'Canva', icon: '🖼️' },
  { name: 'Pandas', icon: '🐼' },
  { name: 'Power BI', icon: '📊' },
  { name: 'Meta Ads', icon: '📣' },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <h2 className="section-title mb-6">ABOUT</h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                I am a <span className="text-foreground font-medium">Web Developer</span> and{' '}
                <span className="text-foreground font-medium">Digital Marketing Expert</span> focused on building scalable,
                performance-driven digital products.
              </p>
              <p>
                As the founder of <span className="text-accent font-medium">Patel Bros Tech</span>, I combine strong
                technical expertise with strategic business insight to deliver end-to-end digital solutions—from
                high-quality websites to results-driven marketing campaigns.
              </p>
            </div>
          </div>

          {/* Right Content - Tech Stack */}
          <div className="card-glass p-8 rounded-2xl">
            <h3 className="text-2xl font-display font-bold mb-6 gradient-text">
              💻 Tech Stack
            </h3>

            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="card-glass px-4 py-2 rounded-lg flex items-center gap-2 hover-lift cursor-default"
                >
                  <span>{tech.icon}</span>
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
