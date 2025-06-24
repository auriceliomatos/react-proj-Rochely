// importações de componentes
import { Not1 } from '../noticiaBloco/not1'
import { Not2 } from '../noticiaBloco/not2'
import { Not3 } from '../noticiaBloco/not3'
import { Not4 } from '../noticiaBloco/not4'
import { Not5 } from '../noticiaBloco/not5'

import { H1, P, Container } from './stylesMateria'

export const Materia = () => {
    return (
        <Container>
            <H1> MAIS VENDIDOS </H1>
            <P> Acompanhe os intens mais vendidos </P>
            <div className="row">
                <div className="col">
                    <Not1 />
                </div>
                
                <div className="col">
                    <Not2 />
                </div>

                <div className="col">
                    <Not3 />
                </div>

                <div className="col">
                    <Not4 />
                </div>

                <div className="col">
                    <Not5 />
                </div>
            </div>
        </Container>
    )
}