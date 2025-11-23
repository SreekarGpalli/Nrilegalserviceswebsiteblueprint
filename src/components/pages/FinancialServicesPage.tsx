import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { DollarSign, CreditCard, AlertCircle, CheckCircle } from 'lucide-react';

export function FinancialServicesPage() {
  const services = [
    {
      category: 'Bank Disputes',
      items: [
        'Unauthorized withdrawals',
        'NPA / loan issues',
        'Fraudulent transactions',
        'Account freezing problems',
        'Insurance claim disputes',
      ],
    },
    {
      category: 'NRI Account Issues',
      items: [
        'Account type conversion (NRE/NRO)',
        'KYC and bank updates',
        'Frozen account release',
        'Disputed charges',
        'Loan recovery defense',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-green-900 to-teal-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <DollarSign className="size-16 mx-auto mb-4" />
            <h1 className="text-white mb-4">Financial & Banking Legal Services</h1>
            <p className="text-xl text-green-100 mb-8">
              Resolution of bank disputes, NRI account issues, and financial legal matters
            </p>
            <Button asChild size="lg" className="bg-white text-green-900 hover:bg-green-50">
              <Link to="/contact">Discuss Your Case</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border-t-4 border-t-green-600">
                  <CardHeader>
                    <CardTitle>{service.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="size-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">Resolve Your Banking Issue</h2>
            <p className="text-green-100 mb-8">
              Expert legal support for NRI banking and financial matters
            </p>
            <Button asChild size="lg" className="bg-white text-green-900 hover:bg-green-50">
              <Link to="/contact">Get Legal Help</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
