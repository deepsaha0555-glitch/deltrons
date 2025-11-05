import { Link } from "react-router-dom";
import logo from "@assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <a className="flex items-center gap-3 hover-elevate active-elevate-2 px-3 py-2 rounded-md -ml-3" data-testid="link-home">
              <img src={logo} alt="Deltrons" className="w-10 h-10 rounded-full" />
              <span className="text-xl font-bold text-foreground">DELTRONS</span>
            </a>
          </Link>
          
          <div className="flex items-center gap-6">
            <a href="#pricing" className="text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md text-sm font-medium" data-testid="link-pricing">
              Pricing
            </a>
            <Link to="/login">
              <a className="text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md text-sm font-medium" data-testid="link-login">
                Login / Signup
              </a>
            </Link>
            <a href="#terms" className="text-muted-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md text-sm" data-testid="link-terms">
              Terms of Service
            </a>
            <a href="#privacy" className="text-muted-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md text-sm" data-testid="link-privacy">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
