import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Globe, Smartphone, Code, Cloud, Database, Shield } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const services = [{
    icon: Globe,
    title: "Website Development",
    description: "Custom, responsive websites built with modern technologies to elevate your online presence."
  }, {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver seamless user experiences."
  }, {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your unique business requirements."
  }, {
    icon: Cloud,
    title: "Microsoft Cloud Solutions",
    description: "Azure, Microsoft 365, and Dynamics 365 implementation as an official Microsoft CSP Partner."
  }, {
    icon: Database,
    title: "Data & Analytics",
    description: "Transform your data into actionable insights with advanced analytics and BI solutions."
  }, {
    icon: Shield,
    title: "IT Security & Support",
    description: "Comprehensive security solutions and ongoing technical support for your IT infrastructure."
  }];
  
  const testimonials = [{
    quote: "ETRUS Technology delivered an exceptional e-commerce platform that transformed our business. The custom features and seamless user experience exceeded our expectations.",
    author: "Dawit Bekele",
    position: "CEO",
    company: "Ethiopian Retail Group"
  }, {
    quote: "The mobile app ETRUS developed for us has revolutionized how our customers interact with our services. Professional team with outstanding technical expertise.",
    author: "Mekdes Tadesse",
    position: "Operations Manager",
    company: "AddisConnect Solutions"
  }, {
    quote: "From website design to cloud migration, ETRUS Technology has been our trusted IT partner. Their comprehensive services have helped us scale efficiently.",
    author: "Samuel Tesfaye",
    position: "CTO",
    company: "Ethiopian Financial Services"
  }];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
        backgroundImage: `linear-gradient(rgba(0, 82, 204, 0.85), rgba(0, 82, 204, 0.85)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <AnimatedBackground />
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <div className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-semibold">Leading Ethiopian IT Solutions Provider</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Empowering Innovation. Enabling Growth.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              Comprehensive IT solutions including website development, mobile apps, custom software, and Microsoft cloud services to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button asChild size="xl" variant="hero">
                <Link to="/contact">Get Started Today</Link>
              </Button> */}
              <Button asChild size="xl" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>Microsoft CSP Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                <span>Custom Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                <span>Full-Stack Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From websites and mobile apps to enterprise cloud solutions, we deliver innovative technology services that drive your business forward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we've delivered transformative technology solutions across diverse industries.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <CaseStudyCard 
              title="E-Commerce Platform Development" 
              description="Built a comprehensive online marketplace with custom features, payment integration, and inventory management system." 
              industry="Retail" 
              result="300% increase in online sales, seamless user experience, scalable architecture" 
            />
            <CaseStudyCard 
              title="Enterprise Mobile Application" 
              description="Developed cross-platform mobile app for field operations with offline capabilities and real-time synchronization." 
              industry="Logistics" 
              result="50% faster operations, improved data accuracy, enhanced customer satisfaction" 
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from the businesses we've helped transform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how our comprehensive IT solutions can accelerate your digital transformation.
          </p>
          <Button asChild size="xl" variant="hero">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
