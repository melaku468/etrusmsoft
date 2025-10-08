import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/CaseStudyCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Enterprise Cloud Migration",
      description: "A leading financial services company needed to modernize their infrastructure. We migrated 500+ workloads to Azure, implementing a robust cloud architecture with enhanced security and compliance.",
      industry: "Financial Services",
      result: "60% cost reduction, 99.9% uptime, improved security posture, enhanced disaster recovery capabilities",
    },
    {
      title: "Digital Workplace Transformation",
      description: "Global retail chain required a unified communication platform. We deployed Microsoft 365 and Teams across 200+ locations, enabling seamless collaboration for 5,000+ employees.",
      industry: "Retail",
      result: "40% productivity increase, 50% reduction in IT support tickets, improved employee satisfaction",
    },
    {
      title: "Healthcare Data Analytics Platform",
      description: "Major healthcare provider needed to consolidate patient data from multiple systems. We built a comprehensive analytics platform using Azure Synapse and Power BI.",
      industry: "Healthcare",
      result: "Real-time patient insights, 70% faster reporting, improved patient care outcomes",
    },
    {
      title: "Manufacturing ERP Implementation",
      description: "Mid-sized manufacturing company sought to streamline operations. We implemented Dynamics 365 Finance & Operations with custom integrations to their production systems.",
      industry: "Manufacturing",
      result: "30% reduction in operational costs, improved inventory management, enhanced supply chain visibility",
    },
    {
      title: "Education Platform Modernization",
      description: "Large university needed to modernize their learning management system. We deployed Microsoft 365 Education with custom Teams integrations for 20,000+ students.",
      industry: "Education",
      result: "Enhanced remote learning capabilities, 95% user adoption rate, improved student engagement",
    },
    {
      title: "Insurance Claims Processing Automation",
      description: "Insurance provider wanted to automate manual claims processing. We built intelligent automation using Power Platform and Azure AI services.",
      industry: "Insurance",
      result: "80% faster claims processing, 45% cost reduction, improved customer satisfaction scores",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Real results from real partnerships. See how we've helped organizations transform with Microsoft technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
        </div>
      </section>

      {/* Results Highlight */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-foreground">Our Impact Across Industries</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-6 bg-gradient-card rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="p-6 bg-gradient-card rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="p-6 bg-gradient-card rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary mb-2">$50M+</div>
                <div className="text-muted-foreground">Cost Savings</div>
              </div>
              <div className="p-6 bg-gradient-card rounded-lg shadow-md">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Success Story Starts Here
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can help you achieve similar results.
          </p>
          <Button asChild size="xl" variant="hero">
            <Link to="/contact">Start Your Transformation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
