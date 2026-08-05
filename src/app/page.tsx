import { Hero } from "@/components/sections/Hero";
import { AuthorityStrip } from "@/components/sections/AuthorityStrip";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Differentials } from "@/components/sections/Differentials";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <Hero />
      <AuthorityStrip />
      <About />
      <Services />
      <Differentials />
      <Gallery />
      <Testimonials />
      <FinalCta />
    </main>
  );
}
