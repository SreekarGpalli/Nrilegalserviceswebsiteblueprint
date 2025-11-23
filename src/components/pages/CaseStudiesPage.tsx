import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { CheckCircle, Clock, MapPin, DollarSign } from 'lucide-react';

export function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      category: 'Property Dispute',
      title: 'Ancestral Property Partition - 4 Siblings',
      client: 'NRI from USA (California)',
      badge: 'Success',
      problem: 'NRI client inherited ancestral agricultural land with 3 siblings in Anantapur. Siblings were delaying partition and two of them were cultivating the land without sharing proceeds. Client lived in USA and could not visit frequently.',
      challenges: [
        'Client could not be present for negotiations',
        'Two siblings opposed partition',
        'Land had no clear boundaries',
        'Survey needed but siblings not cooperating',
      ],
      action: [
        'Filed partition suit in Anantapur District Court',
        'Obtained court-ordered survey',
        'Parallel mediation with siblings',
        'Negotiated family settlement',
        'Drafted and registered settlement deed',
      ],
      outcome: 'Successfully partitioned land into 4 equal shares. Family settlement reached avoiding prolonged litigation. Client received clear title to their portion. All parties satisfied with division.',
      timeline: '6 months',
      value: 'Property worth ₹80 lakhs divided fairly',
    },
    {
      id: 2,
      category: 'Land Verification',
      title: 'Fraud Prevention - Land Purchase',
      client: 'NRI from Australia (Sydney)',
      badge: 'Fraud Prevented',
      problem: 'Client was about to purchase 2 acres of agricultural land near Anantapur for ₹50 lakhs. Seller had all documents and was pressuring for quick sale.',
      challenges: [
        'Client could not visit property',
        'Seller rushing the transaction',
        'Documents appeared genuine',
        'Local broker vouching for seller',
      ],
      action: [
        'Conducted complete title verification',
        'Checked encumbrance certificate (30 years)',
        'Physical property inspection',
        'Cross-verification with revenue records',
        'Found title belonged to different person',
        'Seller had forged POA',
      ],
      outcome: 'Detected elaborate fraud scheme. Saved client from ₹50 lakh loss. Client did not proceed with purchase. Police complaint filed against fraudsters.',
      timeline: '2 weeks',
      value: 'Prevented ₹50 lakh fraud',
    },
    {
      id: 3,
      category: 'Criminal Case',
      title: 'Illegal Property Occupation - FIR & Recovery',
      client: 'NRI from UK (London)',
      badge: 'Property Recovered',
      problem: 'Client\'s ancestral house was illegally occupied by distant relatives who changed locks. Client was living in UK and discovered occupation during video call with neighbor.',
      challenges: [
        'Illegal occupants claimed ownership',
        'Had been living there for 2 years',
        'Client in UK, could not travel',
        'Local police initially unhelpful',
      ],
      action: [
        'Filed criminal complaint for trespass',
        'Submitted ownership documents to police',
        'Legal pressure resulted in FIR filing',
        'Filed civil suit for recovery',
        'Obtained interim injunction',
        'Police evicted illegal occupants',
      ],
      outcome: 'Property successfully recovered. Criminal case ongoing against occupants. House handed back to client\'s local caretaker. Locks changed and property secured.',
      timeline: '8 months',
      value: 'Recovered property worth ₹35 lakhs',
    },
    {
      id: 4,
      category: 'Divorce',
      title: 'Mutual Consent Divorce - NRI Spouse',
      client: 'NRI from UAE (Dubai)',
      badge: 'Amicable Resolution',
      problem: 'NRI client working in Dubai wanted mutual consent divorce. Both parties agreed but client could not travel to India frequently for court dates.',
      challenges: [
        'Multiple court appearances required',
        'Client in Dubai with work commitments',
        '6-month cooling period',
        'Settlement terms negotiation',
      ],
      action: [
        'Drafted mutual consent petition',
        'Negotiated settlement terms',
        'Filed in Anantapur Family Court',
        'Attended court dates via Vakalatnama',
        'Client appeared once via video conference',
        'Obtained divorce decree',
      ],
      outcome: 'Divorce granted by mutual consent. Settlement terms honored. Client did not have to take multiple leaves from work. Entire process handled with just one visit to India.',
      timeline: '9 months',
      value: 'Peaceful resolution',
    },
    {
      id: 5,
      category: 'Will & Succession',
      title: 'Succession Certificate - Multiple Assets',
      client: 'NRI from USA (New Jersey)',
      badge: 'Estate Settled',
      problem: 'Client\'s father passed away leaving property, bank accounts, and shares. No will was made. Client is only child but needed legal heir certificate and succession certificate to claim assets.',
      challenges: [
        'Multiple assets across AP',
        'Banks requiring succession certificate',
        'Property mutation needed',
        'Client working in USA',
      ],
      action: [
        'Filed succession certificate application',
        'Published newspaper notice',
        'Coordinated with court',
        'Obtained succession certificate',
        'Helped with bank claims',
        'Property mutation in client\'s name',
      ],
      outcome: 'Succession certificate obtained. Bank accounts claimed. Property transferred. All assets now in client\'s name. Client managed everything remotely.',
      timeline: '5 months',
      value: 'Estate worth ₹1.2 crore transferred',
    },
    {
      id: 6,
      category: 'Power of Attorney',
      title: 'POA Registration & Property Sale',
      client: 'NRI from Saudi Arabia',
      badge: 'Transaction Completed',
      problem: 'Client wanted to sell inherited property in Anantapur but could not travel to India. Needed POA to authorize local person to handle sale.',
      challenges: [
        'POA needed from Saudi Arabia',
        'Embassy attestation required',
        'Registration in Anantapur',
        'Finding trustworthy attorney',
      ],
      action: [
        'Drafted special POA for property sale',
        'Guided embassy attestation process',
        'Registered POA in Anantapur',
        'Identified genuine buyers',
        'Negotiated sale price',
        'Completed sale transaction',
      ],
      outcome: 'POA successfully registered. Property sold at fair market price (₹42 lakhs). Funds transferred to client\'s NRE account. Complete transaction done without client visiting India.',
      timeline: '4 months',
      value: '₹42 lakh property sold',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-green-900 to-teal-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-4">NRI Legal Case Studies</h1>
            <p className="text-xl text-green-100">
              Real success stories of how we've helped NRIs resolve complex legal challenges in Andhra Pradesh
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              {caseStudies.map((caseStudy) => (
                <Card key={caseStudy.id} className="overflow-hidden">
                  <CardHeader className="bg-slate-50">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                      <Badge variant="outline">{caseStudy.category}</Badge>
                      <Badge className="bg-green-600 text-white">{caseStudy.badge}</Badge>
                    </div>
                    <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="size-4" />
                      <span>{caseStudy.client}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      {/* Problem */}
                      <div>
                        <div className="text-slate-900 mb-2">Problem</div>
                        <p className="text-slate-700">{caseStudy.problem}</p>
                      </div>

                      {/* Challenges */}
                      <div>
                        <div className="text-slate-900 mb-2">Challenges</div>
                        <ul className="space-y-2">
                          {caseStudy.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                              <span className="text-red-600 mt-1">•</span>
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Actions */}
                      <div>
                        <div className="text-slate-900 mb-2">Actions Taken</div>
                        <ul className="space-y-2">
                          {caseStudy.action.map((action, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                              <CheckCircle className="size-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Outcome */}
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="text-green-900 mb-2">Outcome</div>
                        <p className="text-green-800">{caseStudy.outcome}</p>
                      </div>

                      {/* Timeline & Value */}
                      <div className="flex flex-wrap gap-6 pt-4 border-t">
                        <div className="flex items-center gap-2">
                          <Clock className="size-5 text-slate-600" />
                          <div>
                            <div className="text-sm text-slate-600">Timeline</div>
                            <div className="text-slate-900">{caseStudy.timeline}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="size-5 text-slate-600" />
                          <div>
                            <div className="text-sm text-slate-600">Value</div>
                            <div className="text-slate-900">{caseStudy.value}</div>
                          </div>
                        </div>
                      </div>
                    </div>
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
            <h2 className="text-white mb-4">Need Similar Help?</h2>
            <p className="text-green-100 mb-8">
              Let us resolve your legal challenges with the same dedication and expertise
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-green-900 hover:bg-green-50">
                <Link to="/contact">Discuss Your Case</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/services/property">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
