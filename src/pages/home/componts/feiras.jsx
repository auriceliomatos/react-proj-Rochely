// importações de estilos
import { Container, H1, P } from './stylesFeira'

// importações de componentes
import { FeirasExposico } from '../feira/feirasExposico'
import { FeirasExposico2 } from '../feira/feirasExposico2'


export const Feiras = () => {
    return (
        <Container style={{ padding: "40px 20px" }}>
            <div className="row mb-4">
                <div className="col-12 text-center">
                    <H1> Feiras </H1>
                    <P> Acompanhe nossas feiras </P>   
                </div>
            </div>
            <div className="row justify-content-center g-4">
                <FeirasExposico />
                <FeirasExposico2 />
                <FeirasExposico />
                <FeirasExposico2 />
            </div>
        </Container>
    )
}