import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Mail, Bookmark } from 'lucide-react';

const Footer = () => {
  const productLinks = [
    { name: 'T-Shirts', path: '/products/tshirts' },
    { name: 'Compressions', path: '/products/compressions' },
    { name: 'Vests', path: '/products/vests' },
    { name: 'Bottoms', path: '/products/bottoms' },
    { name: 'Accessories', path: '/products/accessories' },
  ];

  const policyLinks = [
    { name: 'Track Your Order', path: '/support/track-order' },
    { name: 'Return & Exchange', path: '/policies/return' },
    { name: 'Refund Policy', path: '/policies/refund' },
    { name: 'Shipping Policy', path: '/policies/shipping' },
    { name: 'Privacy Policy', path: '/policies/privacy' },
    { name: 'Terms of Service', path: '/policies/terms' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/nxtrep' },
    { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/1234567890' },
    { name: 'Email', icon: Mail, url: 'mailto:nxtrep@example.com' },
    { name: 'Pinterest', icon: Bookmark, url: 'https://pinterest.com/nxtrep' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Us */}
          <div>
            <h3 className="font-athletic text-xl font-bold mb-4 tracking-wider">
              About NxtRep
            </h3>
            <p className="font-premium text-primary-foreground/80 leading-relaxed mb-6">
              NxtRep is more than athletic wear - we're a movement. Engineered for athletes who refuse to settle, our premium sportswear combines cutting-edge technology with uncompromising style.
            </p>
            <p className="font-premium text-primary-foreground/80 leading-relaxed">
              Every piece is designed to help you push boundaries, break limits, and unlock your next rep.
            </p>
          </div>

          {/* New Arrivals */}
          <div>
            <h3 className="font-athletic text-xl font-bold mb-4 tracking-wider">
              New Arrivals
            </h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-premium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Support */}
          <div>
            <h3 className="font-athletic text-xl font-bold mb-4 tracking-wider">
              Policies & Support
            </h3>
            <ul className="space-y-2">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-premium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="font-premium text-primary-foreground/80">
                Connect with us:
              </span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full transition-colors group"
                  >
                    <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="font-premium text-primary-foreground/60 text-sm">
              © 2024 NxtRep. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;