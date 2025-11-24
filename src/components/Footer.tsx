import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">Anantapur Legal Services</div>
            <p className="text-slate-400 text-sm mb-4">
              Trusted legal services for NRIs worldwide. Specializing in Andhra Pradesh law with over 20 years of experience.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Linkedin className="size-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <Youtube className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white">About the Lawyer</Link>
              </li>
              <li>
                <Link to="/services/property" className="text-slate-400 hover:text-white">Property Services</Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-slate-400 hover:text-white">Case Studies</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="mb-4">NRI Services</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/property" className="text-slate-400 hover:text-white">Land Verification</Link>
              </li>
              <li>
                <Link to="/services/property" className="text-slate-400 hover:text-white">Property Disputes</Link>
              </li>
              <li>
                <Link to="/services/family" className="text-slate-400 hover:text-white">Divorce & Family</Link>
              </li>
              <li>
                <Link to="/services/documentation" className="text-slate-400 hover:text-white">Power of Attorney</Link>
              </li>
              <li>
                <Link to="/services/civil-criminal" className="text-slate-400 hover:text-white">Criminal Complaints</Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-400 hover:text-white">Resources & FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-4">Contact Us</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-1 flex-shrink-0" />
                <span className="text-slate-400">
                  123 Main Road, Anantapur<br />
                  Andhra Pradesh 515001
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-slate-400 hover:text-white">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 flex-shrink-0" />
                <a href="mailto:lawyer@anantapurlegal.com" className="text-slate-400 hover:text-white">
                  lawyer@anantapurlegal.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <div>
              © {new Date().getFullYear()} Anantapur Legal Services. All rights reserved.
            </div>
            <div className="flex gap-4">
              <Link to="/legal-disclaimer" className="hover:text-white">Legal Disclaimer</Link>
              <Link to="/terms" className="hover:text-white">Terms of Use</Link>
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
