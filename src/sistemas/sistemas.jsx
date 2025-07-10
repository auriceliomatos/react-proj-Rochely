// importação de componentes
import { Menu } from '../routes/menu';

export const Sistemas = () => {
    return (
         <>
     <div className="items-center justify-center"> 
        
        <div className="w-full h-25"> 
        <Menu />
        <h1 className="text-verde text-center mt-10 mb-10 text-4xl font-bold">Sistemas</h1>
        </div>
        
        <div className="w-full h-40 bg-red-500"> </div>
        <div className="w-full h-40 bg-yellow-500"></div>
        <div className="w-full h-40 bg-green-500"> </div>

      </div>
     </>
    )
}