import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Products from "../components/Products";
import Process from "../components/Process";
import ContactCTA from "../components/ContactCTA";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <WhyChooseUs />
      <Products />
      <Process />
      <ContactCTA />
    </main>
  );
}
