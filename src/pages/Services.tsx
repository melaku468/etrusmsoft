import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Globe,
  Layout,
  Palette,
  Smartphone,
  AppWindow,
  Zap,
  Code,
  Database,
  Cog,
  Cloud,
  Server,
  Lock,
  Shield,
  Users,
  BarChart3,
  HeadphonesIcon,
} from "lucide-react";

const Services = () => {
  const webServices = [
    {
      icon: Globe,
      title: "Custom Website Development",
      description: "Responsive, modern websites built with latest technologies tailored to your business needs.",
    },
    {
      icon: Layout,
      title: "E-Commerce Solutions",
      description: "Full-featured online stores with payment integration, inventory management, and analytics.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive user interfaces that provide exceptional user experiences.",
    },
  ];

  const mobileServices = [
    {
      icon: Smartphone,
      title: "Native App Development",
      description: "High-performance iOS and Android applications with native features and optimal user experience.",
    },
    {
      icon: AppWindow,
      title: "Cross-Platform Apps",
      description: "Cost-effective mobile solutions that work seamlessly across multiple platforms.",
    },
    {
      icon: Zap,
      title: "App Maintenance & Updates",
      description: "Ongoing support, feature enhancements, and performance optimization for your mobile apps.",
    },
  ];

  const softwareServices = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions designed specifically for your unique business processes.",
    },
    {
      icon: Database,
      title: "Enterprise Systems",
      description: "Scalable enterprise-grade applications for complex business operations and workflows.",
    },
    {
      icon: Cog,
      title: "System Integration",
      description: "Seamlessly connect and integrate your existing systems and third-party services.",
    },
  ];

  const cloudServices = [
    {
      icon: Cloud,
      title: "Microsoft Azure Solutions",
      description: "Cloud migration, infrastructure setup, and optimization on Microsoft Azure platform.",
    },
    {
      icon: Server,
      title: "Microsoft 365 Deployment",
      description: "Full Microsoft 365 implementation including Teams, SharePoint, and collaboration tools.",
    },
    {
      icon: Lock,
      title: "Dynamics 365 Implementation",
      description: "CRM and ERP solutions with Dynamics 365 for Sales, Customer Service, and Finance.",
    },
    {
      icon: Shield,
      title: "Cloud Security & Compliance",
      description: "Enterprise-grade security solutions and compliance management for cloud infrastructure.",
    },
    {
      icon: BarChart3,
      title: "Data Analytics & BI",
      description: "Power BI dashboards and advanced analytics to transform your data into insights.",
    },
    {
      icon: HeadphonesIcon,
      title: "IT Support & Managed Services",
      description: "24/7 technical support and managed services for your entire IT infrastructure.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Comprehensive IT solutions from web and mobile development to enterprise cloud services
            </p>
          </div>
        </div>
      </section>

      {/* Website Development Services */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Website Development</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional web solutions that elevate your digital presence and drive business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {webServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Development Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Mobile App Development</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Native and cross-platform mobile applications that deliver exceptional user experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mobileServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Software Development Services */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Custom Software Development</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored software solutions designed to meet your specific business requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {softwareServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Microsoft Cloud Solutions */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Microsoft Cloud Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              As an official Microsoft CSP Partner, we deliver comprehensive cloud services and enterprise solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cloudServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how our comprehensive IT services can transform your business.
          </p>
          <Button asChild size="xl" variant="hero">
            <Link to="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
