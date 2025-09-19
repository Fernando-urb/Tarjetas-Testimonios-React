import "../styles/testimonios.css"

const testimonialImages = import.meta.glob('../img/*.jpg', { eager: true, as: 'url' })

function Testimonios(props) {
  const imageKey = `../img/testimonio-${props.imagen}.jpg`
  const imageUrl = testimonialImages[imageKey]

  return (
    <div className="contenedor-testimonio">
      {imageUrl && (
        <img
          className="img-testimonio"
          src={imageUrl}
          alt={props.nombre ? `Foto de ${props.nombre}` : 'Testimonio'}
        />
      )}
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
  )
}

export default Testimonios

