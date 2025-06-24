import { Modal5 } from "./butonProps/buton5";
import { H1, P, Badge } from "./stylesBloco";
import img_avatar1 from "../../../assets/img2/i12.webp";

export const Not5 = () => {
  return (
    <div className="row">
      <div className="col-md-4 ">
        <div className="card border border-3 p-1" style={{ width: "250px" }}>
          <img
            className="card-img-top"
            src={img_avatar1}
            alt="Card image"
          />
          <Badge className="badge text-bg-success"> Promoção </Badge>

          <div className="card-body">
            <H1 className="card-title"> Kit de Colorir </H1>
            <P className="card-text"> R$ 70,00</P>
            <Modal5 />
          </div>
        </div>
      </div>
    </div>
  );
};
