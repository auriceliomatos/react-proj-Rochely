//importações de imagens principais
import img1 from "../../assets/img2/l5.jpg";
// importações de imagens secundarias
import img2 from "../../assets/img2/l1.jpg";
import img3 from "../../assets/img2/l2.jpg";
import img4 from "../../assets/img2/l3.jpg";

import React, { useState } from 'react';

export const Noticia01 = () => {
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
            <div className="flex flex-col gap-2 w-full sm:w-80">
                {noticias.map((noticia) => (
                    <div key={noticia.id} className="relative bg-blue-970 border-2 border-green-500 rounded-xl text-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-green/30">
                        {noticia.promocao && (
                        
                        <span className="w-16 sm:w-20 border-2 absolute rounded-md bg-green-500 text-white font-bold top-2 sm:top-3 right-2 sm:right-3 text-xs"> 25/06/2025 </span>
                        )}
                        <div className="w-full h-80 sm:h-100 flex flex-col items-center justify-center p-2">
                        <img 
                            src={noticia.imagem} 
                            alt={noticia.titulo} 
                            className="w-full sm:w-75 h-60 sm:h-95 rounded-lg object-cover"
                        />   
                        </div>
                        <h3 className="text-green-500 text-base sm:text-lg font-bold h-8 sm:h-10 flex items-center justify-center px-2">{noticia.titulo}</h3>
                        <p className="text-branca w-full sm:w-75 h-12 text-xs sm:text-sm flex text-justify px-2">{noticia.preco}</p>
                        <div className="w-full h-10 flex items-center justify-center mb-2">
                        <button 
                            onClick={() => handleSaibaMais(noticia)}
                            className="bg-green-500 text-branca border-none rounded-md text-base cursor-pointer transition-colors duration-300 ease-in-out hover:bg-emerald-600 active:translate-y-0.5"
                        > 
                        <p className="w-20 text-branca text-xs sm:text-sm font-bold"> saiba mais </p>  
                        </button>
                        </div>
                    </div>
                ))}
            </div>
            {/*----------------------------------- Modal de destaque -----------------------*/}
            {noticiaDestaque && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-preta flex items-center justify-center z-100 p-4">
                    <div className="bg-blue-950 rounded-lg max-w-full sm:max-w-220 w-full shadow-lg relative text-center border-2 border-bg-green-500 max-h-screen overflow-y-auto">
                        <button 
                            onClick={handleCloseModal} 
                            className="absolute top-2 right-2.5 bg-transparent border-none text-2xl cursor-pointer text-white hover:bg-blue-950 transition-colors"
                        >
                            ×
                        </button>
                        <div className="flex flex-col h-12 sm:h-15 items-center justify-center p-4">
                         <h2 className="text-green-500 text-xl sm:text-2xl font-bold">{noticiaDestaque.titulo}</h2>   
                        </div>
                        

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center h-auto sm:h-90 p-4">
                            {noticiaDestaque.imagens && noticiaDestaque.imagens.slice(0, 3).map((img, idx) => (
                                <img 
                                    key={idx} 
                                    src={img} 
                                    alt={noticiaDestaque.titulo + ' imagem ' + (idx+1)} 
                                    className="w-full sm:w-60 h-48 sm:h-80 rounded-lg object-cover" 
                                />
                            ))}
                        </div>
                        <div className="flex flex-col items-center justify-center p-4">
                        {noticiaDestaque.descricao
                          .split('\n')
                          .filter(paragrafo => paragrafo.trim() !== '')
                          .map((paragrafo, idx) => (
                            <p key={idx} className="flex text-justify text-branca h-auto sm:h-15 w-full sm:w-250 text-sm sm:text-base">{paragrafo.trim()}</p>
                          ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}