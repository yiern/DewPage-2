import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { fontClasses } from "./utils/fontUtils";
import AboutUs from "./pages/AboutUs";
import OurProducts from "./pages/OurProducts";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Eats from "./pages/eats";
import { assets } from "./assets";


// Imports for OurIntroduction
import svgPathsIntro from "./imports/svg-s2k3qo3u60";
const imgImage6 = assets.App[0];
import heroPictureMain from "./assets/App/HeroPictureMain.jpg";

// Imports for FromTheBlog
import svgPaths from "./imports/svg-fvw05tb62m";
const imgImage26 = assets.App[4];
const imgImage27 = assets.App[5];
const imgImage28 = assets.App[3];

// Imports for AgricultureMattersVideoSection
import svgPathsVideo from "./imports/svg-8a2thhds0u";

// ============== HeroSection Component ==============
function HeroSection() {
  return (
    <div
      className="relative h-[500px] md:h-[700px] lg:h-[954px] overflow-hidden"
      data-name="Hero Section"
    >
      <div className="absolute inset-0">
        <img
          alt=""
          className="w-full h-full object-cover"
          src={heroPictureMain as string}
        />
        <div
          className="absolute inset-0"
          style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(15,26,19,0.92) 0%, rgba(42,76,52,0.9) 40%, rgba(20,34,24,0.78) 70%, rgba(12,20,14,0.65) 100%)",
          }}
        />
      </div>
      <div className="max-w-[1920px] mx-auto px-[30px] md:px-[60px] lg:px-[240px] relative h-full flex items-center">
        <div className="w-full lg:w-[730px]">
          <div className="flex flex-col gap-[20px] md:gap-[30px]">
            <div className="flex flex-col gap-[15px] md:gap-[20px]">
              <p className={`text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[30px] text-white uppercase ${fontClasses.paragraph}`}>
                Welcome to Dew@Segamat
              </p>
              <p className={`text-[32px] md:text-[48px] lg:text-[65px] leading-[38px] md:leading-[56px] lg:leading-[75px] text-white ${fontClasses.heading}`}>
                Unique Farmstay experience in Malaysia
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-[15px] md:gap-[30px]">
              <Link to="/about">
                <button className="bg-[#f7c35f] px-[30px] md:px-[50px] py-[18px] md:py-[25px] rounded-[20px] w-full sm:w-auto">
                  <p className="text-[13px] md:text-[15px] text-[#1a1a1a] uppercase">
                    Discover More
                  </p>
                </button>
              </Link>
              <Link to="/products">
                <button className="border-2 border-white px-[30px] md:px-[50px] py-[18px] md:py-[25px] rounded-[20px] w-full sm:w-auto">
                  <p className="text-[13px] md:text-[15px] text-white uppercase">
                    Our Products
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============== OurIntroduction Component ==============
const CheckIcon = () => (
  <svg className="block size-6" fill="none" viewBox="0 0 24 24">
    <path d={svgPathsIntro.p1fdc8f40} fill="#F7C35F" />
  </svg>
);


function OurIntroduction() {

  return (
    <div className="relative py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="absolute left-0 top-0 bg-[#263c28] h-[300px] md:h-[400px] lg:h-[497px] w-[300px] md:w-[500px] lg:w-[658px] hidden md:block" />
      <div className="absolute left-[100px] md:left-[160px] lg:left-[220px] top-[280px] md:top-[380px] lg:top-[473px] bg-[#f7c35f] h-[150px] md:h-[200px] lg:h-[258px] w-[15px] lg:w-[20px] rounded-l-[5px] hidden md:block" />

      <div className="max-w-[1920px] mx-auto px-[30px] md:px-[60px] lg:px-[240px] relative">
        <div className="grid grid-cols-1 lg:grid-cols-[564px_1fr] gap-[40px] md:gap-[60px] lg:gap-[80px]">
          <div className="relative">
            <div className="h-[400px] md:h-[550px] lg:h-[651px] w-full lg:w-[564px] rounded-[10px] overflow-hidden">
              <img
                alt=""
                className="w-full h-full object-cover"
                src={assets.App[1] as string}
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex flex-col gap-[35px] md:gap-[45px] lg:gap-[55px]">
              <div className="flex flex-col gap-[15px] md:gap-[20px] text-white">
              <div className={`text-[32px] md:text-[42px] lg:text-[50px] leading-[40px] md:leading-[50px] lg:leading-[60px] ${fontClasses.heading}`}>
                <p>Dew@Segamat</p>
              </div>
              </div>

              <div className="flex flex-col gap-[15px] md:gap-[20px]">
                <p className={`text-[20px] md:text-[26px] lg:text-[30px] text-[#f7c35f] ${fontClasses.paragraph}`}>
                  A place for personal spiritual encounter,
                  experiencing life in simplicity on the modern
                  comfortable farm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// ============== FromTheBlog Component ==============
const UserIcon = () => (
  <svg className="block size-5" fill="none" viewBox="0 0 20 20">
    <path
      d={svgPaths.p27365a00}
      stroke="#F7C35F"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d={svgPaths.p32ab0300}
      stroke="#F7C35F"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface NewsProps {
  image: string;
  title: string;
  comments?: string;
}

function NewsCard({ image, title }: NewsProps) {
  return (
    <div className="h-[350px] md:h-[450px] lg:h-[514px] overflow-clip rounded-[10px] w-full sm:w-[350px] md:w-[400px] lg:w-[460px] mx-auto">
      <div className="bg-[#2d442f] h-full relative">
        <div className="h-full w-full overflow-hidden">
          <img
            alt=""
            className="w-full h-full object-cover"
            src={image}
          />
        </div>
      </div>
    </div>
  );
}

interface CarouselNavButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}

function CarouselNavButton({
  direction,
  onClick,
}: CarouselNavButtonProps) {
  const Icon =
    direction === "prev" ? ChevronLeft : ChevronRight;
  const position = direction === "prev" ? "left-0" : "right-0";

  return (
    <button
      onClick={onClick}
      className={`absolute ${position} z-10 w-[50px] h-[50px] flex items-center justify-center bg-[#f7c35f]/20 hover:bg-[#f7c35f]/40 rounded-full transition-all duration-300`}
      aria-label={`${direction === "prev" ? "Previous" : "Next"} slide`}
    >
      <Icon className="w-[30px] h-[30px] text-[#f7c35f]" />
    </button>
  );
}

interface CarouselDotsProps {
  total: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}

function CarouselDots({
  total,
  activeIndex,
  onDotClick,
}: CarouselDotsProps) {
  return (
    <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 flex gap-[15px]">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-[12px] rounded-full transition-all duration-300 ${
            index === activeIndex
              ? "bg-[#f7c35f] w-[30px]"
              : "bg-white/30 hover:bg-white/50 w-[12px]"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

interface Article {
  image: string;
  title: string;
}

const ARTICLES: Article[] = [
  {
    image: imgImage26 as string,
    title: "Taking seamless key indicators offline to",
  },
  {
    image: imgImage27 as string,
    title: "Override the digital divide",
  },
  {
    image: imgImage28 as string,
    title: "Organically grow the holistic world view",
  },
];

const AUTO_ROTATE_INTERVAL = 5000;

function useCarousel(
  totalSlides: number,
  autoRotate = true,
  interval = AUTO_ROTATE_INTERVAL,
) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoRotate) return;

    const timer = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % totalSlides,
      );
    }, interval);

    return () => clearInterval(timer);
  }, [totalSlides, autoRotate, interval]);

  const goToNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % totalSlides,
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return { currentIndex, goToNext, goToPrevious, goToSlide };
}

function FromTheBlog() {
  const { currentIndex, goToNext, goToPrevious, goToSlide } =
    useCarousel(ARTICLES.length);

  return (
    <div className="py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="max-w-[1920px] mx-auto px-[30px] md:px-[60px] lg:px-[240px]">
        <div className="flex flex-col gap-[15px] md:gap-[20px] items-center text-white mb-[60px] md:mb-[90px] lg:mb-[113px]">
          <p className={`text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[30px] uppercase ${fontClasses.paragraph}`}>
            {/* Place Holder*/}   
          </p>
          <p className={`text-[32px] md:text-[42px] lg:text-[50px] text-center ${fontClasses.heading}`}>
           FROM THE BLOG
          </p>
        </div>

        <div className="relative h-[350px] md:h-[450px] lg:h-[514px] flex items-center justify-center">
          <CarouselNavButton
            direction="prev"
            onClick={goToPrevious}
          />

          <div className="relative w-full max-w-[1440px] h-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {ARTICLES.map((article, index) => (
                <div
                  key={index}
                  className="min-w-full flex items-center justify-center px-[20px] md:px-0"
                >
                  <NewsCard {...article} />
                </div>
              ))}
            </div>
          </div>

          <CarouselNavButton
            direction="next"
            onClick={goToNext}
          />

          <CarouselDots
            total={ARTICLES.length}
            activeIndex={currentIndex}
            onDotClick={goToSlide}
          />
        </div>
      </div>
    </div>
  );
}


function ContactSection() {
  const contactInfo = [
    {
      label: "Phone",
      values: ["🇸🇬 +65 96524933", "🇲🇾 +60 182025540"],
    },
    { label: "Email", values: ["Segamat@dew.com"] },
    {
      label: "Address",
      values: ["Buloh Kasap, Segamat, Johor, Malaysia"],
    },
  ];

  return (
    <div className="py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="max-w-[1920px] mx-auto px-[30px] md:px-[60px] lg:px-[240px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_738px] gap-[30px] md:gap-[38px]">
          {/* Contact Info */}
          <div className="flex flex-col gap-[35px] md:gap-[50px]">
            <div className="flex flex-col gap-[35px] md:gap-[45px] text-white">
              <div className="flex flex-col gap-[15px] md:gap-[20px]">
                <p className={`text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] uppercase ${fontClasses.paragraph}`}>
                  {/* Contacts */}
                </p>
                <p className={`text-[32px] md:text-[42px] lg:text-[50px] ${fontClasses.heading}`}>
                  Contacts
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[30px] md:gap-[40px]">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-[7px]"
                >
                  <p className={`text-[12px] md:text-[14px] leading-[24px] md:leading-[30px] text-white uppercase ${fontClasses.paragraph}`}>
                    {info.label}
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    {info.values.map((value, j) => (
                      <p
                        key={j}
                        className={`text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[27px] text-white ${fontClasses.paragraph}`}
                      >
                        {value}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Google Maps */}
          <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-[10px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127483.85789131693!2d102.91953!3d2.51667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1f2c3d3d3d3d3%3A0x3d3d3d3d3d3d3d3d!2sSegamat%2C%20Johor%2C%20Malaysia!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Segamat Location Map"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ============== HomePage Component ==============
function HomePage({
  selectedFood,
  setSelectedFood,
}: {
  selectedFood: string;
  setSelectedFood: (food: string) => void;
}) {
  return (
    <div className={`bg-[#334b35] w-full min-h-screen ${fontClasses.container}`}>
      <Nav />
      <HeroSection />
      <OurIntroduction />
      {/* <PopularFoodsAndVegetables selectedFood={selectedFood} setSelectedFood={setSelectedFood} /> */}
      {/* <AgricultureMattersVideoSection selectedFood={selectedFood} /> */}
      <FromTheBlog />
      <ContactSection />
      <Footer />
    </div>
  );
}

// ============== Main App Component ==============
export default function App() {
  const [selectedFood, setSelectedFood] =
    useState("Strawberry");

  return (
    <BrowserRouter basename="/DewPage-2">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              selectedFood={selectedFood}
              setSelectedFood={setSelectedFood}
            />
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<OurProducts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/eats" element={<Eats />} />
      </Routes>
    </BrowserRouter>
  );
}