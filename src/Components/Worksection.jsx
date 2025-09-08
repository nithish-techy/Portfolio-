import { ExternalLink, ArrowRight } from "lucide-react";
import HotelBookingImg from "../assets/online hotel book.jpg"; // replace with your image
import BusBookingImg from "../assets/bus-booking.png.webp"; // replace with your image

const WorkSection = () => {
  const projects = [
    {
      title: "Hotel Booking System",
      category: "ASP.NET MVC Project",
      description: `
        Developed a Hotel Booking System using ASP.NET MVC with ADO.NET for database connectivity.
        The system allows users to search for available rooms, make reservations, cancel bookings, and process payments online.
        Admins can manage hotel rooms, bookings, and customers through a secure dashboard.
      `,
      tags: ["ASP.NET MVC", "ADO.NET", "SQL Server", "Bootstrap", "C#"],
      image: HotelBookingImg,
      live: "#", // update if hosted
      github: "#", // update GitHub repo link
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Online Bus Booking System",
      category: "ASP.NET MVC Project ADO.NET",
      description: `
        The Online Bus Booking System is a web-based application built using ASP.NET MVC and MS SQL Server 
        that allows users to search, book, and manage bus tickets efficiently.
        This system is designed to streamline the ticket booking process, providing a user-friendly 
        interface with secure payment options.
      `,
      tags: ["ASP.NET MVC", "MS SQL Server", "Entity Framework", "Bootstrap", "C#"],
      image: BusBookingImg,
      live: "#", // update if hosted
      github: "#", // update GitHub repo link
      color: "from-green-500 to-teal-600",
    },
  ];

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I have developed using .NET and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Project Image */}
              <div
                className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-white/90 text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                    {project.category}
                  </span>
                </div>
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow hover:bg-white group-hover:scale-110 transition-transform"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-700" />
                  </a>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs border rounded-full text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 font-medium hover:underline"
                    >
                      Live Demo
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 font-medium hover:underline"
                    >
                      GitHub
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
