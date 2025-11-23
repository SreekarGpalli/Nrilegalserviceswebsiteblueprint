import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Building2, Users, Gavel, DollarSign, FileText, ArrowRight } from 'lucide-react';

export function ServicesOverviewPage() {
  const services = [
    {
      icon: Building2,
      title: 'Property & Land Services',
      description: 'Complete property verification, dispute resolution, partition, and management for NRI landowners in AP',
      link: '/services/property',
      color: 'blue',
    },
    {
      icon: Users,
      title: 'Family & Personal Matters',
      description: 'Marriage registration, divorce proceedings, will drafting, succession, and estate planning',
      link: '/services/family',
      color: 'pink',
    },
    {
      icon: Gavel,
      title: 'Civil & Criminal Matters',
      description: 'Criminal complaints, FIR filing, fraud cases, cheating cases, and civil dispute litigation',
      link: '/services/civil-criminal',
      color: 'red',
    },
    {
      icon: DollarSign,
      title: 'Financial & Banking',
      description: 'Bank disputes, NRI account issues, unauthorized transactions, and loan matters',
      link: '/services/financial',
      color: 'green',
    },
    {
      icon: FileText,
      title: 'Documentation & Representation',
      description: 'Power of Attorney, legal notices, Vakalatnama, and complete court representation',
      link: '/services/documentation',
      color: 'purple',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-4">NRI Legal Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive legal solutions for Non-Resident Indians dealing with property, family, and legal matters in Andhra Pradesh
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className={`size-16 bg-${service.color}-100 text-${service.color}-600 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Icon className="size-8" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-slate-900 mb-2">{service.title}</h3>
                          <p className="text-slate-600 mb-4">{service.description}</p>
                          <Button asChild variant="link" className="p-0">
                            <Link to={service.link}>
                              Learn More <ArrowRight className="ml-2 size-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">Not Sure Which Service You Need?</h2>
            <p className="text-blue-100 mb-8">
              Book a free consultation and we'll guide you to the right solution
            </p>
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
