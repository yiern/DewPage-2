import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { assets } from "../assets";
import { fontClasses } from "../utils/fontUtils";

export default function Projects() {
  const projects = [
    {
      title: "Sustainable Irrigation System",
      status: "Completed",
      year: "2023",
      description: "Implemented a state-of-the-art drip irrigation system across 500 acres, reducing water consumption by 40% while improving crop yield."
    },
    {
      title: "Organic Certification Program",
      status: "Ongoing",
      year: "2023",
      description: "Working with local farmers to achieve organic certification, providing training and resources for sustainable farming practices."
    },
    {
      title: "Community Farming Initiative",
      status: "Completed",
      year: "2022",
      description: "Established 15 community gardens in rural areas, empowering local communities with knowledge and tools for organic farming."
    },
    {
      title: "Solar-Powered Greenhouses",
      status: "In Progress",
      year: "2024",
      description: "Building eco-friendly greenhouses powered by renewable energy to extend growing seasons and reduce carbon footprint."
    },
    {
      title: "Crop Diversity Program",
      status: "Completed",
      year: "2022",
      description: "Introduced 20+ new organic crop varieties to help farmers diversify their produce and improve soil health."
    },
    {
      title: "Smart Farming Technology",
      status: "Planning",
      year: "2024",
      description: "Developing IoT-based monitoring systems to help farmers track soil health, weather conditions, and crop growth in real-time."
    }
  ];

  return (
    <div className={`bg-[#334b35] w-full min-h-screen ${fontClasses.container}`}>
      <div className="max-w-[1920px] mx-auto">
        <Nav />
      </div>
      
      {/* Hero Image */}
      <div className="relative h-[477px] overflow-hidden">
        <img 
          src={assets.HeaderPics[0]}
          alt="Agricultural project farmland"
          className="w-full h-full object-cover object-bottom"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(38, 60, 40) 0.70312%, rgba(38, 60, 40, 0.8) 0.69305%, rgba(0, 0, 0, 0) 100%, rgba(38, 60, 40, 0.22) 100%)",
          }}
        />
      </div>
      
      <div className="py-[100px]">
        <div className="max-w-[1920px] mx-auto px-[240px]">
          <div className="text-center mb-[80px]">
            <p className={`text-[20px] leading-[30px] text-white uppercase mb-[20px] ${fontClasses.heading}`}>Our Projects</p>
            <p className={`text-[50px] text-white mb-[30px] ${fontClasses.heading}`}>Transforming Agriculture</p>
            <p className={`text-[18px] leading-[27px] text-white max-w-[900px] mx-auto ${fontClasses.paragraph}`}>
              Explore our innovative projects that are making a real difference 
              in sustainable agriculture and community development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[30px]">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-[#263c28] rounded-[20px] p-[40px] text-white hover:bg-[#2d442f] transition-colors"
              >
                <div className="flex justify-between items-start mb-[20px]">
                  <div className="inline-block bg-[#f7c35f] px-[15px] py-[5px] rounded-[5px]">
                    <p className="text-[14px] text-[#1a1a1a] uppercase">{project.status}</p>
                  </div>
                  <p className="text-[16px] text-[#f7c35f]">{project.year}</p>
                </div>
                <p className="text-[28px] mb-[20px]">{project.title}</p>
                <p className="text-[16px] leading-[25px] text-white/80">{project.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-[80px] bg-[#263c28] p-[50px] rounded-[20px] text-center text-white">
            <p className="text-[40px] text-[#f7c35f] mb-[20px]">86,700+</p>
            <p className="text-[24px]">Successfully Completed Projects</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
