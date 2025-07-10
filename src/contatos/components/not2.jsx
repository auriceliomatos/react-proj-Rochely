//importações de imagens principais
import img1 from "../../assets/img2/c1.jpeg";
// importações de imagens secundarias
import img2 from "../../assets/img2/c2.jpeg";
import img3 from "../../assets/img2/c3.jpeg";
import img4 from "../../assets/img2/c4.jpeg";

import React, { useState } from 'react';

export const Noticia02 = () => {
    const [noticiaDestaque, setNoticiaDestaque] = useState(null);

    const noticias = [
        {
            id: 1,
            titulo: "  livros Bobbie Goods",
            preco: "nossa coleção completa de livros",
            imagem: img1,
            descricao: `
`,
            promocao: true,
            imagens: [ img2, img3, img4 ] // Exemplo de até 3 imagens
        }
    ];

    const handleSaibaMais = (noticia) => {
        setNoticiaDestaque(noticia);
    };

    const handleCloseModal = () => {
        setNoticiaDestaque(null);
    };

    return (
        <>
            <div className="flex flex-col gap-2  w-80">
                {noticias.map((noticia) => (
                    <div key={noticia.id} className=" relative bg-blue-970 border-2 border-green-500 rounded-xl text-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-green/30">
                        {noticia.promocao && (
                        
                        <span className="w-20 border-2 absolute rounded-md bg-green-500 text-white font-bold top-3 right-3 text-xs"> 25/06/2025 </span>
                        )}
                        <div className="w-full h-100 flex flex-col  items-center justify-center ">
                        <img 
                            src={noticia.imagem} 
                            alt={noticia.titulo} 
                            className="w-75 h-95 rounded-lg "
                        />   
                        </div>
                        <h3 className="text-green-500 text-lg font-bold h-10 flex items-center justify-center">{noticia.titulo}</h3>
                        <p className="text-branca w-75 h-12 right-3 text-sm flex text-justify ">{noticia.preco}</p>
                        <div className=" w-full h-10 flex  items-center justify-center ">
                        <button 
                            onClick={() => handleSaibaMais(noticia)}
                            className="bg-green-500 text-branca border-none  rounded-md text-base cursor-pointer transition-colors duration-300 ease-in-out hover:bg-emerald-600 active:translate-y-0.5"
                        > 
                        <p className="w-20 text-branca text-sm font-bold"> saiba mais </p>  
                        </button>
                        </div>
                    </div>
                ))}
            </div>
            {/*----------------------------------- Modal de destaque -----------------------*/}
            {noticiaDestaque && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-preta flex items-center justify-center z-100">
                    <div className="bg-blue-950 rounded-lg max-w-220 w-full shadow-lg relative text-center border-2 border-bg-green-500">
                        <button 
                            onClick={handleCloseModal} 
                            className="absolute top-2 right-2.5 bg-transparent border-none text-2xl cursor-pointer text-white hover:bg-blue-950 transition-colors"
                        >
                            ×
                        </button>
                        <div className="flex flex-col h-15  items-center justify-center">
                         <h2 className="text-green-500 text-2xl font-bold">{noticiaDestaque.titulo}</h2>   
                        </div>
                        

                        <div className="flex gap-5 justify-center h-90">
                            {noticiaDestaque.imagens && noticiaDestaque.imagens.slice(0, 3).map((img, idx) => (
                                <img 
                                    key={idx} 
                                    src={img} 
                                    alt={noticiaDestaque.titulo + ' imagem ' + (idx+1)} 
                                    className="w-60 h-80 rounded-lg" 
                                />
                            ))}
                        </div>
                        <div className="flex flex-col items-center justify-center">
                        {noticiaDestaque.descricao
                          .split('\n')
                          .filter(paragrafo => paragrafo.trim() !== '')
                          .map((paragrafo, idx) => (
                            <p key={idx} className=" flex text-justify text-branca h-15 w-250">{paragrafo.trim()}</p>
                          ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}