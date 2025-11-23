import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  Clock,
  MapPin,
  Globe,
  MessageSquare,
  Shield,
  Users,
  Award,
  CheckCircle,
  Star,
  TrendingUp,
} from 'lucide-react';

export function WhyChooseUsPage() {
  const reasons = [
    {
      icon: Clock,
      title: '20+ Years Experience',
      description: 'Over two decades of legal practice in Andhra Pradesh courts with deep expertise in local legal systems and procedures.',
    },
    {
      icon: MapPin,
      title: 'AP Laws Specialist',
      description: 'In-depth knowledge of AP land laws, Adangal system, ROR-1B, registration processes, and local revenue office procedures.',
    },
    {
      icon: Globe,
      title: 'NRI-Focused Practice',
      description: '15+ years specializing in NRI legal matters with 500+ international clients across USA, UK, Australia, Middle East, and more.',
    },
    {
      icon: MessageSquare,
      title: 'Transparent Communication',
      description: 'Regular updates via WhatsApp, email, and video calls. Available across all time zones with English communication.',
    },
    {
      icon: Shield,
      title: 'Complete Remote Handling',
      description: 'Entire case managed without requiring your physical presence. We handle court appearances, documentation, and verification.',
    },
    {
      icon: Users,
      title: 'On-Ground Team',
      description: 'Local team in Anantapur for property inspections, document collection, and coordination with government offices.',
    },
  ];

  const stats = [
    { number: '20+', label: 'Years Experience' },
    { number: '500+', label: 'NRI Clients Served' },
    { number: '85%', label: 'Success Rate' },
    { number: '200+', label: 'Property Verifications' },
  ];

  const testimonials = [
    {
      name: 'Vijay Reddy',
      location: 'USA (Texas)',
      text: 'Resolved a 5-year property dispute with siblings through family settlement. The lawyer handled everything remotely and kept me updated throughout. Highly recommend for NRIs.',
      rating: 5,
    },
    {
      name: 'Lakshmi Patel',
      location: 'UK (London)',
      text: 'Excellent property verification service before purchase. Detected title issues that would have cost me lakhs. Professional, thorough, and transparent.',
      rating: 5,
    },
    {
      name: 'Srinivas Kumar',
      location: 'Australia (Melbourne)',
      text: 'Filed criminal complaint for property encroachment while I was abroad. Police complaint, FIR, and civil suit all handled perfectly. Property recovered successfully.',
      rating: 5,
    },
    {
      name: 'Anjali Shah',
      location: 'UAE (Dubai)',
      text: 'Got my divorce case handled without traveling to India. All court dates managed, regular WhatsApp updates, and case completed in 8 months. Very grateful.',
      rating: 5,
    },
  ];

  const differentiators = [
    {
      title: 'Local Expertise + Global Reach',
      description: 'Deep understanding of Anantapur district procedures combined with experience serving international NRI clients',
    },
    {
      title: 'Photographic Evidence',
      description: 'Provide photo/video evidence of on-ground verification, property inspections, and document submissions',
    },
    {
      title: 'Fixed Fee Packages',
      description: 'Transparent pricing with fixed fees for common services like property verification and POA registration',
    },
    {
      title: 'Time-Zone Friendly',
      description: 'Consultation slots available for US, UK, Australia, and Middle East time zones',
    },
    {
      title: 'Court Representation',
      description: 'Authorized Vakalatnama representation without requiring your presence in India',
    },
    {
      title: 'Document Scanning',
      description: 'All documents scanned and shared digitally for your records and review',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-green-500 text-white">Trusted by NRIs Worldwide</Badge>
            <h1 className="text-white mb-4">Why NRIs Choose Our Firm</h1>
            <p className="text-xl text-blue-100">
              Specialized expertise in AP law combined with remote-friendly service delivery for NRIs across the globe
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <div className="text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="size-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="size-6" />
                      </div>
                      <div className="text-slate-900 mb-2">{reason.title}</div>
                      <p className="text-sm text-slate-600">{reason.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-slate-900 mb-8 text-center">What Makes Us Different</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {differentiators.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-blue-600">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-slate-900 mb-1">{item.title}</div>
                        <p className="text-sm text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-slate-900 mb-8 text-center">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-8">
                <h3 className="text-slate-900 mb-4 text-center">Our Commitment to NRI Clients</h3>
                <div className="space-y-3 text-slate-700">
                  <p>
                    We understand the unique challenges NRIs face when dealing with legal matters in India - time zone differences, inability to be physically present, language barriers, and concerns about transparency and trustworthiness.
                  </p>
                  <p>
                    Our practice has been specifically designed to address these challenges. We provide:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Complete remote case handling without requiring your presence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Regular updates in your preferred time zone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Transparent communication with no hidden costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Photographic evidence of all on-ground work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Expertise in local AP procedures combined with international communication standards</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">Experience the Difference</h2>
            <p className="text-blue-100 mb-8">
              Join hundreds of satisfied NRI clients who trust us with their legal matters in Andhra Pradesh
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Link to="/contact">Book Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
