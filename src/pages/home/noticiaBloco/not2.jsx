import { Modal2 } from "./butonProps/buton2";
import { H1, P, Badge } from "./stylesBloco";
import img_avatar from "../../../assets/img2/i1.webp";

export const Not2 = () => {
  return (
    <div className="row">
      <div className="col-md-4 ">
        <div className="card border border-2 p-1" style={{ width: "250px" }}>
          <img
            className="card-img-top"
            src={img_avatar}
            alt="Card image"
          />
          <Badge className="badge text-bg-danger"> liquidação </Badge>
          <div className="card-body">
            <H1 className="card-title"> Livro para colorir </H1>
            <P className="card-text"> R$ 159,00 </P>
            <Modal2 />
          </div>
        </div>
      </div>
    </div>
  );
};
