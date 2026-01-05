import { Code, Palette, Search, Megaphone, MousePointerClick, Share2 } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Website Design & Development',
    description: 'Build responsive, high-performance websites tailored to your business needs with modern technologies.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Design intuitive and modern interfaces that enhance user experience and drive engagement.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Optimize your website to rank higher on search engines and attract organic traffic.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Run strategic campaigns to boost your online presence and reach your target audience.',
  },
  {
    icon: MousePointerClick,
    title: 'Ads Management',
    description: 'Manage Google Ads, Facebook Ads, and other paid campaigns for maximum ROI.',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Handle and grow your social media channels professionally to build brand awareness.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">SERVICES</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the online world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-glass p-8 rounded-2xl hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
