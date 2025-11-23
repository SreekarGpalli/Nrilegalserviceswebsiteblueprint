import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  Home as HomeIcon,
  Scale,
  FileText,
  Users,
  Gavel,
  Building2,
  CheckCircle,
  Clock,
  Shield,
  MessageSquare,
  ArrowRight,
  Star,
  Globe,
  MapPin,
} from 'lucide-react';

export function HomePage() {
  const services = [
    {
      icon: Building2,
      title: 'Property & Land Services',
      description: 'Title verification, encumbrance checks, property disputes, partition suits, and land management for NRIs',
      link: '/services/property',
      popular: true,
    },
    {
      icon: Users,
      title: 'Family & Personal Matters',
      description: 'Marriage registration, divorce, will drafting, succession planning, and estate management',
      link: '/services/family',
    },
    {
      icon: Gavel,
      title: 'Civil & Criminal Matters',
      description: 'Criminal complaints, FIR filing, cheating cases, property fraud, and civil disputes',
      link: '/services/civil-criminal',
    },
    {
      icon: Scale,
      title: 'Financial & Banking',
      description: 'Bank disputes, NPA issues, unauthorized transactions, and account-related problems',
      link: '/services/financial',
    },
    {
      icon: FileText,
      title: 'Documentation & Representation',
      description: 'Power of Attorney, legal notices, court representation, and Vakalatnama services',
      link: '/services/documentation',
    },
  ];

  const problems = [
    'Property disputes with family members',
    'Land verification before purchase',
    'Encroachment on ancestral property',
    'Divorce and family court matters',
    'Criminal complaints and FIR filing',
    'Power of Attorney documentation',
  ];

  const whyChoose = [
    {
      icon: Clock,
      title: '20+ Years Experience',
      description: 'Extensive experience in Andhra Pradesh courts and legal system',
    },
    {
      icon: MapPin,
      title: 'AP Laws Specialist',
      description: 'Deep expertise in local land laws, Adangal, ROR-1B, and registration processes',
    },
    {
      icon: Globe,
      title: 'Remote-Friendly',
      description: 'Complete case handling without requiring NRI physical presence',
    },
    {
      icon: MessageSquare,
      title: 'Transparent Communication',
      description: 'Regular updates via WhatsApp, email, and video calls across all time zones',
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'Book a consultation via phone, WhatsApp, or video call at your convenience',
    },
    {
      step: '2',
      title: 'Document Review',
      description: 'Send documents digitally - we review and provide preliminary assessment',
    },
    {
      step: '3',
      title: 'Local Verification',
      description: 'Our team conducts on-ground verification and investigation in Anantapur',
    },
    {
      step: '4',
      title: 'Legal Strategy',
      description: 'Develop clear action plan with timeline and transparent cost estimate',
    },
    {
      step: '5',
      title: 'Case Execution',
      description: 'File cases, represent in court, handle all proceedings on your behalf',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'USA (California)',
      text: 'Helped me resolve a complex property dispute with my siblings. The entire process was handled remotely and I received regular updates. Highly professional.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      location: 'Australia (Sydney)',
      text: 'Excellent service for land verification before purchase. Saved me from a fraudulent deal. Very transparent and responsive to all my queries.',
      rating: 5,
    },
    {
      name: 'Mohammed Ahmed',
      location: 'UAE (Dubai)',
      text: 'Got my POA registered and filed a criminal complaint for property encroachment. The lawyer handled everything professionally despite the time difference.',
      rating: 5,
    },
  ];

  const caseHighlights = [
    {
      title: 'Property Dispute Resolution',
      problem: 'NRI client from USA facing ancestral property partition dispute with 3 siblings',
      outcome: 'Successfully settled through family agreement, saving years of litigation',
      timeline: '6 months',
    },
    {
      title: 'Land Fraud Prevention',
      problem: 'Australia-based NRI about to purchase land with forged documents',
      outcome: 'Detected fraud through title verification, prevented ₹50 lakh loss',
      timeline: '2 weeks',
    },
    {
      title: 'Criminal Complaint Success',
      problem: 'UK-based NRI facing illegal occupation of ancestral home',
      outcome: 'FIR filed, criminal case prosecuted, property recovered',
      timeline: '8 months',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-500 text-white">Trusted by NRIs Worldwide</Badge>
            <h1 className="text-slate-50 mb-6">
              Trusted NRI Legal Services from Anantapur, Andhra Pradesh
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Reliable, transparent, and remote-friendly legal support for NRIs worldwide. Specializing in property disputes, family matters, and court representation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Link to="/contact">Book Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="https://wa.me/919876543210">WhatsApp Chat</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Send Documents</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="size-5 text-green-400" />
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="size-5 text-green-400" />
                <span>No Physical Presence Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="size-5 text-green-400" />
                <span>Transparent Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top NRI Problems */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-slate-900 mb-4">Top NRI Legal Problems We Solve</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Helping NRIs navigate the complex legal landscape of Andhra Pradesh from anywhere in the world
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {problems.map((problem, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="size-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">{problem}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-slate-900 mb-4">NRI Legal Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive legal solutions tailored specifically for Non-Resident Indians
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="size-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                        <Icon className="size-6" />
                      </div>
                      {service.popular && (
                        <Badge variant="secondary">Most Requested</Badge>
                      )}
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0">
                      <Link to={service.link}>
                        Learn More <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-slate-900 mb-4">Why NRIs Choose Our Firm</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Trusted expertise combined with modern, remote-friendly service delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="size-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                      <Icon className="size-6" />
                    </div>
                    <div className="text-slate-900 mb-2">{item.title}</div>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-slate-900 mb-4">How It Works for NRIs</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Simple, transparent process designed for remote collaboration
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {howItWorks.map((step, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="size-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        <span>{step.step}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-slate-900 mb-2">{step.title}</div>
                        <p className="text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-slate-900 mb-4">What Our NRI Clients Say</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Trusted by hundreds of NRIs across USA, UK, Australia, Middle East, and more
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4">{testimonial.text}</p>
                  <div>
                    <div className="text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-slate-900 mb-4">Recent Success Stories</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Real results for real NRI legal challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {caseHighlights.map((caseStudy, index) => (
              <Card key={index} className="border-t-4 border-t-green-600">
                <CardHeader>
                  <CardTitle className="text-lg">{caseStudy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-slate-600 mb-1">Problem</div>
                      <p className="text-slate-700">{caseStudy.problem}</p>
                    </div>
                    <div>
                      <div className="text-slate-600 mb-1">Outcome</div>
                      <p className="text-slate-700">{caseStudy.outcome}</p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="size-4" />
                      <span>Resolved in {caseStudy.timeline}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/case-studies">
                View All Case Studies <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">Ready to Resolve Your Legal Matter?</h2>
            <p className="text-blue-100 mb-8">
              Book a free initial consultation with our NRI legal specialist. Available across all time zones.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="tel:+919876543210">Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
