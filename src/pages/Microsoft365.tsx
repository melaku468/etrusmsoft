import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Mail, Shield, Smartphone, FileText, CheckCircle2 } from "lucide-react";

const Microsoft365 = () => {
    const components = [
        {
            icon: Users,
            title: "Microsoft Teams",
            description: "Enable seamless collaboration with chat, meetings, and file sharing in one place.",
        },
        {
            icon: Mail,
            title: "Outlook & Exchange",
            description: "Professional business email and calendaring for your organization.",
        },
        {
            icon: FileText,
            title: "Office Productivity",
            description: "Always up-to-date versions of Word, Excel, PowerPoint, and more.",
        },
        {
            icon: Shield,
            title: "Security & Compliance",
            description: "Protect your data with advanced threat protection and information governance.",
        },
        {
            icon: Smartphone,
            title: "Mobile Productivity",
            description: "Empower your workforce with productivity tools on any device, anywhere.",
        },
        {
            icon: CheckCircle2,
            title: "SharePoint & OneDrive",
            description: "Secure file storage and internal portals for better document management.",
        },
    ];

    return (
        <div className="min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-hero text-primary-foreground">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Microsoft 365 Solutions</h1>
                        <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                            Empower your team with the world's leading productivity and collaboration suite, professionally managed by ETRUS Tech.
                        </p>
                    </div>
                </div>
            </section>

            {/* Feature Section */}
            <section className="py-24 bg-gradient-subtle">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">The Modern Workplace</h2>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            Microsoft 365 is more than just Office apps. It's a complete, intelligent solution that includes everything from security to device management. ETRUS Tech ensures you get the most out of your subscription.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                        {components.map((item, index) => (
                            <ServiceCard key={index} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Migration Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center">M365 Migration Experts</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="flex flex-col items-center">
                                <div className="h-12 w-12 text-primary mb-4"><CheckCircle2 className="h-full w-full" /></div>
                                <h4 className="font-bold mb-2 text-lg">Email Migration</h4>
                                <p className="text-sm text-muted-foreground">Safe and secure transfer of all your mailbox data from legacy systems to Exchange Online.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="h-12 w-12 text-primary mb-4"><CheckCircle2 className="h-full w-full" /></div>
                                <h4 className="font-bold mb-2 text-lg">SharePoint Setup</h4>
                                <p className="text-sm text-muted-foreground">Structure your company's data and build internal wikis for better knowledge sharing.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="h-12 w-12 text-primary mb-4"><CheckCircle2 className="h-full w-full" /></div>
                                <h4 className="font-bold mb-2 text-lg">Teams Integration</h4>
                                <p className="text-sm text-muted-foreground">Configure Teams for voice, meetings, and application integration to boost productivity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Microsoft365;
