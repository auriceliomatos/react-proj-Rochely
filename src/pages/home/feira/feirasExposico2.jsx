// importações de estilos
import { H1, Badge} from "./stylesFeiras";

// importações de imagens
import img_avatar1 from "../../../assets/img2/f2.jpeg";

export const FeirasExposico2 = () => {
  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card feiras-card" style={{ width: "100%", maxWidth: "280px", margin: "0 auto" }}>
        <div style={{ position: "relative" }}>
          <img 
            className="card-img-top" 
            src={img_avatar1} 
            alt="Feira de Exposição" 
            style={{ height: "350px", objectFit: "cover" }} 
          />
          <Badge style={{ position: "absolute", top: "10px", right: "10px" }}>
            Centro
          </Badge>
        </div>
        <div className="card-body text-center">
          <H1 style={{ fontSize: "18px", marginBottom: "10px" }}>Feira no Centro</H1>
        </div>
      </div>
    </div>
  );
};