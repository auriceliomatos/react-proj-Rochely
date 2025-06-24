//importações de estilos
import { Container, H1, P, GridContainer, Card, CardImage, CardTitle, CardPrice, CardButton, Badge } from './stylesLivro';

//importações de componentes
import { Nav } from '../../routes/nav';
import { Footer } from '../foot/foot';

//importações de imagens
import img1 from '../../assets/img2/l1.jpg';
import img2 from '../../assets/img2/l2.jpg';
import img3 from '../../assets/img2/l3.jpg';
import img4 from '../../assets/img2/l4.jpg';
import img5 from '../../assets/img2/l5.jpg';

export const Livros = () => {
    const livros = [
        {
            id: 1,
            titulo: "Livro para colorir Bobbie Goods",
            preco: "R$ 159,00",
            imagem: img1,
            descricao: "Conjunto De Canetas Marcador Permanente Ponta Dupla 48 Cores",
            promocao: true
        },
        {
            id: 2,
            titulo: "Kit Livro De Colorir Bobbie Goods",
            preco: "R$ 259,00",
            imagem: img2,
            descricao: "Kit Livro De Colorir Bobbie Goods Com Conjunto De 100 Canetas Pontas Duplas"
        },
        {
            id: 3,
            titulo: "Livro De Colorir Comfy And Cozy",
            preco: "R$ 29,00",
            imagem: img3,
            descricao: "Livro De Colorir Comfy And Cozy Cute Fluffy Criatividade Relaxamento E Arte"
        },
        {
            id: 4,
            titulo: "Kit Livro De Colorir Bobbie Goods",
            preco: "R$ 124,00",
            imagem: img4,
            descricao: "Kit Livro De Colorir Bobbie Goods Com Conjunto De 24 Canetas Pontas Duplas",
            promocao: true
            
        },
        {
            id: 5,
            titulo: "Livro para colorir Bobbie Goods",
            preco: "R$ 70,00",
            imagem: img5,
            descricao: "Livro para colorir infantil Bobbie Goods - PT 1 UND"
        }
    ];

    return (
        <Container>
            <Nav />
            <H1>Nossos Livros de Colorir</H1>
            <P>Descubra nossa coleção completa de livros de colorir Bobbie Goods</P>
            
            <GridContainer>
                {livros.map((livro) => (
                    <Card key={livro.id}>
                        {livro.promocao && (
                        <Badge className="badge text-bg-danger"> Mais Vendido </Badge>
                        )}
                        <CardImage src={livro.imagem} alt={livro.titulo} />
                        <CardTitle>{livro.titulo}</CardTitle>
                        <CardPrice>{livro.preco}</CardPrice>
                        <CardButton>Ver Detalhes</CardButton>
                    </Card>
                ))}
            </GridContainer>
            <Footer />
        </Container>
    )
}