import Image from "next/image";
import React from "react";
import Sorridents from "../../assets/sorridents.svg";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-[#2a8f2b]">
      <div className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-y-12 lg:gap-y-0 lg:gap-x-8 justify-between items-center">
          <div>
            <h2 className="text-sm font-semibold tracking-wide uppercase text-white">
              <Image
                src={Sorridents}
                alt="Sorridents"
                width={250}
                height={250}
              />
            </h2>
          </div>
          <div>
            <div className="mt-8">
              <h1 className="text-2xl font-semibold tracking-wide uppercase text-white">
                Contato
              </h1>
              <p className="text-white mt-4">Whatsapp: (00) 00000-0000</p>
            </div>
            <div className="mt-8">
              <h1 className="text-2xl font-semibold tracking-wide uppercase text-white">
                Endereço
              </h1>
              <p className="text-white mt-4">123 Rua Exemplo, Cidade, Estado</p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8 lg:mt-0">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center shadow-2xl">
              <FaWhatsapp className="mr-2" />
              Entre em contato conosco
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
