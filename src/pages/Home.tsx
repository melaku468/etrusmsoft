import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import { Cloud, Database, Shield, Zap, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const services = [
    {
      icon: Cloud,
      title: "Azure Cloud Solutions",
      description: "Migrate and optimize your infrastructure with Microsoft Azure for scalability and security.",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform data into insights with Power BI and advanced analytics solutions.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Protect your business with enterprise-grade security powered by Microsoft technologies.",
    },
    {
      icon: Zap,
      title: "Microsoft 365",
      description: "Empower your workforce with integrated collaboration and productivity tools.",
    },
    {
      icon: Users,
      title: "Dynamics 365",
      description: "Streamline operations with intelligent business applications and CRM solutions.",
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "Drive innovation and growth with comprehensive digital transformation strategies.",
    },
  ];

  const testimonials = [
    {
      quote: "ETRUS Tech transformed our business operations with their Azure migration expertise. The transition was seamless and our efficiency has increased by 40%.",
      author: "Sarah Johnson",
      position: "CTO",
      company: "TechCorp Industries",
    },
    {
      quote: "Their Microsoft 365 implementation has revolutionized how our team collaborates. Outstanding support and deep technical knowledge.",
      author: "Michael Chen",
      position: "IT Director",
      company: "Global Finance Solutions",
    },
    {
      quote: "The Dynamics 365 solution ETRUS Tech delivered exceeded our expectations. Our sales team productivity has skyrocketed.",
      author: "Emily Rodriguez",
      position: "VP of Operations",
      company: "Retail Innovations Inc",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 82, 204, 0.85), rgba(0, 82, 204, 0.85)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <div className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-semibold">Official Microsoft Partner</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Empowering Business Through Microsoft Innovation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              Transform your organization with cutting-edge cloud solutions, powered by Microsoft technologies and delivered by certified experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="hero">
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>Microsoft Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>500+ Successful Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                <span>15+ Years Experience</span>
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
              Our Microsoft-Powered Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leverage the full power of Microsoft technologies with our comprehensive suite of services designed to accelerate your digital transformation.
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
              See how we've helped organizations transform their operations with Microsoft solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <CaseStudyCard
              title="Enterprise Cloud Migration"
              description="Leading financial services company migrated 500+ workloads to Azure, achieving 60% cost reduction."
              industry="Financial Services"
              result="60% cost reduction, 99.9% uptime, enhanced security posture"
            />
            <CaseStudyCard
              title="Digital Workplace Transformation"
              description="Global retail chain deployed Microsoft 365 across 200+ locations, enabling seamless collaboration."
              industry="Retail"
              result="40% productivity increase, 50% reduction in IT tickets"
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
            Let's discuss how our Microsoft expertise can drive your digital transformation journey.
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
