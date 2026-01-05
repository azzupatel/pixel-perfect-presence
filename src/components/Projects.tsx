import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'HK Fire Safety',
    description: 'Professional fire safety equipment and services website for a leading safety solutions provider.',
    tech: ['Web Development', 'SEO'],
    link: 'https://hkfiresafety.in',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    type: 'Client Project',
  },
  {
    title: 'Kadva Exporters',
    description: 'Export business website showcasing products and services for international trade.',
    tech: ['Web Development', 'UI/UX'],
    link: 'https://kadvaexporters.co',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop',
    type: 'Client Project',
  },
  {
    title: 'Patel Bros Tech',
    description: 'My own startup providing web development and digital marketing services to businesses.',
    tech: ['Full-Stack', 'Marketing'],
    link: 'https://patelbrostech.com',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    type: 'Own Startup',
  },
  {
    title: 'Cafe Management System',
    description: 'Comprehensive system for managing cafe operations including orders, inventory, and billing.',
    tech: ['ASP.NET', 'SQL Server'],
    github: true,
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop',
    type: 'Academic Project',
  },
  {
    title: 'Car Rental Booking App',
    description: 'Functional booking platform with user authentication, vehicle selection, and payment integration.',
    tech: ['PHP', 'Laravel', 'MySQL'],
    github: true,
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop',
    type: 'Academic Project',
  },
  {
    title: 'All in One Home Services',
    description: 'Comprehensive home service booking platform connecting users with service providers.',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    github: true,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
    type: 'Academic Project',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="section-title">PROJECTS</h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              A showcase of my work including client projects, personal ventures, and academic projects
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group card-glass rounded-2xl overflow-hidden hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium backdrop-blur-sm">
                  {project.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                  >
                    Visit Site <ExternalLink size={14} />
                  </a>
                )}
                {project.github && (
                  <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
                    <Github size={14} /> Academic Project
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
