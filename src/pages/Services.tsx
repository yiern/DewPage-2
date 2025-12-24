import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { assets } from "../assets";
import { fontClasses } from "../utils/fontUtils";

export default function Services() {
  const services = [
    {
      title: "Organic Farming Consultation",
      description: "Expert guidance on transitioning to organic farming practices, soil health management, and sustainable crop production.",
      icon: "🌱"
    },
    {
      title: "Crop Planning & Management",
      description: "Comprehensive planning services to maximize yield while maintaining soil health and biodiversity.",
      icon: "📋"
    },
    {
      title: "Sustainable Irrigation Solutions",
      description: "Design and implementation of water-efficient irrigation systems tailored to your farm's needs.",
      icon: "💧"
    },
    {
      title: "Soil Testing & Analysis",
      description: "Detailed soil analysis to determine nutrient levels, pH balance, and recommendations for optimal crop growth.",
      icon: "🧪"
    },
    {
      title: "Organic Certification Support",
      description: "Complete assistance with obtaining and maintaining organic certification for your farm.",
      icon: "✓"
    },
    {
      title: "Training & Workshops",
      description: "Regular training sessions and workshops on modern farming techniques, pest management, and organic practices.",
      icon: "📚"
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
          src={assets.HeaderPics[1]}
          alt="Farming services and agriculture"
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
            <p className={`text-[20px] leading-[30px] text-white uppercase mb-[20px] ${fontClasses.heading}`}>Our Services</p>
            <p className={`text-[50px] text-white mb-[30px] ${fontClasses.heading}`}>What We Offer</p>
            <p className={`text-[18px] leading-[27px] text-white max-w-[900px] mx-auto ${fontClasses.paragraph}`}>
              Comprehensive agricultural services designed to help you succeed 
              in sustainable and organic farming.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-[30px] mb-[80px]">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-[#263c28] rounded-[20px] p-[40px] text-white hover:bg-[#2d442f] transition-colors"
              >
                <div className="size-[80px] bg-[#f7c35f] rounded-full flex items-center justify-center text-[40px] mb-[30px]">
                  {service.icon}
                </div>
                <p className="text-[24px] mb-[20px]">{service.title}</p>
                <p className="text-[16px] leading-[25px] text-white/80">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#263c28] rounded-[20px] p-[60px] text-white text-center">
            <p className="text-[40px] mb-[20px]">Need Custom Solutions?</p>
            <p className="text-[18px] leading-[27px] text-white/80 max-w-[800px] mx-auto mb-[40px]">
              Every farm is unique. Contact us to discuss your specific needs 
              and we'll create a customized service package just for you.
            </p>
            <button className="bg-[#f7c35f] px-[50px] py-[25px] rounded-[20px]">
              <p className="text-[15px] text-[#1a1a1a] uppercase">Get in Touch</p>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}