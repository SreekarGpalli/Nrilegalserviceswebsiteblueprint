import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Download, FileText, HelpCircle, BookOpen } from 'lucide-react';

export function ResourcesPage() {
  const checklists = [
    {
      title: 'Property Purchase Checklist',
      description: 'Complete checklist for NRIs buying property in AP',
      items: ['Title verification steps', 'Documents to verify', 'Questions to ask seller', 'Red flags to watch for'],
    },
    {
      title: 'Power of Attorney Checklist',
      description: 'Step-by-step POA registration guide for NRIs',
      items: ['POA drafting requirements', 'Embassy attestation process', 'Registration procedure', 'Common mistakes to avoid'],
    },
    {
      title: 'Divorce Documentation Checklist',
      description: 'Documents needed for divorce proceedings',
      items: ['Marriage documents', 'Evidence requirements', 'Financial disclosures', 'Settlement considerations'],
    },
  ];

  const documents = [
    {
      category: 'Property Verification',
      mandatory: ['Sale deed / Title deed', 'Encumbrance certificate', 'Property tax receipts', 'Survey number details', 'Adangal / ROR-1B'],
      optional: ['Layout approval', 'Building plan', 'Previous sale deeds', 'Possession certificate'],
    },
    {
      category: 'Power of Attorney',
      mandatory: ['Passport copy', 'Aadhaar card', 'Property documents (if POA for property)', 'Attorney details', 'Two witness details'],
      optional: ['Previous POA (if revoking)', 'Specific transaction details', 'Limitation clauses'],
    },
  ];

  const faqs = [
    {
      category: 'Property',
      questions: [
        {
          q: 'Can NRIs buy agricultural land in India?',
          a: 'No, NRIs cannot buy agricultural land, plantation property, or farmhouses in India as per RBI regulations. They can buy residential and commercial properties.',
        },
        {
          q: 'What is encumbrance certificate and why is it important?',
          a: 'Encumbrance certificate shows all registered transactions on a property for a specific period. It helps verify if the property has any mortgages, loans, or legal issues. Essential before buying property.',
        },
        {
          q: 'How long does property verification take?',
          a: 'Complete property verification typically takes 2-3 weeks, including title search, physical inspection, and revenue office verification.',
        },
      ],
    },
    {
      category: 'Power of Attorney',
      questions: [
        {
          q: 'What is the difference between General POA and Special POA?',
          a: 'General POA grants broad powers to the attorney for multiple purposes. Special POA is limited to specific purposes like selling a particular property. For NRIs, Special POA is recommended for specific transactions.',
        },
        {
          q: 'How to get POA attested from abroad?',
          a: 'Get POA notarized at Indian Embassy/Consulate in your country. Then get it apostilled (for Hague Convention countries) or attested by MEA (for other countries). We can guide you through the complete process.',
        },
        {
          q: 'Can I revoke a POA from abroad?',
          a: 'Yes, you can revoke a POA by executing a revocation deed, getting it attested at Indian Embassy, and registering it at the same Sub-Registrar office where original POA was registered.',
        },
      ],
    },
    {
      category: 'Court Cases',
      questions: [
        {
          q: 'Do I need to be present in India for court cases?',
          a: 'Not necessarily. Through Vakalatnama (power of attorney to lawyer), we can represent you in court without your physical presence. You may need to appear once for recording evidence in some cases.',
        },
        {
          q: 'How long do property dispute cases take in India?',
          a: 'Property cases can take 1-3 years depending on complexity. However, we try mediation and family settlements first, which can resolve disputes in 3-6 months.',
        },
        {
          q: 'Can I file a case in India while living abroad?',
          a: 'Yes, absolutely. We can file cases on your behalf with proper documentation and Vakalatnama. All filings, hearings, and updates handled remotely.',
        },
      ],
    },
  ];

  const guides = [
    {
      title: 'Land Verification Process in AP',
      steps: ['Check sale deed authenticity', 'Obtain encumbrance certificate', 'Verify Adangal/ROR-1B', 'Physical inspection', 'Survey number verification', 'Check for pending litigations'],
    },
    {
      title: 'Divorce Filing Process for NRIs',
      steps: ['Determine jurisdiction', 'Collect documents', 'Draft petition', 'File in court', 'Serve notice to spouse', 'Attend hearings (or via Vakalatnama)', 'Obtain decree'],
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="size-16 mx-auto mb-4" />
            <h1 className="text-white mb-4">Resources for NRIs</h1>
            <p className="text-xl text-purple-100">
              Checklists, guides, required documents, and FAQs to help you navigate legal processes
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="checklists" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="checklists">Checklists</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="faqs">FAQs</TabsTrigger>
              </TabsList>

              <TabsContent value="checklists" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {checklists.map((checklist, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="size-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-3">
                          <FileText className="size-6" />
                        </div>
                        <CardTitle className="text-lg">{checklist.title}</CardTitle>
                        <CardDescription>{checklist.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-4 text-sm text-slate-700">
                          {checklist.items.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                        <Button className="w-full" variant="outline">
                          <Download className="mr-2 size-4" />
                          Download PDF
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="documents" className="mt-6">
                <div className="space-y-6">
                  {documents.map((doc, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{doc.category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <div className="text-slate-900 mb-3">Mandatory Documents</div>
                            <ul className="space-y-2 text-sm text-slate-700">
                              {doc.mandatory.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-red-600">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="text-slate-900 mb-3">Optional / Supporting</div>
                            <ul className="space-y-2 text-sm text-slate-700">
                              {doc.optional.map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-blue-600">•</span>
                                  <span>{item}</span>
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

              <TabsContent value="guides" className="mt-6">
                <div className="space-y-6">
                  {guides.map((guide, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{guide.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {guide.steps.map((step, i) => (
                            <div key={i} className="flex gap-4">
                              <div className="size-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                                {i + 1}
                              </div>
                              <div className="flex-1 pt-1">
                                <p className="text-slate-700">{step}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="faqs" className="mt-6">
                <div className="space-y-6">
                  {faqs.map((section, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <HelpCircle className="size-5" />
                          {section.category} FAQs
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                          {section.questions.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${index}-${i}`}>
                              <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                              <AccordionContent>
                                <p className="text-slate-700">{faq.a}</p>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">Still Have Questions?</h2>
            <p className="text-purple-100 mb-8">
              Contact us for personalized guidance on your specific legal matter
            </p>
            <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
              Ask a Question
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
