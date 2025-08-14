// importação de imagens
import logo from "../assets/react.svg";

export const Menu = () => {
  return (
    <>
    <div className="w-full bg-cyan-950 h-18 flex flex-col md:flex-row items-center justify-between rounded-xl border border-green-300">

      <div className="w-auto flex items-center gap-5">

        <img src={logo} alt="logo1" className="w-10 h-10 mr-2" />
        <h3 className="text-xl font-serif font-bold text-red-50"> Papelaria gotinhas de amor </h3>

        

      </div>

      <nav className="w-auto flex gap-4">
        <a href="/"         className="text-red-50 hover:text-green-300 font-medium transition-colors">Home</a>
        <a href="/contatos" className="text-red-50 hover:text-green-300 font-medium transition-colors">Contatos</a>
        
      </nav>
    </div>
    </>
    
  );
};
