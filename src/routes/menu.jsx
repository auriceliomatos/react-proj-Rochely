// importação de imagens
import logo from "../assets/react.svg";
import { useState } from "react";

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div className="w-full bg-cyan-950 h-auto sm:h-18 flex flex-col sm:flex-row items-center justify-between rounded-xl border-1 border-green-300 px-4 py-3 sm:px-6 sm:py-4">

      <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 sm:gap-5">

        <div className="flex items-center gap-2 sm:gap-5">
          <img src={logo} alt="logo1" className="w-8 h-8 sm:w-10 sm:h-10 mr-2 p-2 " />
          <h3 className="text-lg sm:text-xl font-bold text-red-50"> Papelaria gotinhas de amor </h3>
        </div>

        {/* Botão do menu mobile */}
        <button 
          className="sm:hidden bg-transparent border-none text-red-50 text-2xl"
          onClick={toggleMenu}
        >
          ☰
        </button>

      </div>

      {/* Menu desktop */}
      <nav className="hidden sm:flex w-auto sm:w-40 gap-4">
        <a href="/" className="text-red-50 hover:text-green-300 font-medium transition-colors">Home</a>
        <a href="/contatos" className="text-red-50 hover:text-green-300 font-medium transition-colors">Contatos</a>
      </nav>

      {/* Menu mobile */}
      {isMenuOpen && (
        <nav className="sm:hidden w-full mt-4 flex flex-col gap-3 border-t border-green-300 pt-4">
          <a href="/" className="text-red-50 hover:text-green-300 font-medium transition-colors text-center">Home</a>
          <a href="/contatos" className="text-red-50 hover:text-green-300 font-medium transition-colors text-center">Contatos</a>
        </nav>
      )}
    </div>
    </>
    
  );
};
