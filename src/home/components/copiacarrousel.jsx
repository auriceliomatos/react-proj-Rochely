// importação do React
import React, { useEffect, useState } from "react";

// importação das imagens
const img1 = "https://cs210033fff90d2f7ac.s3.amazonaws.com/sodine/album-servico/76502G2025-06-16T16%3A55%3A00.958.jpeg";
const img2 = "https://cs210033fff90d2f7ac.s3.us-east-1.amazonaws.com/supersupply/album-servico/59410.jpg";
const img3 = "https://cs210033fff90d2f7ac.s3.us-east-1.amazonaws.com/supersupply/album-servico/63052.jpg";
const img4 = "https://cs210033fff90d2f7ac.s3.us-east-1.amazonaws.com/supersupply/album-servico/64087.jpg";
const img5 = "https://cs210033fff90d2f7ac.s3.us-east-1.amazonaws.com/supersupply/album-servico/63009.jpg";

export const Carrousel = ({ produtos = [], titulo = "NOVIDADES" }) => {
  const [produtosLocais, setProdutosLocais] = useState([]);
  const carouselRef = React.useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (produtos && produtos.length > 0) {
      setProdutosLocais(produtos);
    } else {
      // Dados padrão se não houver produtos via props
      const dadosPadrao = [
        {
          id: 1,
          nome: "MARCADOR BOBBIE GOODS 2 PONTAS 24UN",
          preco: "99,90",
          promocao: "89,90",
          imagem: img1,
        },
        {
          id: 2,
          nome: "MARCADOR BOBBIE GOODS 2 PONTAS 48UN",
          preco: "149,90",
          promocao: "129,90",
          imagem: img1,
        },
        {
          id: 3,
          nome: "MARCADOR BOBBIE GOODS 2 PONTAS 12UN",
          preco: "50,90",
          promocao: " 40,90",
          imagem: img1,
        },
        {
          id: 4,
          nome: "MARCADOR BOBBIE GOODS 2 PONTAS 100UN",
          preco: "120,90",
          promocao: "100,90",
          imagem: img1,
        },
        {
          id: 5,
          nome: "MARCADOR BOBBIE GOODS 2 PONTAS 01 UN",
          preco: "5,90",
          promocao: "4,90",
          imagem: img1,
        },
        {
          id: 6,
          nome: "CANETA BRW GEL 0.7 APAG.DIVERT.DONUTS",
          preco: "5,99",
          promocao: " 4,99",
          imagem: img2,
        },
        {
          id: 7,
          nome: "Caneta Esferográfica Gel 0.7mm Apagável Divertida",
          preco: "9,99",
          promocao: " 7,99",
          imagem: img5,
        },
        {
          id: 8,
          nome: "CANETA LIC. FACE STITCH E ANGEL SORT",
          preco: "29,99",
          promocao: "24,99",
          imagem: img4,
        },
        {
          id: 9,
          nome: "CANETA BRW GEL 0.7 APAG.DIVERT.DONUTS",
          preco: "5,99",
          promocao: " 4,99",
          imagem: img3,
        },

      ];
      setProdutosLocais(dadosPadrao);
    }
    console.log("Carrousel renderizado com produtos:", produtosLocais);
  }, [produtos]);

  if (!produtosLocais || produtosLocais.length === 0) {
    console.log("Nenhum produto encontrado");
    return <div>Carregando produtos...</div>;
  }

  return (
    <div className="w-full h-full m-2 mb-4">

      <div className="flex flex-col justify-center h-20 mb-4"> 
        <h1 className="text-center text-4xl text-fuchsia-700">{titulo}</h1>
      </div>
      
      <div className="relative flex items-center">
        <button 
          className="absolute left-5 top-1/2 transform -translate-y-1/2 text-fuchsia-600 rounded-full text-8xl flex items-center justify-center z-10 transition-all duration-300 ease-in-out hover:scale-110"
          onClick={scrollLeft}
        >
          ‹
        </button>
        
        <div ref={carouselRef} className="flex h-full gap-3 overflow-x-auto scroll-smooth scrollbar-hide "> 
          {produtosLocais.map((produto) => (

            <div key={produto.id} className="w-65 flex flex-col items-center flex-none rounded border border-fuchsia-500">
              <div className="w-full h-70 rounded-lg flex justify-center items-center">
              <img 
                src={produto.imagem}
                alt={produto.nome}
                className="w-60 h-65 object-cover rounded-md border-3 border-fuchsia-500"/>
              </div>
              <div className="h-30 w-full flex flex-col justify-between items-center">
                <span className="text-lg font-bold text-fuchsia-500 text-center">{produto.nome}</span>
                <span className="line-through text-red-500 text-sm">R$ {produto.preco}</span>

                <div className="w-full h-full flex justify-center items-center ">
                <span className="font-bold w-40 h-6 rounded-lg flex justify-center items-center text-white bg-fuchsia-600 text-sm">
                R$ {produto.promocao}
                </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        <button 
          className="absolute right-10 top-1/2 transform -translate-y-1/2 text-fuchsia-600 rounded-full w-10 h-10 text-8xl  flex items-center justify-center z-10 transition-all duration-300 ease-in-out hover:scale-110"
          onClick={scrollRight}
        >
          ›
        </button>
      </div>
    </div>
  );
};
