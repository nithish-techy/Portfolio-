import { Code, GraduationCap, Briefcase } from "lucide-react";
import NitheshkumarProfile from "../assets/Nithysprofile.PNG";

const AboutSection = () => {
  const skills = [
    { name: "Languages", items: ["C#", "JavaScript"] },
    { name: "Frontend", items: ["React.js", "HTML5", "CSS3"] },
    { name: "Backend", items: ["C#", "ASP.NET MVC", "ASP.NET Core Web API", "ADO.NET"] },
    { name: "Database", items: ["MS SQL Server"] },
  ];

  const tools = [
    { name: "Visual Studio / VS Code", icon: "⚡" },
    { name: "Git & GitHub", icon: "🔧" },
    { name: "Postman", icon: "📮" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS (Basics)", icon: "☁️" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-blue-600 font-medium mb-3 uppercase tracking-wider">
            Introduction
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto mb-20">
          {/* Left Column - Profile Image */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group">
              <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-100 bg-white hover:shadow-blue-100 transition-all duration-500">
                <img
                  src={NitheshkumarProfile}
                  alt="NITHESHKUMAR M - Dotnet Developer Fresher"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-xl shadow-lg text-sm font-semibold whitespace-nowrap">
                DOTNET DEVELOPER (FRESHER)
              </div>
            </div>
          </div>

          {/* Right Column - About Text & Info Cards */}
          <div className="lg:col-span-8">
            {/* About Text */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">My Journey</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                ➢ I am a dedicated <strong>.NET Developer Fresher</strong> with strong knowledge in 
                <strong> C#, ASP.NET, and SQL Server</strong>. I enjoy building scalable and user-friendly 
                web applications while continuously learning new technologies.  
                <br /><br />
                ➢ During my academics, I worked on projects like an 
                <strong> Online Hotel Booking System</strong> and a 
                <strong> Voice-Based Email System</strong> for the visually impaired, 
                which improved my skills in problem-solving and full-stack development.  
                <br /><br />
                ➢ I am now seeking opportunities to contribute my skills and grow as a professional 
                in the software industry.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 text-center bg-white rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                <Code className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2 text-gray-800">Technologies</h3>
                <p className="text-sm text-gray-500">.NET, C#, SQL Server</p>
              </div>

              <div className="p-6 text-center bg-white rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                <GraduationCap className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2 text-gray-800">Education</h3>
                <p className="text-sm text-gray-500">B.Tech in Artificial Intelligence & Data Science</p>
              </div>

              <div className="p-6 text-center bg-white rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                <Briefcase className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2 text-gray-800">Projects</h3>
                <p className="text-sm text-gray-500">5+ Academic & Personal Projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <h4 className="font-semibold mb-6 text-blue-600 text-lg group-hover:text-blue-500 transition-colors">
                  {skill.name}
                </h4>
                <ul className="space-y-3">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Tools I Use
          </h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-6 py-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-2xl">{tool.icon}</span>
                <span className="font-medium text-gray-700">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
