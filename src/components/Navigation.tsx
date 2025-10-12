import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    path: "/",
    label: "Home"
  }, {
    path: "/about",
    label: "About Us"
  }, {
    path: "/services",
    label: "Services"
  }, {
    path: "/case-studies",
    label: "Case Studies"
  }, {
    path: "/contact",
    label: "Contact"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? "text-primary" : "text-primary-foreground"}`}>
              ETRUS <span className={isScrolled ? "text-foreground" : "text-primary-foreground/90"}>Tech</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-300 ${
                  isActive(link.path)
                    ? isScrolled ? "text-primary" : "text-primary-foreground border-b-2 border-primary-foreground"
                    : isScrolled ? "text-foreground hover:text-primary" : "text-primary-foreground hover:text-primary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="default" variant={isScrolled ? "default" : "hero"}>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className={`h-6 w-6 transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} /> : <Menu className={`h-6 w-6 transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden py-4 bg-background/95 backdrop-blur-md shadow-lg rounded-lg mt-2">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={`text-sm font-medium transition-colors duration-300 py-2 ${isActive(link.path) ? "text-primary" : "text-foreground hover:text-primary"}`}>
                  {link.label}
                </Link>)}
              <Button asChild size="default" className="w-full">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;