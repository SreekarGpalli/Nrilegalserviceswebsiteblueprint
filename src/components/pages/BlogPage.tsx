import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Calendar, ArrowRight, User } from 'lucide-react';

export function BlogPage() {
  const blogPosts = [
    {
      slug: 'protect-property-andhra-pradesh',
      title: 'How NRIs Can Protect Their Property in Andhra Pradesh',
      excerpt: 'Complete guide on protecting your property rights, preventing encroachment, and dealing with illegal occupation while living abroad.',
      category: 'Property Law',
      date: 'November 15, 2024',
      readTime: '8 min read',
    },
    {
      slug: 'gpa-vs-poa-difference',
      title: 'Difference Between GPA and SPA for NRIs',
      excerpt: 'Understanding General Power of Attorney vs Special Power of Attorney, when to use each, and risks involved for NRI property owners.',
      category: 'Documentation',
      date: 'November 10, 2024',
      readTime: '6 min read',
    },
    {
      slug: 'nri-fir-filing-guide',
      title: 'NRI Guide to Filing FIR in Andhra Pradesh',
      excerpt: 'Step-by-step process for NRIs to file criminal complaints in AP, what to do if police refuse FIR, and remote filing options.',
      category: 'Criminal Law',
      date: 'November 5, 2024',
      readTime: '7 min read',
    },
    {
      slug: 'check-land-encroachment-ap',
      title: 'How to Check if Your Land in AP Is Encroached',
      excerpt: 'Signs of encroachment, remote verification methods, Adangal checking process, and immediate legal steps to take.',
      category: 'Property Law',
      date: 'October 28, 2024',
      readTime: '9 min read',
    },
    {
      slug: 'nri-divorce-india-process',
      title: 'NRI Divorce in India – Complete Process',
      excerpt: 'Jurisdiction, documentation, court representation, and timeline for NRIs seeking divorce in Indian courts.',
      category: 'Family Law',
      date: 'October 20, 2024',
      readTime: '10 min read',
    },
    {
      slug: 'nri-will-registration-india',
      title: 'How NRIs Can Register a Will in India',
      excerpt: 'Drafting Indian will, registration process, probate requirements, and special considerations for NRI testators.',
      category: 'Family Law',
      date: 'October 12, 2024',
      readTime: '8 min read',
    },
    {
      slug: 'nri-land-purchase-checklist',
      title: 'Document Checklist for NRI Land Purchase in AP',
      excerpt: 'Every document you must verify before buying land in Andhra Pradesh, including Adangal, ROR-1B, and encumbrance certificates.',
      category: 'Property Law',
      date: 'October 5, 2024',
      readTime: '12 min read',
    },
    {
      slug: 'nri-tenant-problems',
      title: 'NRI Problems with Tenants – What to Do',
      excerpt: 'Dealing with non-paying tenants, illegal subletting, property damage, and eviction procedures while living abroad.',
      category: 'Property Law',
      date: 'September 28, 2024',
      readTime: '7 min read',
    },
  ];

  const categories = ['All', 'Property Law', 'Family Law', 'Documentation', 'Criminal Law'];

  return (
    <div>
      <section className="bg-gradient-to-br from-orange-900 to-red-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-4">Legal Insights for NRIs</h1>
            <p className="text-xl text-orange-100">
              Practical guides, legal updates, and expert advice on property, family, and legal matters in Andhra Pradesh
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Badge key={category} variant="outline" className="cursor-pointer hover:bg-slate-100">
                  {category}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                    <CardTitle className="text-lg">
                      <Link to={`/blog/${post.slug}`} className="hover:text-blue-600">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="size-4" />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
                    >
                      Read More <ArrowRight className="size-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
