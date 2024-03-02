import CarContainer from "@/components/home/CarContainer";
import ExtraBox from "@/components/home/ExtraBox";
import Feature from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
import SectionTwo from "@/components/home/SectionTwo";
import Steps from "@/components/home/Steps";

export default function Home() {
  return (
    <div className="home overflow-hidden">
      <Hero />
      <Steps />
      <SectionTwo />
      <CarContainer />
      <Feature />
      <ExtraBox />
    </div>
  );
}
