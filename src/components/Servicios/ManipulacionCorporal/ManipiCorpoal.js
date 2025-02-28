import { Container } from "react-bootstrap"
import "./manipula.css"


function ManipulacionCorporal() {
  return (
    <Container fluid className="about-section">
      <Container>
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
               <strong className="purple">
               Manipulacion Corporal
               </strong>
            </h1>

      <p className="about-para">
      <h2 className="title">M. Reductor Manual abdomen + flancos</h2>
      <br></br>
Masaje de movimientos rápidos e intensos que estimulan la circulación y
ayudan a disolver los depósitos grasos subcutáneos.

<p className="hono"><span className="honorario">Honorario por sesion:</span> $16000 (40 minutos)</p>
<br></br>
<span className="frecuencia">Frecuencia recomendada:</span> una sesión semanal de cuatro a seis semanas.
<br></br>

<h2 className="title">M. Reductor Manual abdomen + flancos +piernas</h2>
<span className="frecuencia">Frecuencia recomendada:</span> una sesión semanal de cuatro a seis semanas.

$19000 (50 minutos)
M. espalda (40 minutos)

      </p>

      </Container>
      </Container>
  );
}

export default ManipulacionCorporal;