import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { PageHeader } from "../components/PageHeader";
import { assets } from "../assets";
import { fontClasses } from "../utils/fontUtils";

function Frame29() {
  return (
    <div className={`flex flex-col gap-[10px] items-start justify-center text-[40px] leading-[48px] text-white ${fontClasses.paragraph}`}>
      <p className="text-[40px] font-semibold text-[var(--accent)]">🇸🇬 +65 96524933</p>
      <p className="text-[40px] font-semibold text-[var(--accent)]">🇲🇾 +60182025540</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="flex flex-col gap-[7px] items-start justify-center">
      <p className="text-[28px] leading-[36px] text-white uppercase">Phone</p>
      <Frame29 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="flex flex-col items-start justify-center">
      <p className="text-[40px] leading-[48px] text-white">segamat@dew.com</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="flex flex-col gap-[7px] items-start justify-center">
      <p className="text-[28px] leading-[36px] text-white uppercase">Email</p>
      <Frame30 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="flex flex-col items-start justify-center">
      <p className="text-[40px] leading-[48px] text-white">Buloh Kasap, Segamat, Johor, Malaysia</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="flex flex-col gap-[7px] items-start justify-center">
      <p className="text-[28px] leading-[36px] text-white uppercase">Address</p>
      <Frame31 />
    </div>
  );
}

function Contacts() {
  return (
    <div className="flex flex-col gap-[40px] items-start" data-name="contacts">
      <Frame5 />
      <Frame28 />
      <Frame32 />
    </div>
  );
}

function Text1() {
  return (
    <div className="flex flex-col gap-[50px] items-start" data-name="text">
      <Contacts />
    </div>
  );
}

export default function ContactUs() {
  return (
    <div className={`bg-[#334b35] w-full min-h-screen ${fontClasses.container}`}>
      <Nav />

      <PageHeader 
        imageUrl={assets.HeaderPics[2]}
        imageAlt="Contact farm office"
      />
      
      <div className="py-[60px] md:py-[80px] lg:py-[100px]" data-name="Contact Us">
        <div className="max-w-[1920px] mx-auto px-[10px] md:px-[20px] lg:px-[60px]">
          <div className="text-center mb-[50px] md:mb-[65px] lg:mb-[80px]">
            <p className={`text-[32px] md:text-[42px] lg:text-[50px] text-white mb-[20px] md:mb-[30px] ${fontClasses.heading}`}>Contact Us</p>
            <p className={`text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] text-white max-w-[900px] mx-auto ${fontClasses.paragraph}`}>
              We'd love to hear from you. Reach out to us for bookings, inquiries, or just to say hello.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_738px] gap-[40px] md:gap-[60px]">
            <Text1 />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127483.85789131693!2d102.91953!3d2.51667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1f2c3d3d3d3d3%3A0x3d3d3d3d3d3d3d3d!2sSegamat%2C%20Johor%2C%20Malaysia!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Segamat Location Map"
              className="h-[300px] md:h-[400px] lg:h-[500px] rounded-[10px]"
            />
          </div>
        </div>
        
      </div>

      <Footer />
    </div>
  );
}