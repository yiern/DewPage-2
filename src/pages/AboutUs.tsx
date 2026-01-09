import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { PageHeader } from "../components/PageHeader";
import { assets } from "../assets";
import { fontClasses } from "../utils/fontUtils";

export default function AboutUs() {
  return (
    <div className={`bg-[#334b35] w-full min-h-screen ${fontClasses.container}`}>
      <Nav />
      
      <PageHeader 
        imageUrl={assets.AboutUs[2]}
        imageAlt="Layout of house"
        verticalShiftPercent= {50}
      />
      
      <div className="py-[60px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-[1920px] mx-auto px-[30px] md:px-[60px] lg:px-[240px]">
          <div className="text-center mb-[50px] md:mb-[65px] lg:mb-[80px]">
            <p className={`text-[32px] md:text-[42px] lg:text-[50px] text-white mb-[20px] md:mb-[30px] ${fontClasses.heading}`}>Dew @ Segamat</p>
            <p className={`text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] text-white max-w-[900px] mx-auto ${fontClasses.paragraph}`}>
              Experience the freshness and beauty of the fruit orchard. Break away from the hustle and bustle of everyday life, enjoy the serenity and the sweetness of nature."

            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[60px] text-white">
            <div className="bg-[#263c28] p-[35px] md:p-[50px] rounded-[20px]">
              <p className="text-[24px] md:text-[30px] text-[#f7c35f] mb-[15px] md:mb-[20px]">Where we are</p>
              <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[27px]">
                We are located at Buloh Kasap, Segamat, Johor, Malaysia
              </p>
            </div>

            <div className="bg-[#263c28] p-[35px] md:p-[50px] rounded-[20px]">
              <p className="text-[24px] md:text-[30px] text-[#f7c35f] mb-[15px] md:mb-[20px]">Our Mission</p>
              <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[27px]">
              Experience the freshness and beauty of the fruit orchard. 
              Break away from the hustle and bustle of everyday life, enjoy the serenity and the sweetness of nature.
              </p>
            </div>
          </div>

          <div className="mt-[50px] md:mt-[65px] lg:mt-[80px] bg-[#263c28] p-[35px] md:p-[50px] rounded-[20px] text-white">
            <p className="text-[24px] md:text-[30px] text-[#f7c35f] mb-[20px] md:mb-[30px]">The Property</p>
             <p className="text-[18px] md:text-[22px] mb-[15px] text-center">desc of house</p>
            <div className="mt-[30px] md:mt-[40px] rounded-[10px] overflow-hidden">
              <img
                src={assets.AboutUs[1]}
                alt="Experience the freshness and beauty of the fruit orchard. Break away from the hustle and bustle of everyday life, enjoy the serenity and the sweetness of nature."
                className="w-full h-[250px] md:h-[350px] lg:h-[400px] object-cover object-bottom"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[40px] mt-[30px] md:mt-0">
              <div>
                <p className="text-[18px] md:text-[22px] mb-[15px] text-center">Rooms</p>
                <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-white/80 text-center">
                  4 En-Suite Bedrooms <br></br>
                    Queen Size bed<br></br>
                  Air conditioning & Ceiling fan <br></br>
                  Table & chair <br></br>
                </p>
              </div>
              <div>
                <p className="text-[18px] md:text-[22px] mb-[15px] text-center">Facilities</p>
                <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] text-white/80 text-center">
                  Wifi<br></br>
                  Projector (on-request)<br></br>
                  Fully Equipped kitchen<br></br>
                  8-Seater indoor dinining table<br></br>
                  Outdoor Seating<br></br>
                  
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}