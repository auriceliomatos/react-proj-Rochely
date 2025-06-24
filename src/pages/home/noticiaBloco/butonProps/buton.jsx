import { ButonDescricao } from "./butonProps"
import img_avatar from "../../../../assets/img2/i10.webp";

export const Modal = () => {
  return (
    <div>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop1"
      >
        Saiba mais
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-2 text-danger"
                id="staticBackdropLabel1"
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
                  src={img_avatar}
                  alt="Avatar"
                  className="img-fluid rounded"
                  style={{ maxWidth: "200px" }}
                />
              </div>
              <ButonDescricao
                tema=" Kit de Colorir "
                descricao="Kit Livro De Colorir Bobbie Goods Com Conjunto De 100 Canetas Pontas Duplas"
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
