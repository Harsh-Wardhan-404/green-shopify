
import React from 'react';
import { 
  Leaf, 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube,
  Mail,
  Phone,
  MapPin 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About & Sustainability */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Leaf className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-lg font-semibold">shop<span className="text-green-600">.ai</span></span>
            </div>
            <p className="text-sm text-muted-foreground">
              Committed to sustainable e-commerce. Our platform is optimized to reduce carbon footprint while providing exceptional shopping experiences.
            </p>
            <div className="flex items-center space-x-1.5 pt-2">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600 font-medium">Carbon-neutral hosting</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Shop</h3>
            <ul className="space-y-2">
              {["New Arrivals", "Best Sellers", "Eco-friendly", "Deals", "Gift Cards"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Information</h3>
            <ul className="space-y-2">
              {["About Us", "Sustainability", "Privacy Policy", "Terms of Service", "Contact Us"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-4 h-4 text-green-600 mt-0.5 mr-2" />
                <span className="text-sm text-muted-foreground">help@shop-ai.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 text-green-600 mt-0.5 mr-2" />
                <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-green-600 mt-0.5 mr-2" />
                <span className="text-sm text-muted-foreground">
                  Green Tech Campus<br />
                  123 Eco Street<br />
                  San Francisco, CA 94158
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary hover:bg-green-50 transition-colors"
                >
                  <Icon className="w-4 h-4 text-foreground hover:text-green-600 transition-colors" />
                </a>
              ))}
            </div>
            <div className="text-xs text-muted-foreground text-center md:text-right">
              <p>© {new Date().getFullYear()} shop.ai. All rights reserved.</p>
              <p className="mt-1">Powered by green energy. CO2 offset with each purchase.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
