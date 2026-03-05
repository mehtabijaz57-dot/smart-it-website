"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedButton from "../animation/AnimatedButton";
import { usePathname } from "next/navigation";
import ThemeSwitcherButton from "./ColorSwitcher";

export default function Header1() {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHidden(currentScrollPos > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={`mxd-header ${isHidden ? "is-hidden" : ""}`}>
      {/* header logo */}
      <div className="mxd-header__logo loading__fade">
        <Link href={`https://www.smartitdigital.com`} className="mxd-logo">
          {/* logo icon */}

           <img style={{width:'200px', paddingRight:'30px'}} src="/img/illustrations/logo_smart_it0.png"
            
            alt="logo" />
           
          {/* <span className="mxd-logo__text">
            Smart
            <br />
            IT Digital
          </span> */}
        </Link>
      </div>
      {/* header controls */}
      <div className="mxd-header__controls loading__fade">
        <ThemeSwitcherButton />

        {pathname == "/" || pathname == "/preview" ? (
          <AnimatedButton
            text="Free Consultation"
            className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right"
            href="/contact"
          
          >
            <i className="ph-bold ph-arrow-right" />
          </AnimatedButton>
        ) : (
          <AnimatedButton
            text="Free Consultation"
            className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right"
           href="/contact"
          >
            <i className="ph-bold ph-arrow-right" />
          </AnimatedButton>
        )}
      </div>
    </header>
  );
}
