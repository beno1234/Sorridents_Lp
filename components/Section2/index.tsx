import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon1 from "../../assets/icone-carteira.webp";
import icon2 from "../../assets/icone-home.webp";
import icon3 from "../../assets/icone-local.webp";
import icon4 from "../../assets/icone-estrela.webp";

import AgendarConsulta from "../ButtonAgendarConsulta/ButtonAgendar";

export const Section2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-14 flex items-center justify-center">
      <div className="flex flex-col gap-10 items-center justify-center w-10/12 lg:w-6/12 text-center">
        <h1 className="font-sans color-three font-bold text-3xl lg:text-5xl">
          Clínicos gerais atendendo em todas as especialidades
        </h1>
        <p className="text-base lg:text-2xl">
          A mais premiada rede de clínicas odontológicas da América Latina!
        </p>
        <div className="flex flex-col gap-10 lg:gap-10 lg:flex-row lg:justify-between w-full">
          <div className="flex flex-col items-center justify-center gap-3 flex-1 bg-slate-100 rounded-lg p-4 ">
            <Image src={icon1} alt="" width={50} />
            <h1 className="text-xl color-three font-bold">Acesso</h1>
            <p>Aqui você pode cuidar do seu sorriso e da sua saúde bucal!</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 flex-1 bg-slate-100 rounded-lg p-4">
            <Image src={icon2} alt="" width={50} />
            <h1 className="text-xl color-three font-bold">Conforto</h1>
            <p>As melhores instalações a favor do seu conforto e bem-estar!</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 flex-1 bg-slate-100 rounded-lg p-4">
            <Image src={icon3} alt="" width={50} />
            <h1 className="color-three text-xl font-bold ">Conveniência</h1>
            <p>Variedade de serviços odontológicos em um só lugar!</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 flex-1 bg-slate-100 rounded-lg p-4">
            <Image src={icon4} alt="" width={50} />
            <h1 className="text-xl color-three font-bold">Qualidade</h1>
            <p>
              Qualidade, certificados e esterilização seguindo normas de
              biossegurança.
            </p>
          </div>
        </div>
        <AgendarConsulta />
      </div>
    </div>
  );
};
