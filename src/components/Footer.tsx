import { Link } from "react-router-dom";
import svgPaths from "../imports/svg-fvw05tb62m";


function Text() {
  return (
    <div
      className="flex flex-col gap-[20px] md:gap-[30px] items-start text-white"
      data-name="text"
    >
      <p className="text-[18px] md:text-[22px]">Newsletter</p>
      <p className="text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] max-w-[315px]">
        Subscribe to our weekly Newsletter and receive updates
        via email.
      </p>
    </div>
  );
}

function Button() {
  return (
    <button
      className="absolute right-[5px] top-1/2 -translate-y-1/2 size-[45px] rounded-full bg-[#F7C35F] flex items-center justify-center"
      data-name="Button"
    >
      <p className="text-[15px] text-[#1a1a1a] uppercase">Go</p>
    </button>
  );
}

function InputField() {
  return (
    <div
      className="h-[55px] relative w-[315px]"
      data-name="input field"
    >
      <div className="absolute bg-[#263c28] h-[55px] left-0 rounded-[50px] top-0 w-[315px]" />
      <input
        type="email"
        placeholder="Enter your mail here..."
        className="absolute left-[20px] top-1/2 -translate-y-1/2 bg-transparent text-[14px] text-[rgba(255,255,255,0.5)] outline-none w-[240px]"
      />
      <Button />
    </div>
  );
}

function Newsletter() {
  return (
    <div
      className="flex flex-col gap-[24px] items-start"
      data-name="Newsletter"
    >
      <Text />
      <InputField />
    </div>
  );
}


function LogoDescription() {
  return (
    <div
      className="flex flex-col gap-[25px] items-start"
      data-name="Logo & description"
    >
      <Link to="/">
        <div
          className="h-[30.952px] w-[197.461px]"
          data-name="Logo"
        >
          Dew @ Segamat
        </div>
      </Link>
      <p className="text-[16px] leading-[25px] text-white w-[630px]">
        Create magical memories 
      </p>
    </div>
  );
}

function RiFacebookFill() {
  return (
    <div className="size-[24px]" data-name="ri:facebook-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="ri:facebook-fill">
          <path
            d={svgPaths.p32db6580}
            fill="#F7C35F"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}



function BasilInstagramSolid() {
  return (
    <div
      className="size-[24px]"
      data-name="basil:instagram-solid"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="basil:instagram-solid">
          <path
            d={svgPaths.p17fc7cf0}
            fill="#F7C35F"
            id="Vector"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p34f37a30}
            fill="#F7C35F"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function SocialIcon() {
  return (
    <div
      className="flex gap-[30px] items-start"
      data-name="Social icon"
    >
      <RiFacebookFill />
      <BasilInstagramSolid />
    </div>
  );
}

function LogoDescriptionSocialIcons() {
  return (
    <div
      className="flex flex-col gap-[34px] items-start"
      data-name="Logo, description & Social icons"
    >
      <LogoDescription />
      <div
        className="h-0 w-[630px] border-t border-white/20"
        data-name="Dividor"
      />
      <SocialIcon />
    </div>
  );
}

export function Footer() {
  return (<div></div>
    
    // <div className="bg-[#334b35] py-[90px]" data-name="footer">
    //   <div className="max-w-[1920px] mx-auto px-[240px]">
    //     <div className="grid grid-cols-[630px_1fr_315px] gap-[100px] mb-[50px]">
    //       <LogoDescriptionSocialIcons />
    //       <div></div>
          
    //       <Newsletter />
    //     </div>
        
    //   </div>
    // </div>
  );
}