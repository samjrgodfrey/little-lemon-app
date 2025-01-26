import React, { useState } from "react";
import Hero from "../Sections/Hero.js";
import Specials from "../Sections/Specials.js";
import Testimonials from "../Sections/Testimonials.js";
import About from "../Sections/About.js";

export default function Main() {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
}
