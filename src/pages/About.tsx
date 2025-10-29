import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Target, Users2, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const About = () => {
  const values = [{
    icon: Target,
    title: "Mission-Driven",
    description: "Empowering organizations to achieve more through innovative Microsoft solutions."
  }, {
    icon: Users2,
    title: "Client-Focused",
    description: "Your success is our priority. We build lasting partnerships based on trust and results."
  }, {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Staying ahead of technology trends to deliver cutting-edge solutions."
  }, {
    icon: Award,
    title: "Excellence",
    description: "Committed to the highest standards of quality and professional service delivery."
  }];
  const certifications = ["Microsoft Gold Partner", "Azure Solutions Architect Expert", "Microsoft 365 Certified", "Dynamics 365 Certified Professional", "Azure Security Engineer Associate", "Power Platform Developer Associate"];
  return <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About ETRUS Tech</h1>
            <p className="text-xl opacity-90 leading-relaxed">   Your trusted Microsoft Partner delivering innovative solutions</p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-foreground">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                ETRUS Technology P.L.C is a leading Ethiopian technology company committed to driving digital transformation through innovative and reliable IT solutions. We specialize in website development, mobile application design, and custom software development that help organizations operate efficiently and scale effectively.
              </p>
              <p>
                As an official Microsoft Cloud Solution Provider (CSP) Partner, ETRUS Technology is authorized to offer, manage, and support a wide range of Microsoft cloud products and services, including Microsoft 365, Azure, and Dynamics 365. This partnership enables us to deliver integrated cloud-based solutions with flexible licensing, direct technical support, and tailored deployment services—helping our clients achieve seamless digital experiences and optimized performance across their operations.
              </p>
              <p>
                At ETRUS, we believe that technology is the foundation of progress. Our multidisciplinary team of developers, engineers, and digital experts work collaboratively to design intelligent, secure, and scalable systems that empower businesses to innovate and grow.
              </p>
              <p>
                We are dedicated to maintaining the highest standards of quality, professionalism, and customer satisfaction. Every solution we deliver is built with precision, guided by our mission to simplify technology and make it a powerful tool for success.
              </p>
              <p className="font-semibold text-foreground">
                ETRUS Technology P.L.C — Empowering Innovation. Enabling Growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => <Card key={index} className="bg-gradient-card hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Microsoft Partnership */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-foreground text-center">Microsoft Partnership Excellence</h2>
            <Card className="bg-gradient-card mb-8">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  As a Microsoft Gold Partner, ETRUS Tech has demonstrated the highest level of competency and expertise in Microsoft technologies. This partnership gives us direct access to Microsoft resources, early product releases, and specialized training that we leverage to deliver exceptional value to our clients.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our team holds numerous Microsoft certifications across Azure, Microsoft 365, Dynamics 365, and Power Platform - ensuring you always work with qualified professionals who understand both the technology and your business needs.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => <div key={index} className="bg-primary-light text-primary p-4 rounded-lg text-center font-medium hover:shadow-md transition-all">
                  {cert}
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Certified Experts</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;