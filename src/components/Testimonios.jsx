
import "../styles/testimonios.css";

function Testimonios(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="img-testimonio"
        src={ (`../img/testimonio-${props.imagen}.jpg`)}
        alt="img-fernando"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
         <strong>{props.nombre}</strong> en {props.pais}
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
