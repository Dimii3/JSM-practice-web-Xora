import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <main className="overflow-x-hidden">
      <Header></Header>
      <Hero></Hero>
      <Features></Features>
      <Pricing></Pricing>
      <Faq></Faq>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </main>
  );
}
