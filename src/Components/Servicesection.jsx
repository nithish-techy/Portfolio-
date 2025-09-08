import { ArrowRight, Globe, Smartphone, Palette, Database } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Full Stack Web Development",
      description: "Complete web application development using MERN stack with responsive design and modern architecture.",
      icon: Globe,
      color: "blue",
      features: ["React.js Frontend", "Node.js Backend", "MongoDB Database", "RESTful APIs"]
    },
    {
      title: "Backend Development",
      description: "Robust server-side development with API design, database optimization, and cloud deployment.",
      icon: Database,
      color: "emerald",
      features: ["Express.js", "API Development", "Database Design", "Authentication"]
    },
    {
      title: "Frontend Development",
      description: "Modern, responsive user interfaces with React.js, focusing on performance and user experience.",
      icon: Palette,
      color: "pink",
      features: ["React.js", "TypeScript", "Responsive Design", "Performance Optimization"]
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native for iOS and Android platforms.",
      icon: Smartphone,
      color: "orange",
      features: ["React Native", "Cross-platform", "Native Performance", "App Store Deployment"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-2">What I offer</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">My services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I am a full stack developer specializing in MERN stack with expertise in building 
            scalable web applications and mobile solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-${service.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className={`w-8 h-8 text-${service.color}-600`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center text-blue-600 font-medium hover:underline group">
                  Read more 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
          <p className="text-gray-600 mb-8">
            Let's work together to bring your ideas to life with modern technology.
          </p>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Get Started <ArrowRight className="w-4 h-4 ml-2 inline-block" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
