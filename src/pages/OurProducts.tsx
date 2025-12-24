import React, { useState } from "react";
import { X } from "lucide-react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { PageHeader } from "../components/PageHeader";
import { assets } from "../assets";
import { fontClasses } from "../utils/fontUtils";

interface Experience {
  id: number;
  image: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  imagePosition?: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    image: assets.Experience[0],
    alt: "Body and Face Wellness",
    category: "Wellness",
    title: "Body and Face Wellness",
    description: "Massage and facial wellness are key components of a holistic self-care routine. Regular massages help to relieve tension, improve circulation, and reduce stress, which contributes to overall physical and mental health.",
    imagePosition: "object-bottom"
  },
  {
    id: 2,
    image: assets.Experience[2],
    alt: "Hot Springs",
    category: "Nature",
    title: "Hot Springs",
    description: "Approximately 45-minute drive from the Farm, where you can indulge in the rejuvenating natural hot spring water sourced from underground",
    imagePosition: "object-bottom"
  },
  {
    id: 3,
    image: assets.Experience[1],
    alt: "Fruits Harvesting (Seasonal)",
    category: "Farm",
    title: "Fruits Harvesting (Seasonal)",
    description: "Nestled amidst the fruit orchard, various fruits await you, depending on the season, easily accessible. You can witness the fruit harvesting firsthand and enjoy them right on the spot. Become the caretaker of the thriving trees, enriching the land with the residual fruits as a natural fertilizer.",
    imagePosition: "object-center"
  },
  {
    id: 4,
    image: assets.HeaderPics[0],
    alt: "Hiking",
    category: "Adventure",
    title: "Hiking",
    description: "Stroll through the rubber tree plantation and durian orchard.You might be able to witness the 'King of Fruits' descending from the trees.",
    imagePosition: "object-bottom"
  },
  {
    id: 5,
    image: assets.HeaderPics[1],
    alt: "Water Fall Outing",
    category: "Nature",
    title: "Water Fall Outing",
    description: "Experience a captivating waterfall that immerses you in rushing water.",
    imagePosition: "object-bottom"
  },
  {
    id: 6,
    image: assets.HeaderPics[2],
    alt: "Vegetable Seeding",
    category: "Farm",
    title: "Vegetable Seeding",
    description: "Growing vegetables starts with sowing or seedling. Vegetable sowing means putting a seed directly into the prepared soil. On the other hand, vegetable planting includes the practice of putting already-grown seedlings into the soil.",
    imagePosition: "object-bottom"
  }
];

export default function OurProducts() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className={`bg-[#334b35] w-full min-h-screen ${fontClasses.container}`}>
      <Nav />
      
      <PageHeader 
        imageUrl={assets.HeaderPics[5]}
        imageAlt="Organic produce and vegetables"
      />
      
      <div className="py-[60px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-[1920px] mx-auto px-[15px] md:px-[30px] lg:px-[120px]">
          <div className="text-center mb-[50px] md:mb-[65px] lg:mb-[80px]">
            <p className={`text-[32px] md:text-[42px] lg:text-[50px] text-white mb-[20px] md:mb-[30px] ${fontClasses.heading}`}>Experiences</p>
            <p className={`text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] text-white max-w-[900px] mx-auto ${fontClasses.paragraph}`}>
              Make memories in this special corner of Malaysia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] md:gap-[20px]">
            {experiences.map((experience) => (
              <div key={experience.id} className="relative">
                {expandedCard === experience.id ? (
                  // Expanded Card
                  <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
                    onClick={() => setExpandedCard(null)}
                  >
                    <div 
                      className="relative bg-[#263c28] rounded-[20px] overflow-hidden max-w-[1000px] w-full shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => setExpandedCard(null)}
                        className="absolute top-0 left-0 z-10 bg-[#f7c35f] hover:bg-[#e5b24d] rounded-full p-[10px] transition-colors cursor-pointer m-10"
                        aria-label="Close"
                      >
                        <X className="w-[24px] h-[24px] text-[#1a1a1a]" />
                      </button>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Left: Image */}
                        <div className="overflow-hidden">
                          <img 
                            src={experience.image} 
                            alt={experience.alt}
                            className={`w-full h-full object-cover ${experience.imagePosition || 'object-center'}`}
                            style={{ maxHeight: '85vh' }}
                          />
                        </div>
                        
                        {/* Right: Title and Description */}
                        <div className="p-[30px] md:p-[40px] flex flex-col justify-start overflow-y-auto" style={{ maxHeight: '85vh' }}>
                          <div className="inline-block bg-[#f7c35f] px-[15px] py-[5px] rounded-[5px] mb-[20px] self-start">
                            <p className="text-[12px] md:text-[14px] text-[#1a1a1a] uppercase font-semibold">{experience.category}</p>
                          </div>
                          <h3 className="text-[24px] md:text-[28px] lg:text-[32px] text-white mb-[20px] font-bold">{experience.title}</h3>
                          <p className="text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] text-white/90">{experience.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Collapsed Card
                  <button
                    onClick={() => handleCardClick(experience.id)}
                    className="bg-[#263c28] rounded-[20px] overflow-hidden text-white hover:bg-[#2d442f] transition-all hover:shadow-lg hover:scale-[1.02] w-full text-left cursor-pointer flex flex-col h-[320px]"
                  >
                    <div className="h-[220px] w-full overflow-hidden flex-shrink-0">
                      <img 
                        src={experience.image} 
                        alt={experience.alt}
                        className={`w-full h-full object-cover ${experience.imagePosition || 'object-center'}`}
                      />
                    </div>
                    <div className="p-[20px] flex-1 flex flex-col justify-between overflow-hidden">
                      <div className="inline-block bg-[#f7c35f] px-[12px] py-[5px] rounded-[5px] self-start flex-shrink-0">
                        <p className="text-[12px] text-[#1a1a1a] uppercase font-semibold">{experience.category}</p>
                      </div>
                      <p className="text-[19px] font-bold line-clamp-2 leading-[1.2]">{experience.title}</p>
                    </div>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}