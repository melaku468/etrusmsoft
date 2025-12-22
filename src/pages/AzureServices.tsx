import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Server, Cpu, ShieldCheck, Database, Layout, Search, Command } from "lucide-react";

const AzureServices = () => {
    const azureOfferings = [
        {
            icon: Server,
            title: "Infrastructure (IaaS)",
            description: "Virtual machines, networking, and storage solutions that scale with your business.",
        },
        {
            icon: Cpu,
            title: "App Services (PaaS)",
            description: "Build, deploy, and scale web apps and APIs quickly on a fully managed platform.",
        },
        {
            icon: ShieldCheck,
            title: "Identity & Security",
            description: "Azure Active Directory and comprehensive security tools to protect your assets.",
        },
        {
            icon: Database,
            title: "Data & AI",
            description: "Modern data warehousing, SQL databases, and AI-powered cognitive services.",
        },
        {
            icon: Layout,
            title: "Virtual Desktop",
            description: "Secure remote work solutions with Azure Virtual Desktop for your workforce.",
        },
        {
            icon: Command,
            title: "DevOps & Integration",
            description: "Streamline your development lifecycle with Azure DevOps and GitHub integration.",
        },
    ];

    return (
        <div className="min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-hero text-primary-foreground">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Microsoft Azure Services</h1>
                        <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                            Unlock the full potential of your business with Microsoft Azure's enterprise-grade cloud computing platform.
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-24 bg-gradient-subtle">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Azure?</h2>
                            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                                As an official Microsoft CSP Partner, ETRUS Tech provides expert guidance and management for all your Azure needs. Whether you're looking to migrate legacy workloads or build modern, cloud-native applications, Azure provides the tools and scale you need.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                                    </div>
                                    <span className="text-sm md:text-base">95% of Fortune 500 companies trust Azure</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                                    </div>
                                    <span className="text-sm md:text-base">Most comprehensive compliance coverage</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-5 w-5 md:h-6 md:w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                                    </div>
                                    <span className="text-sm md:text-base">Seamless integration with Microsoft 365</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gradient-card p-6 md:p-8 rounded-2xl shadow-xl border">
                            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Azure Migration Assessment</h3>
                            <p className="mb-6 text-sm md:text-base text-muted-foreground">Get a clear roadmap for your cloud migration with our comprehensive Azure assessment program.</p>
                            <Button asChild className="w-full" size="lg">
                                <Link to="/contact">Get Started</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Offerings Grid */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Experience Azure Excellence</h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                            We provide end-to-end services across the entire Azure ecosystem.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                        {azureOfferings.map((offering, index) => (
                            <ServiceCard key={index} {...offering} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AzureServices;
