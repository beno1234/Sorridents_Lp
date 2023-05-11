import React from "react";

export const Header = () => {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Meu Site</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-blue-200">
                Início
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200">
                Serviços
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
