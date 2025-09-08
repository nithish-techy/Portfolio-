import { Mail, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Get in touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'd love to hear from you! If you have any questions, project ideas, or just want to 
            connect, please feel free to reach out using the form below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="p-8 bg-white rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-12 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-12 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[150px] px-4 py-3 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />

                {/* Captcha Placeholder */}
                <div className="flex items-center space-x-3 p-4 border rounded-lg bg-gray-50">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm">I am human</span>
                  <div className="ml-auto text-xs text-gray-500">hCaptcha</div>
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center bg-black text-white rounded-lg py-3 font-medium hover:bg-gray-800 transition"
                >
                  Submit now <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="p-8 bg-white rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">nitheshmurugan70@gmail.com</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <button className="p-3 border rounded-full hover:border-blue-600 hover:text-blue-600 transition">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="p-3 border rounded-full hover:border-blue-600 hover:text-blue-600 transition">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="p-3 border rounded-full hover:border-blue-600 hover:text-blue-600 transition">
                    <Twitter className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Info</h3>
                <div className="space-y-3 text-gray-600">
                  <p>📍 Based in India</p>
                  
                  <p>⚡ Response time: Within 24 hours</p>
                  <p>🌐 Open to remote collaboration</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">
             Nithesh Kumar <span className="text-blue-600">M</span>
            </h2>
            <p className="text-gray-600 flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              nitheshmurugan70@gmail.com
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="https://github.com/nithish-techy" className="text-gray-600 hover:text-blue-600 transition">GitHub</a>
            <a href="https://www.linkedin.com/in/nitheshkumar08-m/" className="text-gray-600 hover:text-blue-600 transition">LinkedIn</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Indeed</a>
          </div>
          
          <p className="text-sm text-gray-500">
            © 2024 Nithesh Kumar M  . All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
