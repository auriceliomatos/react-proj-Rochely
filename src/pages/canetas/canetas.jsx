// importações de styled components
import { Container, H1, P, GridContainer, Card, CardImage, CardTitle, CardPrice, CardButton, Badge } from "./stylesCanetas"

// importações de componentes
import { Nav } from "../../routes/nav"
import { Footer } from "../foot/foot"

// importações de imagens
import img1 from '../../assets/img2/c1.jpeg';
import img2 from '../../assets/img2/c2.jpeg';
import img3 from '../../assets/img2/c3.jpeg';
import img4 from '../../assets/img2/c4.jpeg';
import img5 from '../../assets/img2/i4.png';

export const Canetas = () => {
    const Canetas = [
        {
            id: 1,
            titulo: "Cantas 36 peças",
            preco: "R$ 50,00",
            imagem: img1,
            descricao: "Conjunto De Canetas Marcador Permanente Ponta Dupla 48 Cores"
        },
        {
            id: 2,
            titulo: "Canetas 24 peças",
            preco: "R$ 35,00",
            imagem: img2,
            descricao: "Kit Livro De Colorir Bobbie Goods Com Conjunto De 24 Canetas Pontas Duplas",
            promocao: true
        },
        {
            id: 3,
            titulo: "Canetas 48 peças",
            preco: "R$ 65,00",
            imagem: img3,
            descricao: "48 Canetas Pontas Duplas"
        },
        {
            id: 4,
            titulo: "Canetas 60 peças",
            preco: "R$ 75,00",
            imagem: img4,
            descricao: "60 Canetas Pontas Duplas"
        },
        {
            id: 5,
            titulo: "Canetas unidades",
            preco: "R$ 3,00",
            imagem: img5,
            descricao: "1 (um) Canetas Pontas Duplas",
            promocao: true
        }
    ];

    return (
        <Container>
            <Nav />
            <H1>Nossas Canetas Coloridas</H1>
            <P>Descubra nossa coleção completa de canetas coloridas para colorir</P>
            
            <GridContainer>
                {Canetas.map((Caneta) => (
                    <Card key={Caneta.id}>
                        {Caneta.promocao && (
                        <Badge className="badge text-bg-danger"> Mais Vendido </Badge>
                        )}
                        <CardImage src={Caneta.imagem} alt={Caneta.titulo} />
                        <CardTitle>{Caneta.titulo}</CardTitle>
                        <CardPrice>{Caneta.preco}</CardPrice>
                        <CardButton>Ver Detalhes</CardButton>
                    </Card>
                ))}
            </GridContainer>
            <Footer />
        </Container>
    )
}