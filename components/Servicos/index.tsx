import Image from "next/image";

import estetica from "../../assets/tratamentos/estetica-sorridents-1.webp";
import orto from "../../assets/tratamentos/ortodontis-sorridents-1.webp";
import geral from "../../assets/tratamentos/clinico-geral-sorridents-1.webp";
import implante from "../../assets/tratamentos/implantes-sorridents-1.webp";
import outros from "../../assets/tratamentos/tratamentos-sorridents-1.webp";
import odontopediatria from "../../assets/tratamentos/odontopediatria-sorridents-1.webp";

import prevencao from "../../assets/prevencaoWhite.webp";
import AgendarConsulta from "../ButtonAgendarConsulta/ButtonAgendar";

export default function Services() {
  return (
    <section className="w-full flex flex-col-reverse justify-around py-20  px-5 lg:px-[15%] lg:flex-row">
      <div className="flex flex-wrap justify-around gap-10">
        <div className=" text-white bg-[#2f2f2f39] flex flex-col items-center p-5 shadow-2xl to-blue-500 max-w-[95%] lg:max-w-[280px] rounded backdrop-blur-sm">
          <Image
            src={estetica}
            alt=""
            width={280}
            height={300}
            className="rounded mb-5"
          />
          <h3 className="font-semibold text-[28px] mb-4">Estética</h3>
          <p>
            Aqui você encontra nossos tratamentos estéticos que vão lhe garantir
            um sorriso mais bonito, brilhante e com muita autoestima
          </p>
        </div>

        <div className=" text-white bg-[#2f2f2f39] flex flex-col items-center p-5 shadow-2xl to-blue-500 max-w-[95%] lg:max-w-[280px] rounded backdrop-blur-sm">
          <Image
            src={orto}
            alt=""
            width={280}
            height={300}
            className="rounded mb-5"
          />
          <h3 className="font-semibold text-[28px] mb-4">Ortodontia</h3>
          <p>
            Encontre tratamentos ortodônticos que vão proporcionar uma
            mastigação adequada e um sorriso mais alinhado
          </p>
        </div>

        <div className=" text-white bg-[#2f2f2f39] flex flex-col items-center p-5 shadow-2xl to-blue-500 max-w-[95%] lg:max-w-[280px] rounded backdrop-blur-sm">
          <Image
            src={geral}
            alt=""
            width={280}
            height={300}
            className="rounded mb-5"
          />
          <h3 className="font-semibold text-[28px] mb-4">Clínico Geral</h3>
          <p>
            Descubra o que nossos tratamentos de limpeza, restauração e muito
            mais podem fazer pelo seu sorriso
          </p>
        </div>

        <div className=" text-white bg-[#2f2f2f39] flex flex-col items-center p-5 shadow-2xl to-blue-500 max-w-[95%] lg:max-w-[280px] rounded backdrop-blur-sm">
          <Image
            src={implante}
            alt=""
            width={280}
            height={300}
            className="rounded mb-5"
          />
          <h3 className="font-semibold text-[28px] mb-4">Implantes</h3>
          <p>
            Perdeu um ou mais dos seus dentes naturais? Conheça nossos
            tratamentos de implantes dentários e recupere o seu sorriso
          </p>
        </div>

        <div className=" text-white bg-[#2f2f2f39] flex flex-col items-center p-5 shadow-2xl to-blue-500 max-w-[95%] lg:max-w-[280px] rounded backdrop-blur-sm">
          <Image
            src={outros}
            alt=""
            width={280}
            height={300}
            className="rounded mb-5"
          />
          <h3 className="font-semibold text-[28px] mb-4">Outros Tratamentos</h3>
          <p>
            Encontre aqui os nossos melhores tratamentos odontológicos para você
            sorrir sem dor e sem receio{" "}
          </p>
        </div>

        <div className=" text-white bg-[#2f2f2f39] flex flex-col items-center p-5 shadow-2xl to-blue-500 max-w-[95%] lg:max-w-[280px] rounded backdrop-blur-sm">
          <Image
            src={odontopediatria}
            alt=""
            width={280}
            height={300}
            className="rounded mb-5"
          />
          <h3 className="font-semibold text-[28px] mb-4">Odontopediatria</h3>
          <p>
            Tratamentos específicos realizados por dentistas pediatras da melhor
            qualidade para garantir a saúde bucal do seu filho{" "}
          </p>
        </div>

        <div className="lg:w-[95%] p-5 shadow-2xl flex flex-col items-center lg:flex-row rounded mt-8 bg-[#2f2f2f39]">
          <Image src={prevencao} alt="icone prevenção" className="w-[150px]" />
          <div className="flex flex-col text-white">
            <h2 className="text-[32px] text-semibold mb-3 text-center">
              Prevenção
            </h2>
            <p>
              Conheça todos os tratamentos odontológicos disponíveis na
              Sorridents para você cuidar do seu sorriso e da sua saúde bucal!
            </p>
          </div>
        </div>
        <AgendarConsulta />
      </div>
    </section>
  );
}
