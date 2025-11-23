import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';

export function BlogPostPage() {
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8">
              <ArrowLeft className="size-4" />
              Back to Blog
            </Link>

            <Badge variant="secondary" className="mb-4">Property Law</Badge>
            
            <h1 className="text-slate-900 mb-4">
              How NRIs Can Protect Their Property in Andhra Pradesh
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-8 pb-8 border-b">
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                <span>November 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4" />
                <span>8 min read</span>
              </div>
              <Button variant="outline" size="sm" className="ml-auto">
                <Share2 className="size-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700">
                For Non-Resident Indians owning property in Andhra Pradesh, protecting property rights from thousands of miles away presents unique challenges. Illegal occupation, encroachment by relatives, fraudulent sales, and documentation issues are common concerns that keep NRI property owners awake at night.
              </p>

              <p className="text-slate-700">
                This comprehensive guide covers everything NRIs need to know about protecting their property interests in Andhra Pradesh, with practical steps you can take immediately.
              </p>

              <h2 className="text-slate-900 mt-8 mb-4">Common Threats to NRI Property</h2>

              <h3 className="text-slate-900 mt-6 mb-3">1. Illegal Occupation by Relatives</h3>
              <p className="text-slate-700">
                This is perhaps the most common issue faced by NRIs. Family members, especially siblings or distant relatives, occupy ancestral or inherited property and refuse to vacate. They may claim joint ownership or simply take advantage of your absence.
              </p>

              <h3 className="text-slate-900 mt-6 mb-3">2. Encroachment by Neighbors</h3>
              <p className="text-slate-700">
                Boundary disputes and gradual encroachment by adjacent landowners are frequent issues. What starts as a few feet of encroachment can escalate into major property loss over time if not addressed promptly.
              </p>

              <h3 className="text-slate-900 mt-6 mb-3">3. Fraudulent Sales</h3>
              <p className="text-slate-700">
                In some cases, properties are sold using forged Powers of Attorney or fake documents. By the time the NRI discovers the fraud, the property may have been sold to innocent third-party buyers, complicating legal recovery.
              </p>

              <h2 className="text-slate-900 mt-8 mb-4">Protective Measures for NRIs</h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                <h3 className="text-slate-900 mb-3">Immediate Action Steps</h3>
                <ul className="space-y-2 text-slate-700">
                  <li>• Appoint a trusted local representative for regular property inspection</li>
                  <li>• Register your property with local police station</li>
                  <li>• Install visible signage indicating NRI ownership</li>
                  <li>• Maintain updated records and photographs</li>
                  <li>• Keep property tax payments current</li>
                </ul>
              </div>

              <h2 className="text-slate-900 mt-8 mb-4">Legal Tools for Protection</h2>

              <h3 className="text-slate-900 mt-6 mb-3">Power of Attorney</h3>
              <p className="text-slate-700">
                A carefully drafted Special Power of Attorney to a trustworthy person in India can help manage your property. However, be cautious - POA should have specific limitations and not grant blanket powers.
              </p>

              <h3 className="text-slate-900 mt-6 mb-3">Property Management Services</h3>
              <p className="text-slate-700">
                Professional property management services can provide regular inspections, photo documentation, rent collection (if rented), and immediate alerts about any issues.
              </p>

              <h2 className="text-slate-900 mt-8 mb-4">What to Do if Property Is Encroached</h2>

              <p className="text-slate-700">If you discover encroachment or illegal occupation:</p>

              <ol className="space-y-2 text-slate-700 my-4">
                <li>1. Gather all ownership documents and evidence</li>
                <li>2. Send legal notice to occupants</li>
                <li>3. File police complaint for trespass</li>
                <li>4. Initiate civil suit for recovery</li>
                <li>5. Seek interim injunction to prevent further damage</li>
              </ol>

              <p className="text-slate-700">
                Remember, acting quickly is crucial. Delayed action can result in occupants claiming adverse possession or the situation becoming more complicated legally.
              </p>
            </div>

            <Card className="mt-12 bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <h3 className="text-slate-900 mb-4">Need Legal Help Protecting Your Property?</h3>
                <p className="text-slate-700 mb-4">
                  If you're facing property-related challenges in Andhra Pradesh, our specialized NRI legal services can help. We provide property verification, dispute resolution, and ongoing protection services.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link to="/contact">Book Consultation</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/services/property">View Property Services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
