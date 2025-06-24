import { ButonDescricao } from "./butonProps"
import img_avatar1 from "../../../../assets/img2/i13.webp";

export const Modal4 = () => {
  return (
    <div>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop4"
      >
        Saiba mais
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop4"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel4"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-2 text-danger"
                id="staticBackdropLabel4"
              >
                {" "}
                Sobre iten{" "}
              </h1>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="text-center mb-3">
                <img
                  src={img_avatar1}
                  alt="Avatar"
                  className="img-fluid rounded"
                  style={{ maxWidth: "200px" }}
                />
              </div>
              <ButonDescricao
                tema=" Livro para colorir  Bobbie Goods "
                descricao="Kit Livro De Colorir Bobbie Goods Com Conjunto De 24 Canetas Pontas Duplas"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
