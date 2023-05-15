import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/FACHADA-ZL_I8A1609-copiar-2FInal-copiar.jpg";
import image2 from "../../assets/I8A2058-copiar.jpg";
import image3 from "../../assets/consultorio.jpeg";
import image4 from "../../assets/I8A2050-copiar.jpg";
import image5 from "../../assets/parede.jpeg";

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
          {/* Content */}
        </div>
        <AgendarConsulta />
      </div>
    </div>
  );
};
