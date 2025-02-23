import React from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="relative  pb-40 pt-60 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <p className="caption small-2 uppercase text-p3">Video Editing</p>
            <h1 className="mb-6 h1 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly Simple
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              We desinged XORA AI Video Editor to be an easy to use, quick to
              learn and surprisingly powerful.
            </p>
            <LinkScroll to="features" ofset={-100} spy smooth>
              <Button icon="../src/assets/images/zap.svg">Try it now</Button>
            </LinkScroll>
          </div>
          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              className="size-1230 max-lg:h-auto"
              src="../src/assets/images/hero.png"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
}
