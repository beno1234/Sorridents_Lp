import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import WhySorridents from "@/components/WhySorridents/WhySorridents";

import Services from "@/components/Servicos/Services";

export default function Home() {
  return (
    <>
      <div className="  bg-gradient-to-r from-cyan-500 to-blue-500 animateGradientX">
        <WhySorridents />
        <Services />
        <Footer />
      </div>
    </>
  );
}
