// importações de estilos
import { Container } from "./stylesHome.js";

// importações de componentes
import { Nav } from "../../routes/nav";
import { Footer } from "../foot/foot";
import { Carrousel } from "../home/componts/carrousel";
import { Historia } from "./componts/historia";
import { Materia } from "./componts/materia";

export const Home = () => {
  return (
    <Container>
      <Nav />
      <Carrousel />
      <Materia />
      <Historia />
      <Footer />
    </Container>
  );
};
