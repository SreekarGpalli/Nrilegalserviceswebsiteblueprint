import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Shield, AlertOctagon, FileText, CheckCircle, Phone } from 'lucide-react';

export function CivilCriminalServicesPage() {
  const criminalServices = [
    'Cheating and fraud cases',
    'Property fraud complaints',
    'Threats and harassment',
    'Cyber crime complaints',
    'FIR filing assistance',
    'Criminal case representation',
    'Bail applications',
    'Complaint to police',
  ];

  const civilServices = [
    'Contract breach cases',
    'Loan recovery disputes',
    'Monetary claim suits',
    'Injunction orders',
    'Specific performance',
    'Damages claims',
  ];

  const urgentScenarios = [
    {
      title: 'FIR Not Filed by Police',
      problem: 'Police refusing to register your complaint',
      action: 'File written complaint, approach Magistrate, legal pressure on police',
    },
    {
      title: 'Property Sold Fraudulently',
      problem: 'Someone forged documents and sold your property',
      action: 'Criminal complaint, civil injunction, title cancellation suit',
    },
    {
      title: 'Threats from Relatives',
      problem: 'Family members threatening you for property',
      action: 'Police complaint, protection order, criminal prosecution',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-red-900 to-orange-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="size-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="size-8" />
            </div>
            <h1 className="text-white mb-4">Civil & Criminal Legal Services</h1>
            <p className="text-xl text-orange-100 mb-8">
              Swift legal action for criminal complaints, fraud cases, and civil disputes
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-red-900 hover:bg-red-50">
                <Link to="/contact">Report Your Case</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="tel:+919876543210">Emergency Call</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-t-4 border-t-red-600">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <AlertOctagon className="size-6 text-red-600" />
                    <CardTitle>Criminal Matters</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {criminalServices.map((service, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-blue-600">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="size-6 text-blue-600" />
                    <CardTitle>Civil Disputes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {civilServices.map((service, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{service}</span>
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
            <h2 className="text-slate-900 mb-8 text-center">Urgent NRI Scenarios</h2>
            <div className="space-y-4">
              {urgentScenarios.map((scenario, index) => (
                <Card key={index} className="border-l-4 border-l-red-600">
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-slate-900 mb-1">{scenario.title}</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-600 mb-1">Problem</div>
                        <p className="text-sm text-slate-700">{scenario.problem}</p>
                      </div>
                      <div>
                        <div className="text-sm text-green-600 mb-1">Immediate Action</div>
                        <p className="text-sm text-slate-700">{scenario.action}</p>
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
          <div className="max-w-4xl mx-auto">
            <Card className="bg-red-50 border-red-200">
              <CardContent className="pt-8">
                <h3 className="text-slate-900 mb-4 text-center">Why Fast Action Matters</h3>
                <div className="space-y-3 text-slate-700">
                  <p>
                    For NRIs, delays in criminal complaints or civil suits can result in:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li>• Evidence being destroyed or witnesses becoming unavailable</li>
                    <li>• Fraudulent transactions becoming harder to reverse</li>
                    <li>• Property being sold or transferred to third parties</li>
                    <li>• Limitation periods expiring, barring legal action</li>
                  </ul>
                  <p>
                    We provide immediate legal assistance, filing complaints and suits quickly while keeping you updated remotely.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Phone className="size-6" />
              <h2 className="text-white">Need Urgent Legal Action?</h2>
            </div>
            <p className="text-red-100 mb-8">
              For time-sensitive criminal or civil matters, contact us immediately for swift legal intervention
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-red-900 hover:bg-red-50">
                <a href="tel:+919876543210">Call Now</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="https://wa.me/919876543210">WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
