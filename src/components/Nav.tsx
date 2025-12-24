import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import svgPaths from "../imports/svg-fvw05tb62m";

function ActiveMenuItem({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex flex-col gap-[3px] items-start"
      data-name="Active_MenuItem"
    >
      <p className="text-[18px] leading-[30px] text-white">
        {children}
      </p>
      <div className="h-[2px] w-[53px] bg-[#f7c35f]" />
    </div>
  );
}

function DesktopMenu() {
  const location = useLocation();
  
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Experiences" },
    { path: "/eats", label: "Eats" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <div
      className="hidden lg:flex gap-[50px] items-center"
      data-name="menu"
    >
      {menuItems.map((item) => (
        <Link key={item.path} to={item.path}>
          {location.pathname === item.path ? (
            <ActiveMenuItem>{item.label}</ActiveMenuItem>
          ) : (
            <p className="text-[18px] leading-[30px] text-white cursor-pointer hover:text-[#f7c35f] transition-colors">
              {item.label}
            </p>
          )}
        </Link>
      ))}
    </div>
  );
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const location = useLocation();
  
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Experiences" },
    { path: "/eats", label: "Eats" },
    { path: "/contact", label: "Contact Us" },
  ];

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div 
        className={`lg:hidden fixed top-[110px] right-0 bottom-0 w-[280px] bg-[#263c28] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-[8px] px-[25px] py-[30px] h-full overflow-y-auto">
          {menuItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              onClick={onClose}
              className="group"
            >
              <div className={`py-[15px] px-[20px] rounded-[12px] transition-all duration-200 ${
                location.pathname === item.path 
                  ? 'bg-[#f7c35f]/20' 
                  : 'hover:bg-[#334b35] hover:translate-x-[5px]'
              }`}>
                {location.pathname === item.path ? (
                  <div className="flex flex-col gap-[6px]">
                    <p className="text-[20px] leading-[28px] text-white font-medium">
                      {item.label}
                    </p>
                    <div className="h-[3px] w-[40px] bg-[#f7c35f] rounded-full" />
                  </div>
                ) : (
                  <p className="text-[20px] leading-[28px] text-white/90 group-hover:text-[#f7c35f] transition-colors">
                    {item.label}
                  </p>
                )}
              </div>
            </Link>
          ))}
          
          {/* Divider */}
          <div className="my-[10px] h-[1px] bg-white/10" />
          
          {/* Additional Info */}
          <div className="mt-auto pt-[20px] pb-[10px]">
            <div className="px-[20px] py-[15px] bg-[#334b35]/50 rounded-[12px]">
              <p className="text-[12px] text-white/60 uppercase tracking-wider mb-[8px]">Contact</p>
              <p className="text-[14px] text-white/90 leading-[20px]">
                🇸🇬 +65 96524933<br />
                🇲🇾 +60 182025540
              </p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#334b35] h-[110px] w-full sticky top-0 z-50" data-name="nav">
        <div className="h-full flex items-center justify-between px-[30px] bg-[#436647] py-[0px]">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <div
              className="h-[30.952px] flex items-center"
              data-name="Logo"
            >
              <p className="text-white text-[20px] lg:text-[24px] font-medium">Dew@segamat</p>
            </div>
          </Link>
          <DesktopMenu />
          <button
            className="lg:hidden text-white z-50 p-[8px] hover:bg-white/10 rounded-[8px] transition-colors active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={28} className="transition-transform duration-200" />
            ) : (
              <Menu size={28} className="transition-transform duration-200" />
            )}
          </button>
        </div>
      </div>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}