import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/3c5b79e2-f293-41c2-8781-84b778710c31.png" 
                alt="Keeps" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Vessel Social Ltd</p>
              <p>2 Hilliards Court, Chester Business Park</p>
              <p>Chester, Cheshire, CH4 9QP</p>
              <p>United Kingdom</p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about-us" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/for-organisations" className="text-muted-foreground hover:text-foreground transition-colors">
                  For Organisations
                </Link>
              </li>
              <li>
                <Link to="/support-hub" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/investor-relations" className="text-muted-foreground hover:text-foreground transition-colors">
                  Investor Relations
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/terms-and-conditions" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/risk-disclosure" className="text-muted-foreground hover:text-foreground transition-colors">
                  Risk Disclosure
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Platform */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/support-hub" className="text-muted-foreground hover:text-foreground transition-colors">
                  Help Centre
                </Link>
              </li>
              <li>
                <Link to="/knowledge-base" className="text-muted-foreground hover:text-foreground transition-colors">
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link to="/regulatory-compliance" className="text-muted-foreground hover:text-foreground transition-colors">
                  Regulatory Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-xs text-muted-foreground">
              <p>© {currentYear} Vessel Social Ltd. All rights reserved.</p>
              <p className="mt-1">
                Keeps is a registered trademark of Vessel Social Ltd, a company incorporated in England and Wales with company number 14833447.
              </p>
            </div>
            <div className="text-xs text-muted-foreground">
              <p>Registered office: 2 Hilliards Court, Chester Business Park, Chester, Cheshire, CH4 9QP.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}