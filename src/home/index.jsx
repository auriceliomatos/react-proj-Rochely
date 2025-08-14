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

export const Home = () => {
  return (
 
    <>
     <div className=" items-center justify-center flex flex-col gap-5"> 
        
        <div className=" w-full " > 
        <Menu />
        </div>
      
        <div className="w-full" > 
        <Slider/>
        </div>

        <div className="w-full">
          <Borda/>
        </div>

        <div className=" w-full  ">
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
        
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="text-center text-3xl  text-green-600 h-15"> Nosso catálogo de produtos </h2>

        <div className="w-full flex  gap-5 items-center justify-center"> 
          <Noticia01/>
          <Noticia02/>
        </div>
        </div>
       
        

        <div className="w-full h-full"> 
          <Footer/>
        </div>

      </div>
     </>
  
  );
};
