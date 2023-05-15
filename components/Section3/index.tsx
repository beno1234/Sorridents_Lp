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

export const Section3 = () => {
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
    <div className="w-full mt-10 flex flex-col justify-center  gap-14 bg-three p-20">
      <h2 className="font-sans text-white font-bold text-3xl lg:text-5xl text-center font-bold">Conheça a nossa estrutura</h2>
      <Slider {...settings}>
        <div>
          <Image src={image1} alt="Imagem 1" width={800} height={600} />
        </div>
        <div>
          <Image src={image2} alt="Imagem 2" width={800} height={600} />
        </div>
        <div>
          <Image src={image3} alt="Imagem 3" width={800} height={600} />
        </div>
        <div>
          <Image src={image4} alt="Imagem 1" width={800} height={600} />
        </div>
        <div>
          <Image src={image5} alt="Imagem 1" width={800} height={600} />
        </div>
      </Slider>
      <AgendarConsulta />
  </div>
  );
};
