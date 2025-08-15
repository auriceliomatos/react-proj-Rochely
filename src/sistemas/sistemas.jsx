// importação de componentes
import { Menu } from '../routes/menu';

export const Sistemas = () => {
    return (
         <>
     <div className="items-center justify-center"> 
        
        <div className="w-full h-16 sm:h-20 md:h-25"> 
        <Menu />
        <h1 className="text-verde text-center mt-4 sm:mt-6 md:mt-10 mb-4 sm:mb-6 md:mb-10 text-2xl sm:text-3xl md:text-4xl font-bold px-4">Sistemas</h1>
        </div>
        
        <div className="w-full h-20 sm:h-32 md:h-40 bg-red-500"> </div>
        <div className="w-full h-20 sm:h-32 md:h-40 bg-yellow-500"></div>
        <div className="w-full h-20 sm:h-32 md:h-40 bg-green-500"> </div>

      </div>
     </>
    )
}