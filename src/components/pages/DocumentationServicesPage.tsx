import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { FileText, Mail, Scale, CheckCircle, Download } from 'lucide-react';

export function DocumentationServicesPage() {
  const services = [
    {
      icon: FileText,
      title: 'Power of Attorney (POA)',
      items: [
        'General POA drafting',
        'Special POA for specific purposes',
        'Attestation guidance',
        'Registration in India',
        'Embassy notarization process',
        'Revocation of POA',
      ],
    },
    {
      icon: Mail,
      title: 'Legal Notices',
      items: [
        'Drafting legal notices',
        'Sending via registered post',
        'Reply to received notices',
        'Follow-up action planning',
      ],
    },
    {
      icon: Scale,
      title: 'Court Representation',
      items: [
        'Vakalatnama preparation & filing',
        'Representing NRIs without presence',
        'Handling all court hearings',
        'Filing suits and complaints',
        'Evidence submission',
        'Regular case updates',
      ],
    },
  ];

  const poaProcess = [
    'Draft POA as per your requirements',
    'Send draft for your review',
    'Get POA notarized at Indian Embassy/Consulate in your country',
    'Apostille/attestation as per destination country',
    'Courier original POA to us in India',
    'Register POA at Sub-Registrar office',
    'Start using POA for intended purposes',
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FileText className="size-16 mx-auto mb-4" />
            <h1 className="text-white mb-4">Documentation & Representation Services</h1>
            <p className="text-xl text-purple-100 mb-8">
              Power of Attorney, legal notices, and complete court representation for NRIs
            </p>
            <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index}>
                    <CardHeader>
                      <div className="size-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-3">
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-slate-900 mb-8 text-center">Power of Attorney Process for NRIs</h2>
            <div className="space-y-3">
              {poaProcess.map((step, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="size-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                        <span>{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-700">{step}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button asChild variant="outline">
                <Link to="/resources">
                  <Download className="mr-2 size-4" />
                  Download POA Checklist
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">Need POA or Court Representation?</h2>
            <p className="text-purple-100 mb-8">
              Let us handle all legal documentation and court appearances on your behalf
            </p>
            <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
              <Link to="/contact">Request Service</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
