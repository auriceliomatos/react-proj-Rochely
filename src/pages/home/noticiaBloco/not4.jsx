import { Modal4 } from "./butonProps/buton4";
import { H1, P, Badge } from "./stylesBloco";
import img_avatar1 from "../../../assets/img2/i13.webp";

export const Not4 = () => {
  return (
    <div className="row">
      <div className="col-md-4 ">
        <div className="card border border-2 p-1" style={{ width: "250px" }}>
          <img
            className="card-img-top"
            src={img_avatar1}
            alt="Card image"
          />
          <Badge className="badge text-bg-success">Promoção</Badge>
          <div className="card-body">
            <H1 className="card-title"> Kit de Colorir </H1>
            <P className="card-text"> R$ 124,00 </P>
            <Modal4 />
          </div>
        </div>
      </div>
    </div>
  );
};
