import { Link } from 'react-router-dom'

const blogs = [
  {
    id: 1,
    title: 'The Secret to Perfect Curd: Temperature & Time',
    excerpt: 'Learn how the right temperature and fermentation time can make all the difference in achieving that perfect creamy curd at home.',
    image: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=600&h=400&fit=crop',
    date: 'Aug 12, 2024',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Why Bilona Ghee is Worth Every Penny',
    excerpt: 'Discover the ancient bilona method of making ghee and why it preserves more nutrients and flavor than modern alternatives.',
    image: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=600&h=400&fit=crop',
    date: 'Aug 5, 2024',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Paneer vs Paneer: What Makes Malai Paneer Special',
    excerpt: 'Not all paneer is created equal. Find out what sets malai paneer apart and why it is the secret to restaurant-quality curries.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop',
    date: 'Jul 28, 2024',
    readTime: '4 min read',
  },
]

export default function Blogs() {
  return (
    <section className="bg-soft-cream">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        <div className="text-center mb-16">
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-regal-gold mb-4 block">
            From Our Kitchen
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-emerald mb-2">
            Blogs & Recipes
          </h2>
          <div className="h-[1px] w-12 bg-regal-gold mx-auto mb-6" />
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Tips, recipes, and stories from our dairy kitchen to yours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              className="group bg-surface-white border border-outline-variant rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-surface-container-low overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-on-surface-variant mb-3">
                  <span>{blog.date}</span>
                  <span>·</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-deep-emerald mb-3 group-hover:text-regal-gold transition-colors">
                  {blog.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                  {blog.excerpt}
                </p>
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-deep-emerald border-b border-deep-emerald pb-1 group-hover:text-regal-gold group-hover:border-regal-gold transition-colors">
                  Read More
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
