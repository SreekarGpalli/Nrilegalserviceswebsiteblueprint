import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Clock } from 'lucide-react';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      {/* Top Info Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-blue-300">
                <Phone className="size-4" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:lawyer@anantapurlegal.com" className="flex items-center gap-2 hover:text-blue-300">
                <Mail className="size-4" />
                <span>lawyer@anantapurlegal.com</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-4" />
              <span>Available 24/7 for NRI Clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="size-12 bg-blue-900 text-white flex items-center justify-center rounded">
              <span>AL</span>
            </div>
            <div>
              <div className="text-slate-900">Anantapur Legal Services</div>
              <div className="text-sm text-slate-600">NRI Legal Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className={`hover:text-blue-600 ${isActive('/') ? 'text-blue-600' : 'text-slate-700'}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`hover:text-blue-600 ${isActive('/about') ? 'text-blue-600' : 'text-slate-700'}`}
            >
              About
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-700">NRI Legal Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services/property"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100"
                          >
                            <div className="text-slate-900">Property & Land Services</div>
                            <p className="text-sm text-slate-600">
                              Verification, disputes, partition, management
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services/family"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100"
                          >
                            <div className="text-slate-900">Family & Personal Matters</div>
                            <p className="text-sm text-slate-600">
                              Marriage, divorce, will, succession
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services/civil-criminal"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100"
                          >
                            <div className="text-slate-900">Civil & Criminal Matters</div>
                            <p className="text-sm text-slate-600">
                              Criminal complaints, civil disputes
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services/financial"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100"
                          >
                            <div className="text-slate-900">Financial & Banking</div>
                            <p className="text-sm text-slate-600">
                              Bank disputes, documentation issues
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services/documentation"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100"
                          >
                            <div className="text-slate-900">Documentation & Representation</div>
                            <p className="text-sm text-slate-600">
                              POA, legal notices, court representation
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/why-choose-us"
              className={`hover:text-blue-600 ${isActive('/why-choose-us') ? 'text-blue-600' : 'text-slate-700'}`}
            >
              Why Choose Us
            </Link>
            <Link
              to="/case-studies"
              className={`hover:text-blue-600 ${isActive('/case-studies') ? 'text-blue-600' : 'text-slate-700'}`}
            >
              Case Studies
            </Link>
            <Link
              to="/resources"
              className={`hover:text-blue-600 ${isActive('/resources') ? 'text-blue-600' : 'text-slate-700'}`}
            >
              Resources
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button asChild variant="outline">
              <Link to="/contact">Contact</Link>
            </Button>
            <Button asChild>
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-slate-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-slate-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <div>
                <div className="text-slate-900 mb-2">NRI Legal Services</div>
                <div className="pl-4 flex flex-col gap-2">
                  <Link to="/services/property" className="text-slate-600 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                    Property & Land
                  </Link>
                  <Link to="/services/family" className="text-slate-600 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                    Family & Personal
                  </Link>
                  <Link to="/services/civil-criminal" className="text-slate-600 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                    Civil & Criminal
                  </Link>
                  <Link to="/services/financial" className="text-slate-600 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                    Financial & Banking
                  </Link>
                  <Link to="/services/documentation" className="text-slate-600 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                    Documentation
                  </Link>
                </div>
              </div>
              <Link to="/why-choose-us" className="text-slate-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                Why Choose Us
              </Link>
              <Link to="/case-studies" className="text-slate-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                Case Studies
              </Link>
              <Link to="/resources" className="text-slate-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                Resources
              </Link>
              <Link to="/contact" className="text-slate-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <Button asChild className="mt-2">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Book Consultation</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
