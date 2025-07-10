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
        <div className="max-w-full">

            <div className="w-full h-40 flex flex-col justify-center items-center">
            <h1 className="text-green-700 text-center font-bold text-3xl">Mural dos Ex-Comandantes</h1> 
            <p className="text-white  text-xl text-justify">
                Neste espaço digital prestamos uma homenagem especial aos ex-comandantes do Corpo de Bombeiros Militar de Crateús-CE. Homens valentes que dedicaram suas vidas à proteção e ao serviço da comunidade. Este mural é mais do que uma simples homenagem; é um tributo à coragem, à liderança e ao compromisso inabalável que esses homens exemplificaram durante seus mandatos.
            </p>
            </div>
            <div className="grid xl:grid-cols-5 gap-3 p-2">
                {Chefes.map((chefe) => (
                    <div key={chefe.id} className="relative bg-blue-970 border-2 border-green-500 rounded-xl text-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500">
                        {chefe.promocao && (
                        <span className="absolute bg-red-500 text-white  top-3 right-6 rounded-lg text-sm font-bold">1ºComandante</span>
                        )}
                        <div className="w-full h-92 flex justify-center items-center">
                        <img 
                            src={chefe.imagem} 
                            alt={chefe.titulo} 
                            className=" w-65 h-90 object-cover rounded-lg "
                        />
                        </div>
                        <div className=" h-20 flex flex-col justify-center items-center">
                        <h3 className="text-green-700 text-2xl  h-6 flex items-center justify-center">{chefe.titulo}</h3>
                        <p className="text-white text-2xl ">{chefe.preco}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};