
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

const BlogsPage = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of AI in Enterprise Software Development",
      excerpt: "Explore how artificial intelligence is transforming the way businesses develop and deploy software solutions.",
      date: "April 1, 2025",
      author: "Alex Morgan",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Artificial Intelligence"
    },
    {
      id: 2,
      title: "5 Ways Machine Learning is Revolutionizing Data Analytics",
      excerpt: "Discover the innovative approaches that machine learning brings to data analysis across industries.",
      date: "March 25, 2025",
      author: "Maya Patel",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Machine Learning"
    },
    {
      id: 3,
      title: "Building Scalable Cloud Architectures for Modern Applications",
      excerpt: "Learn the best practices for designing cloud-native applications that can grow with your business needs.",
      date: "March 18, 2025",
      author: "David Chen",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Cloud Computing"
    },
    {
      id: 4,
      title: "The Role of UX Design in Enterprise Software Adoption",
      excerpt: "Why user experience has become a critical factor in the success of enterprise software implementations.",
      date: "March 10, 2025",
      author: "Olivia Martinez",
      image: "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "UX Design"
    },
    {
      id: 5,
      title: "Cybersecurity Trends for Technology Companies in 2025",
      excerpt: "Stay ahead of emerging threats with our analysis of the latest cybersecurity trends affecting tech organizations.",
      date: "March 3, 2025",
      author: "James Wilson",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Cybersecurity"
    },
    {
      id: 6,
      title: "How DevOps Practices Improve Software Quality and Delivery",
      excerpt: "Examining the tangible benefits of implementing DevOps methodologies in your development processes.",
      date: "February 25, 2025",
      author: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "DevOps"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-intellsurge-primary to-intellsurge-accent py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">IntellSurge Blog</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Insights, updates, and expert perspectives on technology, innovation, and industry trends
            </p>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <Link to={`/blogs/${post.id}`}>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-52 object-cover"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-intellsurge-primary">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <Link to={`/blogs/${post.id}`}>
                    <h2 className="text-xl font-bold mb-3 hover:text-intellsurge-primary transition-colors">{post.title}</h2>
                  </Link>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <Link 
                      to={`/blogs/${post.id}`}
                      className="text-intellsurge-primary font-medium hover:text-intellsurge-accent transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogsPage;
