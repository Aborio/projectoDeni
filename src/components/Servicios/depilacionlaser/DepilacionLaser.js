import { Container } from "react-bootstrap";
import "./depilacion.css"


function DepilacionLaser() {
  return (
  <Container fluid className="about-section">
    <Container>

    <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
               <strong className="purple">
                Depilacion Laser
               </strong>
            </h1>


            <p className="about-para">
            Es un procedimiento diseñado para eliminar vello de forma prolongada
mediante el uso de un láser que emite una luz concentrada, destruyendo el
folículo piloso e inhibiendo su crecimiento.
<br></br>
<span className="frecuencia">Frecuencia recomendada:</span> de 4 a 6 semanas.
<br></br>
La <span className="edadsu">edad sugerida</span> es a partir de los 16-18 años.
<br></br>
<span className="frecuencia">Antes del tratamiento:</span> no exponerse al sol, rasurarse las áreas a tratar 24-48 hs
antes con la máquina de afeitar tipo track y posterior a la sesión evitar la
exposición al calor extremo y usar protector solar en las zonas expuestas.
              </p>

      </Container>
    </Container>
  );
}

export default DepilacionLaser;