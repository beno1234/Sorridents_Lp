import { Footer } from "@/components/Footer";
import { Section1 } from "@/components/Section1";
import { Section2 } from "@/components/Section2";
import { Header } from "@/components/Header";
import WhySorridents from "@/components/WhySorridents/WhySorridents";

import Services from "@/components/Servicos/Services";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 animateGradientX">
      <Section1 />
      <Section2 />
      <WhySorridents />
      <Services />
      <Footer />
    </div>
  );
}
