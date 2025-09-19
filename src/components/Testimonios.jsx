
import "../styles/testimonios.css";

// Importar imágenes manualmente
import fernandoImg from '../img/testimonio-fernando.jpg';
import santiagoImg from '../img/testimonio-santiago.jpg';
import matiasImg from '../img/testimonio-matias.jpg';

const images = {
  'testimonio-fernando.jpg': fernandoImg,
  'testimonio-santiago.jpg': santiagoImg,
  'testimonio-matias.jpg': matiasImg
};


function Testimonios(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="img-testimonio"
        src={images[`testimonio-${props.imagen}.jpg`]}
        alt={`Foto de ${props.nombre}`}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
         <strong>{props.nombre}</strong> es {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} de <strong> {props.empresa}</strong>
        </p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );
}

export default Testimonios;
