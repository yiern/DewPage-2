import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { PageHeader } from "../components/PageHeader";
import { assets } from "../assets";
import { fontClasses } from "../utils/fontUtils";

export default function Eats() {
  const galleryImages = [
    {
      url: assets.LocalCuisine[0],
      alt: "Farm fresh food"
    },
    {
      url: assets.LocalCuisine[1],
      alt: "Organic vegetables plate"
    },
    {
      url: assets.LocalCuisine[2],
      alt: "Fresh fruit salad"
    },
    {
      url: assets.LocalCuisine[3],
      alt: "Farm to table"
    },
    {
      url: assets.LocalCuisine[4],
      alt: "Organic farm produce"
    },
    {
      url: assets.LocalCuisine[5],
      alt: "Healthy farm meal"
    },
    {
      url: assets.LocalCuisine[6],
      alt: "Fresh harvest vegetables"
    },
    {
      url: assets.LocalCuisine[7],
      alt: "Organic food display"
    },
    {
      url: assets.LocalCuisine[8],
      alt: "Farm fresh eggs"
    },
    {
      url: assets.LocalCuisine[9],
      alt: "Local cuisine specialty"
    }
  ];

  return (
    <div className={`bg-[#334b35] w-full min-h-screen ${fontClasses.container}`}>
      <Nav />
      
      <PageHeader 
        imageUrl={assets.HeaderPics[3]}
        imageAlt="Farm to table dining"
        verticalShiftPercent= {35}
      />
      
      <div className="py-[60px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-[1920px] mx-auto px-[30px] md:px-[60px] lg:px-[240px]">
          <div className="text-center mb-[50px] md:mb-[65px] lg:mb-[80px]">
            <p className={`text-[32px] md:text-[42px] lg:text-[50px] text-white mb-[20px] md:mb-[30px] ${fontClasses.heading}`}>Eat like a local</p>
            <p className={`text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] text-white max-w-[900px] mx-auto ${fontClasses.paragraph}`}>
             Taste the city's true soul by eating like a local, where every bite tells a story.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px]">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="aspect-square overflow-hidden rounded-[20px] hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}