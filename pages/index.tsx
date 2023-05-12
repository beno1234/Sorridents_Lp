import { Header } from "@/components/Header";
import WhySorridents from "@/components/WhySorridents/WhySorridents";

import Services from "@/components/Servicos/Services";

export default function Home() {
  return (
    <>
      <div className="animateGradientX">
        <WhySorridents />
        <Services />
      </div>
    </>
  );
}
