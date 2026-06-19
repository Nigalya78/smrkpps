import Hero from "../components/Hero";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Products from "../components/Products";
import Process from "../components/Process";
import ContactCTA from "../components/ContactCTA";

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
