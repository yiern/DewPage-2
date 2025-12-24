// AboutUs folder
import aboutUs1 from "./AboutUs/IMG-20231104-WA0001.jpg";
import aboutUs2 from "./AboutUs/IMG-20231104-WA0054.jpg";

// HeaderPics folder
import headerPic1 from "./HeaderPics/20240309_154946.jpg";
import headerPic2 from "./HeaderPics/20241101_070811.jpg";
import headerPic3 from "./HeaderPics/20250720_094040.jpg";
import headerPic4 from "./HeaderPics/508996941_605514629233340_2197615693704207676_n.jpg";
import headerPic5 from "./HeaderPics/Hero-Picture.jpg";
import headerPic6 from "./HeaderPics/IMG-20231104-WA0003.jpg";

// Experience folder
import BerryPicking from "./Experience/BerryPicking.jpeg";
import FruitsHarvesting from "./Experience/FruitsHarvesting.jpg";
import HotSprings from "./Experience/HotSprings.jpg";

// LocalCuisine folder
import localCuisine1 from "./LocalCuisine/513491872_3420732791400446_5031367189669892808_n.jpg";
import localCuisine2 from "./LocalCuisine/514331841_10162832516908416_1655696835736148337_n.jpg";
import localCuisine3 from "./LocalCuisine/515435997_10162832517013416_1769519803530331649_n.jpg";
import localCuisine4 from "./LocalCuisine/515440552_10162832516638416_7809353888029296178_n.jpg";
import localCuisine5 from "./LocalCuisine/515442576_10162832516498416_4295326441234985257_n.jpg";
import localCuisine6 from "./LocalCuisine/515492336_10162832516943416_5182941793067804089_n.jpg";
import localCuisine7 from "./LocalCuisine/515503807_10162844457818416_8004931203226552571_n.jpg";
import localCuisine8 from "./LocalCuisine/515510840_10162832516818416_4521275919667916116_n.jpg";
import localCuisine9 from "./LocalCuisine/515561098_10162832516923416_5840001890163453439_n.jpg";
import localCuisine10 from "./LocalCuisine/food 1.jpg";

// App folder
const appImages = Object.values(
  import.meta.glob("./App/*.jpg", { eager: true, import: "default" })
);

export const assets = {
  AboutUs: [aboutUs1, aboutUs2],
  HeaderPics: [headerPic1, headerPic2, headerPic3, headerPic4, headerPic5, headerPic6],
  Experience: [BerryPicking, FruitsHarvesting, HotSprings],
  LocalCuisine: [localCuisine1, localCuisine2, localCuisine3, localCuisine4, localCuisine5, localCuisine6, localCuisine7, localCuisine8, localCuisine9, localCuisine10],
  App: appImages,
};

// Convenience exports for individual access
export const { AboutUs, HeaderPics, Experience, LocalCuisine, App } = assets;
