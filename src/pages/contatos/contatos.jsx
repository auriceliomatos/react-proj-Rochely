// importações de styled components
import { H1, Container, FormContainer, Form, Input, TextArea, Button, MapContainer } from './stylesContatos';

// importações de componentes
import { Nav } from '../../routes/nav';
import { Footer } from '../foot/foot';

export const Contatos = () => {
    return (
        <Container>
            <Nav />
            <H1> Contatos </H1>
            <FormContainer>
                <Form>
                    <label htmlFor="nome">Nome:</label>
                    <Input id="nome" name="nome" type="text" required placeholder="Digite seu nome" />
                    <label htmlFor="email">E-mail:</label>
                    <Input id="email" name="email" type="email" required placeholder="Digite seu e-mail" />
                    <label htmlFor="mensagem">Mensagem:</label>
                    <TextArea id="mensagem" name="mensagem" rows="4" required />
                    <Button type="submit">Enviar</Button>
                </Form>
                <MapContainer>
                    <iframe
                        title="Localização"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.457013353202!2d-46.65657468440644!3d-23.58819536847495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8e4e6e7e7%3A0x8e8e8e8e8e8e8e8e!2sPaulista%20Avenue!5e0!3m2!1sen!2sbr!4v1680000000000!5m2!1sen!2sbr"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </MapContainer>
            </FormContainer>
            <Footer />
        </Container>
    )
}