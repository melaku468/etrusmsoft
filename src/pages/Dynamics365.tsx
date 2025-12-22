import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart, Users, Settings, ShoppingBag, PieChart, Briefcase } from "lucide-react";

const Dynamics365 = () => {
    const modules = [
        {
            icon: Users,
            title: "Sales & Marketing",
            description: "Build stronger relationships and close more deals with intelligent CRM tools.",
        },
        {
            icon: Settings,
            title: "Operations & Finance",
            description: "Streamline your business processes and gain real-time visibility into your finances.",
        },
        {
            icon: Briefcase,
            title: "Customer Service",
            description: "Deliver personalized support that earns customer loyalty and builds your brand.",
        },
        {
            icon: BarChart,
            title: "Business Central",
            description: "All-in-one business management solution for small to medium-sized businesses.",
        },
        {
            icon: ShoppingBag,
            title: "Commerce",
            description: "Create unified shopping experiences across digital and physical stores.",
        },
        {
            icon: PieChart,
            title: "Supply Chain",
            description: "Optimize your supply chain with Al and predictive analytics for better efficiency.",
        },
    ];

    return (
        <div className="min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-hero text-primary-foreground">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Dynamics 365 Business Applications</h1>
                        <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                            Transform your business operations and customer engagement with the power of Dynamics 365.
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-gradient-subtle">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Integrated Business Intelligence</h2>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            Dynamics 365 breaks down the silos between CRM and ERP, using AI and data to provide a 360-degree view of your business. ETRUS Tech helps you implement, customize, and optimize these powerful applications.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                        {modules.map((module, index) => (
                            <ServiceCard key={index} {...module} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation Process */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Implementation Process</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <div className="space-y-4">
                            <div className="h-12 w-12 md:h-16 md:w-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto">1</div>
                            <h4 className="font-bold text-sm md:text-base">Discovery</h4>
                            <p className="text-xs md:text-sm text-muted-foreground">We analyze your business processes and identify key requirements.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="h-12 w-12 md:h-16 md:w-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto">2</div>
                            <h4 className="font-bold text-sm md:text-base">Design</h4>
                            <p className="text-xs md:text-sm text-muted-foreground">We architect a custom solution tailored to your specific needs.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="h-12 w-12 md:h-16 md:w-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto">3</div>
                            <h4 className="font-bold text-sm md:text-base">Deploy</h4>
                            <p className="text-xs md:text-sm text-muted-foreground">We implement the modules and migrate your existing data.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="h-12 w-12 md:h-16 md:w-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto">4</div>
                            <h4 className="font-bold text-sm md:text-base">Support</h4>
                            <p className="text-xs md:text-sm text-muted-foreground">We provide ongoing training and support to ensure success.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-hero text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Optimize Your Operations?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        Contact us today for a free consultation and demonstration of Dynamics 365.
                    </p>
                    <Button asChild size="xl" variant="hero">
                        <Link to="/contact">Schedule a Demo</Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Dynamics365;
