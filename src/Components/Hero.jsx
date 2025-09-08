import { Download } from "lucide-react";
import Nithesh from "../assets/Nithysprofile.PNG";
import Resume from "../assets/Nithesh Resume .pdf";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Profile Image */}
        <div className="mb-8 relative group">
          <div className="w-[140px] h-[140px] mx-auto rounded-full overflow-hidden shadow-xl ring-4 ring-blue-200 dark:ring-blue-800 transition-transform duration-300 group-hover:scale-105">
            <img
              src={Nithesh}
              alt="NITHESHKUMAR M - Dotnet Developer Fresher"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Intro */}
        <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-3">
          👋 Hi! I'm{" "}
          <span className="font-semibold">NITHESHKUMAR M</span>
        </h2>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          <span className="block text-gray-900 dark:text-white">
            DOTNET DEVELOPER
          </span>
          <span className="block text-blue-600 dark:text-blue-400">
            (FRESHER)
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          I am a passionate Dotnet Developer Fresher from India, eager to start
          my career in software development. Skilled in C#, ASP.NET MVC, .NET
          Core, SQL Server, and building scalable web applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Contact Me <span className="ml-2">→</span>
          </button>
          <a
            href={Resume} // replace with actual resume path
            download
            className="px-8 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-semibold text-lg flex items-center hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-transform transform hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" />
            My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
