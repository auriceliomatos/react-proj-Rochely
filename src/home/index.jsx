// importação de imagem
//import mg1 from '../assets/img/logo1.jpg'

// importação do componente React
import { Menu} from '../menu/menu';
import { Footer } from '../foot/foot';
import { Contatos } from './contato/contato';
import { Papel } from './papel/papel';
import { Borda } from './borda/borda';
import { Carrousel } from './components/carrousel';
//import { Carrousel2 } from './components/carrousel2';
//import { Sliderr } from './components/sliderr';
import { Sliderr2 } from './components/sliderr2';
import { Banner } from './components/banner';

export const Home = () => {
  return (
 
    <>
     <div className=" items-center justify-center flex flex-col font-serif"> 
        
        <div className="w-full" > 
        <Menu />
        </div>

        <div className="w-full"> 
        <Papel />
        </div>

        <div className="w-full"> 
        <Borda/>
        </div>

        <div className="w-full"> 
        <Banner />
        </div>

        <div className="w-full"> 
        <Borda />
        </div>

        <div className="w-full"> 
        <Carrousel />
        </div>

        <div className="w-full"> 
        <Borda/>
        </div>

        <div className="w-full"> 
        <Sliderr2/>
        </div>

        <div className="w-full"> 
        <Borda/>
        </div>

        <div className="w-full"> 
        <Borda/>
        </div>

        <div className="w-full h-100"> 
        <Contatos />
        </div>

        <div className="w-full"> 
        <Footer />
        </div>

      </div>
     </>
  
  );
};
