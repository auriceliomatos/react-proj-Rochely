// importação de imagem
//import mg1 from '../assets/img/logo1.jpg'

// importação do componente React
import { Menu} from '../routes/menu';
import { Slider } from './components/sliderr';
import { Carrousel } from './components/carrousel';
import { Carrousel2 } from './components/carrousel2';
import { Noticia01 } from '../contatos/components/not1';
import { Noticia02 } from '../contatos/components/not2';
import { Footer } from '../foot/foot';
import { Borda } from './borda';
import { Contato } from './components/contato';

export const Home = () => {
  return (
 
    <>
     <div className="items-center justify-center flex flex-col gap-3 sm:gap-4 md:gap-5 font-serif"> 
        
        <div className="w-full"> 
        <Menu />
        </div>
      
        <div className="w-full"> 
        <Slider/>
        </div>

        <div className="w-full">
          <Borda/>
        </div>

        <div className="w-full">
          <Carrousel/>
        </div>

        <div className="w-full">
          <Borda/>
        </div>

        <div className="w-full"> 
          <Carrousel2/>
        </div>

        <div className="w-full">
          <Borda/>
        </div>

        <div className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 ">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl text-green-600 sm:mb-6 h-15"> Nosso catálogo de produtos </h2>

        <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center "> 
          <Noticia01/>
          <Noticia02/>
        </div>
        </div>

        <div className="w-full">
          <Borda/>
        </div>

        <div className="w-full">
          <Contato/>
        </div>

        <div className="w-full h-full"> 
          <Footer/>
        </div>

      </div>
     </>
  
  );
};
