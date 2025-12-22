import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cloud, ArrowRight, Shield, Zap, Database, BarChart3, Globe } from "lucide-react";

const CloudSolutions = () => {
    const benefits = [
        {
            icon: Zap,
            title: "Agility & Speed",
            description: "Quickly deploy resources and scale applications to meet changing business demands.",
        },
        {
            icon: Shield,
            title: "Enhanced Security",
            description: "Benefit from enterprise-grade security and compliance features out of the box.",
        },
        {
            icon: Database,
            title: "Cost Optimization",
            description: "Reduce capital expenditure and transition to a predictable pay-as-you-go model.",
        },
    ];

    const services = [
        {
            icon: Cloud,
            title: "Cloud Migration",
            description: "Seamlessly move your workloads, databases, and applications to the cloud with minimal disruption.",
        },
        {
            icon: Globe,
            title: "Hybrid Cloud Strategy",
            description: "Combine your on-premises infrastructure with cloud resources for maximum flexibility.",
        },
        {
            icon: BarChart3,
            title: "Cloud Governance",
            description: "Establish control, visibility, and compliance across your entire cloud environment.",
        },
    ];

    return (
        <div className="min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-hero text-primary-foreground">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Cloud Solutions</h1>
                        <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                            Accelerate your digital transformation with our comprehensive cloud strategy and implementation services.
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-gradient-subtle">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Transform Your Business in the Cloud</h2>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            In today's fast-paced digital economy, the cloud is no longer just an option—it's a necessity. ETRUS Tech helps you leverage the power of the cloud to drive innovation, improve efficiency, and reduce costs.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="p-6 md:p-8 bg-background rounded-xl shadow-lg border border-border/50 hover:border-primary/30 transition-all">
                                <benefit.icon className="h-10 w-10 md:h-12 md:w-12 text-primary mb-6" />
                                <h3 className="text-lg md:text-xl font-bold mb-4">{benefit.title}</h3>
                                <p className="text-sm md:text-base text-muted-foreground">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Cloud Services</h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                            From initial strategy to ongoing management, we support every stage of your cloud journey.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-hero text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Move to the Cloud?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Let our experts help you design and implement a cloud strategy that fits your unique business needs.
                    </p>
                    <Button asChild size="xl" variant="hero">
                        <Link to="/contact">Book a Cloud Assessment</Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CloudSolutions;
