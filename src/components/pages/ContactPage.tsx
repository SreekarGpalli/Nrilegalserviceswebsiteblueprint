import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Phone, Mail, MapPin, Clock, MessageCircle, Upload } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  const services = [
    'Property Verification',
    'Property Dispute',
    'Partition Suit',
    'Divorce',
    'Will & Succession',
    'Criminal Complaint',
    'Power of Attorney',
    'Court Representation',
    'Other',
  ];

  const timeZones = [
    { zone: 'USA (EST)', time: '9 AM - 5 PM EST = 7:30 PM - 3:30 AM IST' },
    { zone: 'USA (PST)', time: '9 AM - 5 PM PST = 10:30 PM - 6:30 AM IST' },
    { zone: 'UK', time: '9 AM - 5 PM GMT = 2:30 PM - 10:30 PM IST' },
    { zone: 'Australia (AEDT)', time: '9 AM - 5 PM AEDT = 5:30 AM - 1:30 PM IST' },
    { zone: 'UAE', time: '9 AM - 5 PM GST = 10:30 AM - 6:30 PM IST' },
    { zone: 'India', time: '9 AM - 8 PM IST' },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100">
              Get in touch for a free initial consultation. Available across all time zones for NRI clients.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Book a Consultation</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone / WhatsApp *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 234 567 8900"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="country">Current Location *</Label>
                          <Input
                            id="country"
                            placeholder="e.g., USA, UK, Australia"
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="service">Service Required *</Label>
                        <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message">Brief Description of Your Legal Matter *</Label>
                        <Textarea
                          id="message"
                          rows={6}
                          placeholder="Please provide details about your case, property location, timeline, and any specific concerns..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        />
                      </div>

                      <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                        <Upload className="size-8 mx-auto mb-2 text-slate-400" />
                        <p className="text-sm text-slate-600 mb-2">
                          Have documents to share? You can upload them after submitting this form.
                        </p>
                        <p className="text-xs text-slate-500">
                          We'll send you a secure document upload link
                        </p>
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Submit Inquiry
                      </Button>

                      <p className="text-sm text-slate-600 text-center">
                        By submitting this form, you agree to our terms and privacy policy. All consultations are confidential.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Direct Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <a href="tel:+919876543210" className="flex items-start gap-3 hover:bg-slate-50 p-3 rounded-lg transition-colors">
                      <Phone className="size-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-slate-600">Phone</div>
                        <div className="text-slate-900">+91 98765 43210</div>
                      </div>
                    </a>

                    <a href="https://wa.me/919876543210" className="flex items-start gap-3 hover:bg-slate-50 p-3 rounded-lg transition-colors">
                      <MessageCircle className="size-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-slate-600">WhatsApp</div>
                        <div className="text-slate-900">+91 98765 43210</div>
                      </div>
                    </a>

                    <a href="mailto:lawyer@anantapurlegal.com" className="flex items-start gap-3 hover:bg-slate-50 p-3 rounded-lg transition-colors">
                      <Mail className="size-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-slate-600">Email</div>
                        <div className="text-slate-900">lawyer@anantapurlegal.com</div>
                      </div>
                    </a>

                    <div className="flex items-start gap-3 p-3">
                      <MapPin className="size-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-slate-600">Office</div>
                        <div className="text-slate-900">
                          123 Main Road<br />
                          Anantapur, AP 515001<br />
                          India
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Clock className="size-5" />
                      Time Zone Availability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      {timeZones.map((tz, index) => (
                        <div key={index} className="pb-3 border-b last:border-0">
                          <div className="text-slate-900 mb-1">{tz.zone}</div>
                          <div className="text-slate-600">{tz.time}</div>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-slate-600 mt-4 p-3 bg-blue-50 rounded-lg">
                      We schedule consultations to match your time zone. Specify your preferred time in the form above.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <MessageCircle className="size-12 mx-auto mb-3 text-green-600" />
                      <div className="text-slate-900 mb-2">Emergency Legal Matters?</div>
                      <p className="text-sm text-slate-700 mb-4">
                        For urgent property encroachment, criminal complaints, or time-sensitive matters
                      </p>
                      <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                        <a href="https://wa.me/919876543210?text=Urgent: ">WhatsApp Immediately</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-slate-900 mb-8 text-center">Our Location in Anantapur</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="bg-slate-200 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="size-12 mx-auto mb-2 text-slate-400" />
                    <p className="text-slate-600">123 Main Road, Anantapur, AP 515001</p>
                    <p className="text-sm text-slate-500 mt-2">Near District Court Complex</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
