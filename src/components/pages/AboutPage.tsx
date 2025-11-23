import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  GraduationCap,
  Award,
  Scale,
  Globe,
  Users,
  CheckCircle,
  Building,
  Languages,
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutPage() {
  const qualifications = [
    'LLB - Osmania University, Hyderabad',
    'LLM (Property Law) - NALSAR',
    'Specialization in NRI Legal Services',
    'Bar Council of Andhra Pradesh (Reg. No. AP/1234/2003)',
  ];

  const courtsPracticed = [
    'Anantapur District Court',
    'High Court of Andhra Pradesh',
    'Family Courts, Anantapur',
    'Revenue Courts & Tribunals',
  ];

  const languages = ['Telugu', 'English', 'Hindi'];

  const expertise = [
    {
      icon: Building,
      title: 'Property & Land Law',
      description: 'AP land laws, Adangal, ROR-1B, encumbrance, title verification, partition suits',
    },
    {
      icon: Users,
      title: 'Family Law',
      description: 'Divorce, succession, will drafting, probate, legal heir certificates',
    },
    {
      icon: Scale,
      title: 'Civil & Criminal Litigation',
      description: 'Cheating cases, property fraud, criminal complaints, civil disputes',
    },
    {
      icon: Globe,
      title: 'NRI Legal Services',
      description: 'Remote representation, POA, documentation, cross-border legal coordination',
    },
  ];

  const achievements = [
    '20+ years of legal practice',
    '500+ NRI clients served worldwide',
    '85% success rate in property disputes',
    'Handled 200+ land verification cases',
    'Successfully represented clients in 150+ court cases',
    'Zero complaints with Bar Council',
  ];

  const experience = [
    {
      year: '2003',
      title: 'Started Practice',
      description: 'Began legal practice in Anantapur District Court focusing on civil matters',
    },
    {
      year: '2008',
      title: 'NRI Services Launch',
      description: 'Expanded to serve NRI community with specialized remote legal services',
    },
    {
      year: '2012',
      title: 'High Court Practice',
      description: 'Started practicing in Andhra Pradesh High Court for complex cases',
    },
    {
      year: '2015',
      title: 'Property Law Specialization',
      description: 'Completed advanced certification in property and land law',
    },
    {
      year: '2020',
      title: 'Digital Legal Services',
      description: 'Pioneered fully digital service delivery for international NRI clients',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-4">About the Lawyer</h1>
            <p className="text-xl text-blue-100">
              Dedicated to serving the legal needs of NRIs with expertise, integrity, and transparency
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 text-center">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop"
                      alt="Lawyer Profile"
                      className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                    />
                    <div className="text-slate-900 mb-2">Advocate Ramesh Kumar</div>
                    <p className="text-slate-600 mb-4">Senior Advocate, Anantapur</p>
                    <Badge className="mb-4">Bar Council of AP</Badge>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {languages.map((lang, index) => (
                        <Badge key={index} variant="outline">{lang}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <h2 className="text-slate-900 mb-4">Professional Profile</h2>
                    <p className="text-slate-700 mb-4">
                      With over 20 years of dedicated legal practice in Andhra Pradesh, I specialize in providing comprehensive legal services to Non-Resident Indians facing property disputes, family matters, and civil-criminal cases in the Anantapur region and across Andhra Pradesh.
                    </p>
                    <p className="text-slate-700 mb-6">
                      My practice is built on three core principles: transparency in communication, expertise in local AP laws, and remote-friendly service delivery that accommodates NRIs across all time zones. I understand the unique challenges faced by NRIs dealing with legal matters back home, and I'm committed to making the process as smooth and stress-free as possible.
                    </p>

                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-slate-900 mb-3">
                        <GraduationCap className="size-5" />
                        <span>Qualifications</span>
                      </div>
                      <ul className="space-y-2">
                        {qualifications.map((qual, index) => (
                          <li key={index} className="flex items-start gap-2 text-slate-700">
                            <CheckCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{qual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-slate-900 mb-3">
                        <Building className="size-5" />
                        <span>Courts Practiced</span>
                      </div>
                      <ul className="space-y-2">
                        {courtsPracticed.map((court, index) => (
                          <li key={index} className="flex items-start gap-2 text-slate-700">
                            <CheckCircle className="size-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{court}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-slate-900 mb-8 text-center">Areas of Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertise.map((area, index) => {
                const Icon = area.icon;
                return (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="size-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="size-6" />
                        </div>
                        <div>
                          <div className="text-slate-900 mb-2">{area.title}</div>
                          <p className="text-sm text-slate-600">{area.description}</p>
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

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-slate-900 mb-8 text-center">Professional Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-l-4 border-l-green-600">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Award className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{achievement}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-slate-900 mb-8 text-center">Professional Journey</h2>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="size-16 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                        <span>{item.year}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-slate-900 mb-2">{item.title}</div>
                        <p className="text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special NRI Experience */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="size-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="size-6" />
                  </div>
                  <div>
                    <h2 className="text-slate-900 mb-2">Special NRI Experience</h2>
                    <p className="text-slate-700">
                      Over the past 15+ years, I have developed specialized expertise in handling legal matters for NRIs across USA, UK, Canada, Australia, Singapore, UAE, Saudi Arabia, and other countries.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-slate-900 mb-2">Understanding NRI Challenges</div>
                    <p className="text-sm text-slate-600">
                      I understand the unique challenges NRIs face - time zone differences, inability to be physically present, language barriers, and concerns about transparency.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-slate-900 mb-2">Remote Service Delivery</div>
                    <p className="text-sm text-slate-600">
                      Pioneered digital documentation, video consultations, WhatsApp updates, and complete remote case handling without requiring NRI presence.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-slate-900 mb-2">Local Knowledge</div>
                    <p className="text-sm text-slate-600">
                      Deep expertise in Anantapur district procedures, Adangal systems, local revenue office processes, and AP-specific legal requirements.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-slate-900 mb-2">Transparent Communication</div>
                    <p className="text-sm text-slate-600">
                      Regular updates, clear fee structures, photographic evidence of on-ground work, and accessible across all time zones.
                    </p>
                  </div>
                </div>

                <p className="text-slate-700 text-center">
                  My goal is to provide the same level of service and attention to NRI clients as if they were present in Anantapur, ensuring complete peace of mind while their legal matters are resolved professionally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">Let's Discuss Your Legal Matter</h2>
            <p className="text-blue-100 mb-8">
              Schedule a free consultation to discuss how I can help resolve your legal challenges in Andhra Pradesh.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Link to="/contact">Book Consultation</Link>
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
