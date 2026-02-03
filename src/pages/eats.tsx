import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { PageHeader } from "../components/PageHeader";
import { getLocalCuisineImage, getHeaderPic, LocalCuisineImage, HeaderPic } from "../assets";
import { fontClasses } from "../utils/fontUtils";

export default function Eats() {
  const galleryImages = [
    {
      url: getLocalCuisineImage(LocalCuisineImage.Food1),
      alt: "Farm fresh food"
    },
    {
      url: getLocalCuisineImage(LocalCuisineImage.Food2),
      alt: "Organic vegetables plate"
    },
    {
      url: getLocalCuisineImage(LocalCuisineImage.Food3),
      alt: "Fresh fruit salad"
    },
    {
      url: getLocalCuisineImage(LocalCuisineImage.Food4),
      alt: "Farm to table"
    },
    {
      url: getLocalCuisineImage(LocalCuisineImage.Food5),
      alt: "Organic farm produce"
    },
    {
      url: getLocalCuisineImage(LocalCuisineImage.Food6),
      alt: "Healthy farm meal"
    },
    {
      url: getLocalCuisineImage(LocalCuisineImage.Food7),
      alt: "Fresh harvest vegetables"
    },
    {
      url: getLocalCuisineImage(LocalCuisineImage.Food8),
      alt: "Organic food display"
    },
    {
      url: getLocalCuisineImage(LocalCuisineImage.Food9),
      alt: "Farm fresh eggs"
    },
    {
      url: getLocalCuisineImage(LocalCuisineImage.Food10),
      alt: "Local cuisine specialty"
    }
  ];

  return (
    <div className={`bg-[#334b35] w-full min-h-screen ${fontClasses.container}`}>
      <Nav />
      
      <PageHeader 
        imageUrl={getHeaderPic(HeaderPic.SocialMedia1)}
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