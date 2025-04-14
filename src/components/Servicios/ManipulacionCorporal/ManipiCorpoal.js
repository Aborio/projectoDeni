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
Masaje de movimientos rápidos e intensos que estimulan la circulación y
ayudan a disolver los depósitos grasos subcutáneos.
<br></br>
<br></br>
      <h2 className="title">M. Reductor Manual abdomen + flancos</h2>

<p className="hono"><span className="honorario">Honorario por sesión:</span> $17000 (40 minutos)</p>
<span className="frecuencia">Frecuencia recomendada:</span> una sesión semanal de cuatro a seis semanas.
<br></br>
<br></br>
<br></br>
<h2 className="title">M. Reductor Manual abdomen + flancos +piernas</h2>
<p className="hono"><span className="honorario">Honorario por sesión:</span> $20000 (50 minutos)</p>
<span className="frecuencia">Frecuencia recomendada:</span> una sesión semanal de cuatro a seis semanas.


      </p>

      </Container>
      </Container>
  );
}

export default ManipulacionCorporal;