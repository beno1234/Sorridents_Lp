<<<<<<< HEAD
import { Section1 } from "@/components/Section1"
import { Section2 } from "@/components/Section2"

export default function Home() {
  return (
    <div className="">
      <Section1/>
      <Section2/>
    </div>
  )
=======
import { Header } from "@/components/Header";
import WhySorridents from "@/components/WhySorridents/WhySorridents";

import Services from "@/components/Servicos/Services";

export default function Home() {
  return (
    <>
      <div className="  bg-gradient-to-r from-cyan-500 to-blue-500 animateGradientX">
        <WhySorridents />
        <Services />
      </div>
    </>
  );
>>>>>>> e51817a85c4be08f00410cd96e9928cccf874308
}
