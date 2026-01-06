import { Mail, Phone, Linkedin, Instagram, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">CONTACT</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:patelaziz639@gmail.com"
                className="flex items-center gap-4 p-4 card-glass rounded-xl hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="text-foreground font-medium">patelaziz639@gmail.com</div>
                </div>
              </a>

              <a
                href="https://wa.me/919737886769"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 card-glass rounded-xl hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Phone / WhatsApp</div>
                  <div className="text-foreground font-medium">+91 9737886769</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 card-glass rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="text-foreground font-medium">Gujarat, India</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-sm text-muted-foreground mb-4">Connect with me</h4>
              <div className="flex gap-3 justify-center">
                <a
                  href="https://www.linkedin.com/in/abdulaziz-patel-424921299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/abdulaziz_patel_/?igsh=NjFmbjNiOTNkc3Nh#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
