import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudyCardProps {
  title: string;
  description: string;
  industry: string;
  result: string;
}

const CaseStudyCard = ({ title, description, industry, result }: CaseStudyCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-card">
      <CardContent className="p-6">
        <Badge className="mb-4 bg-primary-light text-primary hover:bg-primary-light">{industry}</Badge>
        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <div className="mb-4 p-4 bg-primary-light rounded-lg">
          <p className="text-sm font-semibold text-primary">Result</p>
          <p className="text-foreground">{result}</p>
        </div>
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all"
        >
          Read Case Study
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default CaseStudyCard;
