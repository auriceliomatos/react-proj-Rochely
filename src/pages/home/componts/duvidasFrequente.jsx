import cepi from '../../../assets/img/1.jpg'

//const cepi = 'https://www.cepi.cb.ce.gov.br/wp-content/uploads/sites/100/2019/04/CEPI_cabe%C3%A7alho.png';
import { ImgCepi, P2, P3, A, Container, H1 } from './stylesDuvidas'

export const DuvidasFrequente = () => {
    return (
        <Container>
            <H1>Dúvidas no AVCB/CBMCE</H1>
            <div className="row">
                <div className="col-md-6">
                    <P2>
                    O AVCB do Corpo de Bombeiros Militar do Ceará, tem como OBJETIVO: Estabelecer os critérios do processo de segurança contra incêndio e pânico das edificações e áreas de risco, atendendo ao previsto na Lei nº 13.556, de 29 de dezembro de 2004, alterada pela Lei nº 16.361, de 9 de outubro de 2017.
                    </P2>
                </div>
                <div className="col-md-6 ">
                    <ImgCepi src={cepi} alt="CEPI" />
                </div>
            </div>
            
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            O que é o AVCB?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <P3>
                            O AVCB é um documento que atesta que uma edificação cumpre com as normas de segurança...
                            </P3>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Quem precisa de AVCB?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <P3>
                            Edificações de uso coletivo, como escolas, hospitais, shoppings...
                            </P3>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            O que acontece se não tiver AVCB?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <P3>
                            A falta do AVCB pode resultar em multas e penalidades...
                            </P3>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                        >
                            Como posso solicitar o certificado de AVCB?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <P3>
                            As solicitações devem ser feitas de forma digital pelo site do <A href="https://www.cepi.cb.ce.gov.br/servicos-avcb/">CEPI</A> clicando em Serviços....
                            </P3>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                        >
                        Quais documento são necessários para solicitar o certificado?
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <P3>
                            Nota fiscal dos extitores / Documentação da edificação, como comprovante de área (como escritura e IPTU) e / CNPJ impresso.
                            </P3>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    );
}