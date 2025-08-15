//importações de imagens
import img1 from '../../assets/img/f1.png';
import img2 from '../../assets/img/f2.png';
import img3 from '../../assets/img/f3.png';
import img4 from '../../assets/img/f4.png';
import img5 from '../../assets/img/f5.webp';
import img6 from '../../assets/img/l1.webp';
import img7 from '../../assets/img/l2.webp';
import img8 from '../../assets/img/p1.webp';
import img9 from '../../assets/img/p2.webp';

export const ExChefes = () => {
    const Chefes = [
        {
            id: 1,
            titulo: "Cel BM - Anderson",
            preco: "Comandante (1999-2001)",
            imagem: img1,
            promocao: true
        },
        {
            id: 2,
            titulo: "Cel BM - Jeferson",
            preco: "Comandante ( 2001 )",
            imagem: img2,
            descricao: "Sub Comandante que liderou importantes operações na região dos Inhamuns"
        },
        {
            id: 3,
            titulo: "Cel BM - Agnaldo",
            preco: "Comandante (2001-2004)",
            imagem: img3,
        },
        {
            id: 4,
            titulo: "Cel BM - Nunes",
            preco: "Comandante (2005-2009)",
            imagem: img4,
        },
            {
                id: 5,
                titulo: "Maj BM - Prado",
                preco: "Comandante (2009-2012)",
                imagem: img5,
            },
            {
                id: 6,
                titulo: "Cel BM - Sousa",
                preco: "Comandante (2012-2016)",
                imagem: img6,
            },
            {
                id: 7,
                titulo: "Cel BM - Marciel",
                preco: "Comandante (2016-2018)",
                imagem: img7,
            },
            {
                id: 8,
                titulo: "Cel BM - Alexandre",
                preco: "Comandante (2018-2019)",
                imagem: img8,
            },
            {
                id: 9,
                titulo: "Cel BM - Homero",
                preco: "Comandante (2019-2022)",
                imagem: img9,
            }
            
    ];

    return (
        <div className="max-w-full px-4 sm:px-6 md:px-8">

            <div className="w-full h-24 sm:h-32 md:h-40 flex flex-col justify-center items-center mb-4 sm:mb-6">
            <h1 className="text-green-700 text-center font-bold text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-4">Mural dos Ex-Comandantes</h1> 
            <p className="text-white text-sm sm:text-base md:text-xl text-justify px-2 sm:px-4">
                Neste espaço digital prestamos uma homenagem especial aos ex-comandantes do Corpo de Bombeiros Militar de Crateús-CE. Homens valentes que dedicaram suas vidas à proteção e ao serviço da comunidade. Este mural é mais do que uma simples homenagem; é um tributo à coragem, à liderança e ao compromisso inabalável que esses homens exemplificaram durante seus mandatos.
            </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 p-2">
                {Chefes.map((chefe) => (
                    <div key={chefe.id} className="relative bg-blue-970 border-2 border-green-500 rounded-xl text-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500">
                        {chefe.promocao && (
                        <span className="absolute bg-red-500 text-white top-2 sm:top-3 right-2 sm:right-6 rounded-lg text-xs sm:text-sm font-bold">1ºComandante</span>
                        )}
                        <div className="w-full h-64 sm:h-80 md:h-92 flex justify-center items-center p-2">
                        <img 
                            src={chefe.imagem} 
                            alt={chefe.titulo} 
                            className="w-full h-full object-cover rounded-lg"
                        />
                        </div>
                        <div className="h-16 sm:h-18 md:h-20 flex flex-col justify-center items-center p-2">
                        <h3 className="text-green-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl h-6 flex items-center justify-center">{chefe.titulo}</h3>
                        <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl">{chefe.preco}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};