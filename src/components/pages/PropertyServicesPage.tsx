import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
  Building2,
  FileSearch,
  Scale,
  Users,
  Eye,
  CheckCircle,
  AlertTriangle,
  FileText,
  Clock,
  ArrowRight,
} from 'lucide-react';

export function PropertyServicesPage() {
  const services = [
    {
      id: 'verification',
      icon: FileSearch,
      title: 'Land / Property Verification',
      description: 'Comprehensive verification before purchase or inheritance',
      services: [
        'Title verification and chain of ownership',
        'Encumbrance certificate check',
        'Mutation verification',
        'Adangal / ROR-1B validation',
        'Layout approval verification',
        'Checking for illegal occupation',
        'Survey number verification',
        'Boundary verification',
      ],
    },
    {
      id: 'disputes',
      icon: Scale,
      title: 'Property Disputes & Litigation',
      description: 'Legal action for property-related conflicts',
      services: [
        'Encroachment suits',
        'Partition suits',
        'Boundary disputes',
        'Illegal construction complaints',
        'Tenant eviction cases',
        'Title dispute resolution',
        'Adverse possession claims',
        'Injunction orders',
      ],
    },
    {
      id: 'partition',
      icon: Users,
      title: 'Partition & Family Settlement',
      description: 'Division of ancestral and family properties',
      services: [
        'Ancestral property partition',
        'Disputes between siblings',
        'Execution of family settlements',
        'Drafting settlement deeds',
        'Court-supervised partition',
        'Property valuation coordination',
        'Partition deed registration',
      ],
    },
    {
      id: 'management',
      icon: Eye,
      title: 'Property Management for NRIs',
      description: 'Ongoing monitoring and protection',
      services: [
        'Periodic land inspections',
        'Photo/video reporting',
        'Dealing with local authorities',
        'Rent collection assistance',
        'Tenant verification',
        'Property tax management',
        'Encroachment prevention monitoring',
      ],
    },
  ];

  const nriScenarios = [
    {
      scenario: 'NRI Wants to Buy Property',
      problem: 'Cannot visit India frequently to verify property authenticity',
      solution: 'Complete remote verification including title check, physical inspection, and legal report',
    },
    {
      scenario: 'Relatives Occupying Ancestral Land',
      problem: 'Family members illegally occupying inherited property',
      solution: 'Legal notice, partition suit filing, and court representation without NRI presence',
    },
    {
      scenario: 'Documents Missing or Unclear',
      problem: 'Property papers incomplete or authenticity questionable',
      solution: 'Document reconstruction, title search, and obtaining fresh certificates from revenue office',
    },
    {
      scenario: 'Land Encroachment While Abroad',
      problem: 'Neighbors or third parties encroaching on NRI property',
      solution: 'Immediate legal action, police complaint, and civil suit for recovery',
    },
  ];

  const painPoints = [
    {
      issue: 'Fake Documents',
      description: 'Sellers presenting forged sale deeds, POAs, or title documents',
      howWeHelp: 'Verification from Sub-Registrar office and revenue department records',
    },
    {
      issue: 'Unregistered Sales',
      description: 'Previous transactions not properly registered, creating title defects',
      howWeHelp: 'Complete title chain verification and rectification procedures',
    },
    {
      issue: 'Illegal Encroachments',
      description: 'Unauthorized occupation by family members or third parties',
      howWeHelp: 'Swift legal action with police support and civil litigation',
    },
    {
      issue: 'Multiple Claimants',
      description: 'Several people claiming ownership of same property',
      howWeHelp: 'Title litigation and establishing clear ownership through courts',
    },
  ];

  const documents = [
    {
      category: 'For Property Purchase Verification',
      mandatory: [
        'Sale deed / Title deed',
        'Encumbrance certificate (13-30 years)',
        'Property tax receipts',
        'Survey number details',
        'Seller\'s identity documents',
      ],
      optional: [
        'Previous sale deeds',
        'Layout approval',
        'Building plan approval',
        'Occupancy certificate',
      ],
    },
    {
      category: 'For Property Dispute Cases',
      mandatory: [
        'Ownership documents',
        'Adangal / ROR-1B',
        'Sale deeds',
        'Partition deed (if any)',
        'Survey map',
      ],
      optional: [
        'Photographs of property',
        'Previous legal notices',
        'Will / succession documents',
        'Family tree details',
      ],
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'Share property details, location, and specific concerns via WhatsApp or video call',
      time: '1 day',
    },
    {
      step: '2',
      title: 'Document Collection',
      description: 'Send available documents digitally; we obtain missing documents from offices',
      time: '3-5 days',
    },
    {
      step: '3',
      title: 'On-Ground Verification',
      description: 'Physical inspection, survey number verification, boundary check, occupation status',
      time: '2-3 days',
    },
    {
      step: '4',
      title: 'Legal Office Checks',
      description: 'Sub-Registrar, Revenue Office, MeeSeva for encumbrance, mutations, pending cases',
      time: '5-7 days',
    },
    {
      step: '5',
      title: 'Detailed Report',
      description: 'Comprehensive legal opinion with photos, document analysis, and recommendations',
      time: '2 days',
    },
    {
      step: '6',
      title: 'Action / Clearance',
      description: 'Proceed with purchase, or file legal action if disputes found',
      time: 'Ongoing',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-orange-500 text-white">Most Requested Service</Badge>
            <h1 className="text-white mb-4">Property & Land Services for NRIs</h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive property verification, dispute resolution, and management services for NRIs owning or purchasing land in Andhra Pradesh
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Link to="/contact">Request Verification</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="https://wa.me/919876543210">WhatsApp Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-slate-900 mb-4">Our Property Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Specialized services protecting NRI property interests in Anantapur and across AP
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id}>
                  <CardHeader>
                    <div className="size-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="size-6" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.services.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
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
      </section>

      {/* NRI Scenarios */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-slate-900 mb-8 text-center">Typical NRI Scenarios We Handle</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nriScenarios.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.scenario}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center gap-2 text-red-600 mb-1">
                          <AlertTriangle className="size-4" />
                          <span className="text-sm">Problem</span>
                        </div>
                        <p className="text-sm text-slate-700">{item.problem}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-green-600 mb-1">
                          <CheckCircle className="size-4" />
                          <span className="text-sm">Our Solution</span>
                        </div>
                        <p className="text-sm text-slate-700">{item.solution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-slate-900 mb-8 text-center">Common Pain Points & How We Help</h2>
            <div className="space-y-4">
              {painPoints.map((pain, index) => (
                <Card key={index} className="border-l-4 border-l-red-600">
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-slate-900 mb-1">{pain.issue}</div>
                        <p className="text-sm text-slate-600">{pain.description}</p>
                      </div>
                      <div className="md:col-span-2">
                        <div className="flex items-center gap-2 text-green-600 mb-1">
                          <CheckCircle className="size-4" />
                          <span className="text-sm">How We Help</span>
                        </div>
                        <p className="text-sm text-slate-700">{pain.howWeHelp}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents & Process */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="documents" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="documents">Required Documents</TabsTrigger>
                <TabsTrigger value="process">Our Process</TabsTrigger>
              </TabsList>
              
              <TabsContent value="documents" className="mt-6">
                <div className="space-y-6">
                  {documents.map((doc, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{doc.category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <div className="text-slate-900 mb-3">Mandatory Documents</div>
                            <ul className="space-y-2">
                              {doc.mandatory.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <CheckCircle className="size-4 text-red-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="text-slate-900 mb-3">Supporting Documents</div>
                            <ul className="space-y-2">
                              {doc.optional.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <FileText className="size-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="process" className="mt-6">
                <div className="space-y-4">
                  {process.map((step, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="size-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                            <span>{step.step}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div className="text-slate-900">{step.title}</div>
                              <div className="flex items-center gap-1 text-sm text-slate-500">
                                <Clock className="size-4" />
                                <span>{step.time}</span>
                              </div>
                            </div>
                            <p className="text-slate-600">{step.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Card className="mt-6 bg-blue-50 border-blue-200">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-slate-900 mb-2">Total Timeline</div>
                      <p className="text-slate-700">
                        Complete property verification typically takes <span className="text-blue-600">2-3 weeks</span> from initial consultation to final report delivery
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Why This Service Matters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-slate-50">
              <CardContent className="pt-8">
                <h2 className="text-slate-900 mb-6 text-center">Why Property Services Matter for NRIs</h2>
                <div className="space-y-4 text-slate-700">
                  <p>
                    Property disputes and frauds are among the most common legal issues faced by NRIs. Being abroad makes you vulnerable to:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Relatives illegally occupying or selling ancestral property</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Fraudulent property sellers with fake documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Encroachment by neighbors or third parties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">•</span>
                      <span>Property tax and government notice issues going unnoticed</span>
                    </li>
                  </ul>
                  <p>
                    Our specialized AP property law expertise, combined with on-ground presence in Anantapur, ensures your property interests are protected even when you're thousands of miles away.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">Protect Your Property Interests</h2>
            <p className="text-blue-100 mb-8">
              Don't wait until a problem becomes a crisis. Get your property verified or dispute resolved today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Link to="/contact">Request Property Verification</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/resources">Download Checklist</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
