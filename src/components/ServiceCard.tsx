import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
      <CardContent className="p-6">
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-light group-hover:bg-primary transition-colors duration-300">
          <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
