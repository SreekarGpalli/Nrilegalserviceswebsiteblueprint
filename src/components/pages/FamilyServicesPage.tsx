import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Heart, FileHeart, Scale, FileText, CheckCircle, AlertTriangle, Clock } from 'lucide-react';

export function FamilyServicesPage() {
  const services = [
    {
      icon: Heart,
      title: 'Marriage Registration',
      items: [
        'NRI marriage registration in AP',
        'Documentation support',
        'Representation when NRI cannot appear',
        'Marriage certificate issuance',
      ],
    },
    {
      icon: Scale,
      title: 'Divorce & Matrimonial Issues',
      items: [
        'Mutual consent divorce',
        'Contested divorce proceedings',
        'Dowry harassment cases (498A)',
        'Child custody matters',
        'Maintenance and alimony claims',
        'Domestic violence protection',
      ],
    },
    {
      icon: FileHeart,
      title: 'Will, Estate & Succession',
      items: [
        'Drafting Indian will',
        'NRI-specific will formats',
        'Probate filing',
        'Succession certificate',
        'Legal heir certificates',
        'Estate distribution',
      ],
    },
  ];

  const nriScenarios = [
    {
      scenario: 'Divorce While Living Abroad',
      problem: 'Cannot travel to India frequently for court hearings',
      solution: 'Complete representation through Vakalatnama, handling all court appearances',
    },
    {
      scenario: 'Will Preparation for AP Property',
      problem: 'Need legally valid will covering Indian assets',
      solution: 'Draft comprehensive will compliant with Indian laws, arrange registration',
    },
    {
      scenario: 'Succession After Parent\'s Death',
      problem: 'Siblings disputing inheritance, need legal heir certificate',
      solution: 'File succession certificate, mediate family settlement, obtain legal documents',
    },
  ];

  const documents = {
    divorce: [
      'Marriage certificate',
      'Passport copies',
      'Address proof (India & abroad)',
      'Marriage photos',
      'Evidence of separation',
      'Income documents (for maintenance)',
    ],
    will: [
      'Identity proof (Passport, Aadhaar)',
      'Property documents',
      'List of assets',
      'Beneficiary details',
      'Two witness details',
    ],
    succession: [
      'Death certificate',
      'Family tree details',
      'Property ownership documents',
      'Claimant identity proofs',
      'Previous will (if any)',
    ],
  };

  const painPoints = [
    {
      issue: 'Long Court Proceedings',
      solution: 'We handle all court dates on your behalf, update you regularly',
    },
    {
      issue: 'Family Pressure & Disputes',
      solution: 'Professional mediation and legal protection of your rights',
    },
    {
      issue: 'Complex Documentation',
      solution: 'We draft, file, and manage all legal paperwork',
    },
    {
      issue: 'Time Zone Challenges',
      solution: 'Flexible consultation hours matching your location',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-pink-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-4">Family & Personal Legal Services</h1>
            <p className="text-xl text-pink-100 mb-8">
              Sensitive, professional handling of marriage, divorce, succession, and family matters for NRIs
            </p>
            <Button asChild size="lg" className="bg-white text-pink-900 hover:bg-pink-50">
              <Link to="/contact">Confidential Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-slate-900 mb-8 text-center">Our Family Law Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index}>
                    <CardHeader>
                      <div className="size-12 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center mb-3">
                        <Icon className="size-6" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-slate-900 mb-8 text-center">Common NRI Family Law Situations</h2>
            <div className="space-y-4">
              {nriScenarios.map((scenario, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-slate-900">{scenario.scenario}</div>
                      <div>
                        <div className="flex items-center gap-2 text-red-600 mb-1 text-sm">
                          <AlertTriangle className="size-4" />
                          <span>Challenge</span>
                        </div>
                        <p className="text-sm text-slate-700">{scenario.problem}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-green-600 mb-1 text-sm">
                          <CheckCircle className="size-4" />
                          <span>Our Solution</span>
                        </div>
                        <p className="text-sm text-slate-700">{scenario.solution}</p>
                      </div>
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
          <div className="max-w-5xl mx-auto">
            <h2 className="text-slate-900 mb-8 text-center">Documents Required</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">For Divorce Cases</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {documents.divorce.map((doc, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <FileText className="size-4 text-pink-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">For Will Drafting</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {documents.will.map((doc, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <FileText className="size-4 text-pink-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">For Succession</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {documents.succession.map((doc, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <FileText className="size-4 text-pink-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-slate-900 mb-8 text-center">How We Address Your Concerns</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {painPoints.map((point, index) => (
                <Card key={index} className="border-l-4 border-l-pink-600">
                  <CardContent className="pt-6">
                    <div className="text-slate-900 mb-2">{point.issue}</div>
                    <p className="text-sm text-slate-700">{point.solution}</p>
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
            <Card className="bg-pink-50 border-pink-200">
              <CardContent className="pt-8">
                <h3 className="text-slate-900 mb-4 text-center">Confidentiality & Sensitivity</h3>
                <p className="text-slate-700 text-center mb-4">
                  We understand family matters are deeply personal. All consultations and case details are handled with complete confidentiality. Our empathetic approach ensures you feel supported throughout the legal process.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-slate-900 mb-1">100% Confidential</div>
                    <p className="text-sm text-slate-600">All case details protected</p>
                  </div>
                  <div className="text-center">
                    <div className="text-slate-900 mb-1">Empathetic Support</div>
                    <p className="text-sm text-slate-600">Understanding your situation</p>
                  </div>
                  <div className="text-center">
                    <div className="text-slate-900 mb-1">Professional Counsel</div>
                    <p className="text-sm text-slate-600">Expert legal guidance</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-pink-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">Get Confidential Legal Support</h2>
            <p className="text-pink-100 mb-8">
              Schedule a private consultation to discuss your family legal matter
            </p>
            <Button asChild size="lg" className="bg-white text-pink-900 hover:bg-pink-50">
              <Link to="/contact">Book Private Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
