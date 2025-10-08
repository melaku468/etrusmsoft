import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Cloud,
  Database,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Server,
  BarChart3,
  Lock,
  Smartphone,
  Workflow,
  HeadphonesIcon,
} from "lucide-react";

const Services = () => {
  const azureServices = [
    {
      icon: Cloud,
      title: "Azure Migration",
      description: "Seamless cloud migration services to move your workloads to Azure with minimal downtime.",
    },
    {
      icon: Server,
      title: "Azure Infrastructure",
      description: "Design and implement scalable, resilient infrastructure solutions on Azure.",
    },
    {
      icon: Lock,
      title: "Azure Security",
      description: "Comprehensive security implementation including Azure AD, Security Center, and Sentinel.",
    },
  ];

  const microsoft365Services = [
    {
      icon: Zap,
      title: "Microsoft 365 Deployment",
      description: "Full deployment and configuration of Microsoft 365 suite for your organization.",
    },
    {
      icon: Users,
      title: "Teams & Collaboration",
      description: "Optimize collaboration with Microsoft Teams, SharePoint, and OneDrive.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Implement Microsoft 365 security features and compliance tools.",
    },
  ];

  const dataServices = [
    {
      icon: Database,
      title: "Data Platform Solutions",
      description: "Build modern data platforms using Azure SQL, Synapse Analytics, and Cosmos DB.",
    },
    {
      icon: BarChart3,
      title: "Power BI & Analytics",
      description: "Transform your data into actionable insights with Power BI dashboards and reports.",
    },
    {
      icon: TrendingUp,
      title: "AI & Machine Learning",
      description: "Leverage Azure AI and ML services to build intelligent applications.",
    },
  ];

  const businessApps = [
    {
      icon: Workflow,
      title: "Dynamics 365",
      description: "Implement and customize Dynamics 365 for Sales, Customer Service, and Finance.",
    },
    {
      icon: Smartphone,
      title: "Power Platform",
      description: "Build custom business applications with Power Apps, Power Automate, and Power Virtual Agents.",
    },
    {
      icon: HeadphonesIcon,
      title: "Ongoing Support",
      description: "24/7 support and managed services to keep your Microsoft solutions running smoothly.",
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
              Comprehensive Microsoft solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Azure Services */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Azure Cloud Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlock the full potential of Microsoft Azure with our expert cloud services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {azureServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Microsoft 365 Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Microsoft 365 Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empower your workforce with modern workplace solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {microsoft365Services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Data & Analytics Services */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Data & Analytics</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Turn your data into your competitive advantage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {dataServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Business Applications */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Business Applications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Streamline operations with intelligent business applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {businessApps.map((service, index) => (
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
            Let's discuss which services are right for your organization.
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
