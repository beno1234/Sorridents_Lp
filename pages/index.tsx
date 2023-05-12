import { Footer } from "@/components/Footer";
import { Section1 } from "@/components/Section1";
import { Section2 } from "@/components/Section2";
import WhySorridents from "@/components/WhySorridents";

import Services from "@/components/Servicos";

export default function Home() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <div className="bg-gradient-to-r from-cyan-500 to-blue-700 animateGradientX">
        <WhySorridents />
        <Services />
      </div>
      <Footer />
    </div>
  );
}
