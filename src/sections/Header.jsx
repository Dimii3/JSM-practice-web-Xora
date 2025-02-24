import clsx from "clsx";
import React, { useEffect, useState } from "react";

import { Link as LinkScroll } from "react-scroll";

function NavLink({ title }) {
  return (
    <LinkScroll
      to={title}
      offset={-240}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold text-p4 uppercase transition-colors duration-300 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    >
      {title}
    </LinkScroll>
  );
}

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-background-color duration-300",
        hasScrolled && "bg-s2 shadow-500 py-5"
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="../src/assets/images/xora.svg" alt="logo" />
        </a>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="w-full max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4 border-amber-200">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features"></NavLink>
                  <div className="dot"></div>
                  <NavLink title="pricing"></NavLink>
                </li>
                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-240}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-300 cursor-pointer",
                      hasScrolled && "transform scale-90"
                    )}
                  >
                    <img
                      src="../src/assets/images/xora.svg"
                      width={160}
                      height={55}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title="faq"></NavLink>
                  <div className="dot"></div>
                  <NavLink title="download"></NavLink>
                </li>
              </ul>
            </nav>
            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                className="relative z-2"
                src="../src/assets/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
              />
              <img
                className="absolute inset-0 mix-blend-soft-light opacity-5"
                src="../src/assets/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="lg:hidden  z-2 size-10 border-2 border-s4/25 rounded-full flex items-center justify-center"
        >
          <img
            className="size-1/2 object-contain"
            src={`../src/assets/images/${isOpen ? "close" : "magic"}.svg`}
            alt=""
          />
        </button>
      </div>
    </header>
  );
}
