
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface BlogPostData {
  id: number;
  title: string;
  content: string[];
  date: string;
  author: string;
  authorRole: string;
  authorImage: string;
  image: string;
  category: string;
  videoId?: string;
  tags: string[];
}

const blogPosts: BlogPostData[] = [
  {
    id: 1,
    title: "The Future of AI in Enterprise Software Development",
    content: [
      "Artificial intelligence is transforming enterprise software development at an unprecedented pace. From intelligent code completion to automated testing and deployment, AI-driven tools are helping development teams work more efficiently and deliver higher quality software.",
      "One of the most exciting applications of AI in enterprise software development is in requirements analysis. Machine learning algorithms can now process vast amounts of user feedback, support tickets, and usage data to identify patterns and suggest feature improvements that might otherwise go unnoticed by human analysts.",
      "Additionally, AI-powered predictive analytics are helping organizations anticipate system failures, optimize resource allocation, and forecast user adoption rates with remarkable accuracy. This proactive approach to software management represents a significant shift from the reactive methodologies of the past.",
      "As we look to the future, AI will increasingly become embedded directly within enterprise applications, enabling them to learn from user behavior and adapt accordingly. This will lead to more personalized and efficient software experiences that evolve over time to better meet the needs of individual users and organizations."
    ],
    date: "April 1, 2025",
    author: "Alex Morgan",
    authorRole: "Chief Technology Officer",
    authorImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Artificial Intelligence",
    videoId: "sO4p5ZddCba",
    tags: ["Artificial Intelligence", "Software Development", "Enterprise", "Machine Learning"]
  },
  {
    id: 2,
    title: "5 Ways Machine Learning is Revolutionizing Data Analytics",
    content: [
      "Machine learning is fundamentally changing how organizations approach data analytics, enabling deeper insights and more accurate predictions than ever before. Here are five key ways ML is transforming the field:",
      "First, anomaly detection has become significantly more sophisticated. Machine learning algorithms can now identify unusual patterns in data that would be impossible for humans to detect, helping organizations spot potential issues before they become major problems.",
      "Second, natural language processing is making it possible to derive meaningful insights from unstructured text data. This opens up vast new sources of information for analysis, from customer reviews and social media posts to support tickets and internal documentation.",
      "Third, automated feature engineering is streamlining the data preparation process. ML systems can now identify which variables are most predictive for a given problem, reducing the need for manual feature selection and transformation.",
      "Fourth, reinforcement learning is enabling more dynamic and adaptive optimization strategies. From pricing algorithms to resource allocation, ML models can continuously learn from outcomes and adjust their approach accordingly.",
      "Finally, explainable AI techniques are making machine learning models more transparent and interpretable. This is crucial for building trust in ML-driven insights and ensuring that automated decisions align with business goals and ethical considerations."
    ],
    date: "March 25, 2025",
    author: "Maya Patel",
    authorRole: "Lead AI Researcher",
    authorImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Machine Learning",
    videoId: "jGwO_UgTS7I",
    tags: ["Machine Learning", "Data Analytics", "AI", "Data Science"]
  },
  {
    id: 3,
    title: "Building Scalable Cloud Architectures for Modern Applications",
    content: [
      "In today's rapidly evolving digital landscape, building scalable cloud architectures is essential for organizations looking to remain competitive and responsive to changing market demands. The shift from monolithic applications to microservices-based architectures represents one of the most significant transformations in software design philosophies.",
      "Containerization technologies like Docker and orchestration platforms like Kubernetes have become fundamental building blocks for modern cloud-native applications. These tools enable developers to package applications and their dependencies into portable units that can run consistently across different environments, from development laptops to production cloud servers.",
      "Serverless computing models are further changing how organizations think about infrastructure. By abstracting away server management entirely, developers can focus solely on writing code while cloud providers handle scaling, availability, and resource allocation automatically.",
      "Edge computing is emerging as a crucial complement to centralized cloud resources, especially for applications with low-latency requirements or those that need to function in environments with limited connectivity. Distributing computing resources closer to where data is generated reduces latency and bandwidth usage while improving responsiveness.",
      "Finally, infrastructure as code (IaC) practices are enabling organizations to manage their cloud resources through version-controlled configuration files rather than manual processes. This approach improves consistency, enables automation, and facilitates disaster recovery by making infrastructure deployments reproducible and predictable."
    ],
    date: "March 18, 2025",
    author: "David Chen",
    authorRole: "Senior Software Architect",
    authorImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cloud Computing",
    videoId: "3LFZsKZIKLg",
    tags: ["Cloud Computing", "Scalability", "Microservices", "DevOps"]
  },
  {
    id: 4,
    title: "The Role of UX Design in Enterprise Software Adoption",
    content: [
      "Enterprise software adoption rates are increasingly being driven by user experience (UX) design quality. As employees have come to expect consumer-grade experiences in their work tools, organizations that neglect UX in their enterprise applications are facing significant adoption challenges.",
      "Research consistently shows that poor UX leads to reduced productivity, increased training costs, and higher levels of user frustration and error rates. Conversely, well-designed enterprise applications can drive efficiency gains, improve employee satisfaction, and reduce the need for extensive support resources.",
      "A human-centered design approach, involving actual users throughout the development process, is essential for creating enterprise software that truly meets user needs. This includes conducting user research, creating personas and journey maps, and regularly testing prototypes with representative users.",
      "Accessibility considerations are also becoming increasingly important in enterprise UX design. Creating software that can be effectively used by people with diverse abilities not only ensures compliance with regulations but also expands the potential user base and demonstrates corporate social responsibility.",
      "Finally, measuring the impact of UX improvements through metrics like task completion rates, time-on-task, error rates, and user satisfaction scores is critical for demonstrating the business value of investment in design. Organizations that tie UX metrics to business outcomes can make more compelling cases for continued investment in this area."
    ],
    date: "March 10, 2025",
    author: "Olivia Martinez",
    authorRole: "UX Design Lead",
    authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=500&h=500&q=80",
    image: "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "UX Design",
    videoId: "5CxXhyhT6Fc",
    tags: ["UX Design", "Enterprise Software", "User Experience", "Design Thinking"]
  },
  {
    id: 5,
    title: "Cybersecurity Trends for Technology Companies in 2025",
    content: [
      "As we navigate through 2025, technology companies are facing an increasingly sophisticated landscape of cybersecurity threats. Several key trends are shaping how organizations approach their security strategies.",
      "Zero Trust Architecture (ZTA) has moved from an emerging concept to an essential security framework. The principle of 'never trust, always verify' is now being applied comprehensively across networks, applications, and data stores, reflecting the recognition that perimeter-based security is no longer sufficient in today's distributed work environments.",
      "AI-powered security tools are becoming both a defense mechanism and a threat vector. While organizations leverage machine learning to detect anomalies and respond to incidents more quickly than human analysts could, adversaries are using similar technologies to develop more sophisticated attacks that can evade traditional detection methods.",
      "Supply chain security has become a top priority following several high-profile incidents affecting technology providers. Companies are implementing more rigorous vendor assessment processes, requiring software bills of materials (SBOMs), and adopting secure development practices throughout their supply chains.",
      "Quantum-resistant cryptography is moving from research labs into practical applications as quantum computing advances threaten to render current encryption methods obsolete. Forward-thinking organizations are beginning to implement post-quantum cryptographic algorithms to protect sensitive data against future threats.",
      "Finally, regulatory compliance is becoming increasingly complex as jurisdictions around the world implement and enforce new data protection and security requirements. Technology companies must navigate this fragmented regulatory landscape while maintaining agile development practices."
    ],
    date: "March 3, 2025",
    author: "James Wilson",
    authorRole: "VP of Engineering",
    authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=500&h=500&q=80",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cybersecurity",
    videoId: "inWWhr5tnEA",
    tags: ["Cybersecurity", "Zero Trust", "AI Security", "Quantum Computing", "Compliance"]
  },
  {
    id: 6,
    title: "How DevOps Practices Improve Software Quality and Delivery",
    content: [
      "DevOps practices continue to transform how organizations develop, deploy, and maintain software, with measurable improvements in both quality and delivery speed. The integration of development and operations teams, along with the adoption of automation throughout the software lifecycle, is yielding significant benefits for organizations that embrace these principles.",
      "Continuous Integration (CI) and Continuous Delivery (CD) pipelines have become standard practice, allowing teams to detect and address issues early in the development process. By automatically building and testing code changes whenever they're committed to version control, CI practices significantly reduce integration problems and improve code quality.",
      "Infrastructure as Code (IaC) has dramatically improved the consistency and reliability of deployment environments. By defining infrastructure configurations in version-controlled code, teams can ensure that development, testing, and production environments remain consistent, reducing the 'it works on my machine' problem that has plagued software development for decades.",
      "Automated testing at all levels—unit, integration, and end-to-end—is enabling teams to validate changes more thoroughly and quickly than would be possible with manual testing alone. This comprehensive testing approach, combined with production monitoring and observability tools, ensures that issues are caught before they impact users or are quickly identified and remediated if they do reach production.",
      "Finally, the cultural aspects of DevOps—emphasizing collaboration, shared responsibility, and continuous improvement—are perhaps the most important factors in achieving sustained success. Organizations that foster a blame-free culture where failures are viewed as learning opportunities are seeing higher levels of innovation and employee satisfaction."
    ],
    date: "February 25, 2025",
    author: "Sarah Johnson",
    authorRole: "Head of Product",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=500&h=500&q=80",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "DevOps",
    videoId: "M-ITAblHkZw",
    tags: ["DevOps", "CI/CD", "Automation", "Software Quality", "Agile"]
  }
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const postId = parseInt(id || "1");
  
  const post = blogPosts.find(post => post.id === postId);
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-6">The blog post you're looking for doesn't exist.</p>
            <Link to="/blogs" className="text-intellsurge-primary hover:text-intellsurge-accent">
              Return to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get related posts (excluding the current post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="w-full h-64 md:h-96 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}>
          <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <div className="mb-4">
                <span className="bg-intellsurge-primary px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto">
                {post.title}
              </h1>
              <div className="mt-6 flex items-center justify-center">
                <img 
                  src={post.authorImage} 
                  alt={post.author}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div className="text-left">
                  <p className="font-medium">{post.author}</p>
                  <p className="text-sm opacity-80">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <article className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-800">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {post.videoId && (
              <div className="my-10">
                <h3 className="text-2xl font-bold mb-6">Watch Related Video</h3>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src={`https://www.youtube.com/embed/${post.videoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-96"
                  ></iframe>
                </div>
              </div>
            )}
            
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="flex items-center">
                <img 
                  src={post.authorImage}
                  alt={post.author} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold">{post.author}</h4>
                  <p className="text-gray-600">{post.authorRole}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
        
        {relatedPosts.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-10 text-center">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map(relatedPost => (
                  <div key={relatedPost.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-all duration-300">
                    <Link to={`/blogs/${relatedPost.id}`}>
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-48 object-cover"
                      />
                    </Link>
                    <div className="p-6">
                      <Link to={`/blogs/${relatedPost.id}`}>
                        <h3 className="font-bold text-lg mb-2 hover:text-intellsurge-primary transition-colors">{relatedPost.title}</h3>
                      </Link>
                      <p className="text-sm text-gray-500 mb-2">{relatedPost.date} • {relatedPost.author}</p>
                      <Link 
                        to={`/blogs/${relatedPost.id}`} 
                        className="text-intellsurge-primary hover:text-intellsurge-accent font-medium text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Link 
                  to="/blogs" 
                  className="px-6 py-2 border border-intellsurge-primary text-intellsurge-primary hover:bg-intellsurge-primary hover:text-white transition-colors rounded-md inline-block font-medium"
                >
                  View All Posts
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
