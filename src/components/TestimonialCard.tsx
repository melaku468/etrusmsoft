import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const TestimonialCard = ({ quote, author, position, company }: TestimonialCardProps) => {
  return (
    <Card className="bg-gradient-card hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6">
        <Quote className="h-8 w-8 text-primary mb-4" />
        <p className="text-muted-foreground mb-6 italic leading-relaxed">"{quote}"</p>
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">{position}</p>
          <p className="text-sm text-primary">{company}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
