import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import Introduction from "@/Components/Introduction";
import Domain from "@/Components/Domain";
import Milestones from "@/Components/Milestones";
import Features from "@/Components/Features";
import Documents from "@/Components/Documents";
import ToolsTec from "@/Components/ToolsTec";
import Publication from "@/Components/Publication";
import Team from "@/Components/Team";
import Contact from "@/Components/Contact";
import Footer from "@/Components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Introduction />
      <Domain />
      <Milestones />
      <Features />
      <Documents />
      <ToolsTec />
      <Publication />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
