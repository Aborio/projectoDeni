// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
// import Particle from "../Particle";
// import Home2 from "./Home2";
// import Type from "./Type";

// function Home() {
//   return (
//     <section>
//       <Container fluid className="home-section" id="home">
//         <Particle />
//         <Container className="home-content">
//           <Row>
//             {/* <Col md={7} className="home-header">
//               <h1 style={{ paddingBottom: 15 }} className="heading">
//                 Hi There!{" "}
//                 <span className="wave" role="img" aria-labelledby="wave">
//                   👋🏻
//                 </span>
//               </h1>

//               <h1 className="heading-name">
//                 I'M
//                 <strong className="main-name"> AGUSTIN BORIO</strong>
//               </h1>

//               <div style={{ padding: 50, textAlign: "left" }}>
//                 <Type />
//               </div>
//             </Col>

//             <Col md={5} style={{ paddingBottom: 20 }}>
//               <img
//                 src={homeLogo}
//                 alt="home pic"
//                 className="img-fluid"
//                 style={{ maxHeight: "450px" }}
//               />
//             </Col> */}
//             <br></br>
//             <p>aca van a ir los com</p>
//           </Row>
//         </Container>
//       </Container>
//       <Home2 />
//     </section>
//   );
// }

// export default Home;

import React from "react";
import { Container, Carousel } from "react-bootstrap";
import Home2 from "./Home2";
import carr1 from "../../Assets/carr1.jpg";
import carr2 from "../../Assets/carr2.jpg";
import carr3 from "../../Assets/carr3.jpg";
import Footer from "../Footer";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Carousel className="fullscreen-carousel" 
        interval={3000} // 3 segundos entre cada cambio
        indicators={false} // Opcional, para ocultar los indicadores
        controls={true} // Asegúrate de que los controles estén habilitados
        pause="false">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carr1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Tu espacio de bienestar</h3>
              <p>Descubre la conexión entre cuerpo y mente.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carr2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Relajación y equilibrio</h3>
              <p>Transforma tu salud y bienestar.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carr3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Bienestar personalizado</h3>
              <p>Nos dedicamos a tu cuidado activo.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Home2 />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </section>
  );
}

export default Home;


