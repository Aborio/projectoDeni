// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { AiFillEnvironment } from "react-icons/ai";
// import QRCode from "qrcode.react"; // Instala con: npm install qrcode.react

// function Footer() {
//   const address = "Av. Siempre Viva 123, Springfield, USA";

//   return (
//     <Container fluid className="footer">
//       <Row>
//         <Col md="12" className="footer-heading text-center">
//           <h2>¿Dónde nos encontramos?</h2>
//         </Col>
//       </Row>
//       <Row className="align-items-center">
//         {/* Dirección */}
//         <Col md="4" className="footer-location text-center">
//           <div className="location-box">
//             <AiFillEnvironment size={50} color="#ffffff" />
//             <h4 className="mt-3">Nuestra dirección</h4>
//             <p>{address}</p>
//           </div>
//         </Col>

//         {/* Mapa */}
//         <Col md="4" className="footer-map text-center">
//           <iframe
//             title="Location Map"
//             src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(
//               address
//             )}`}
//             width="100%"
//             height="200"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </Col>

//         {/* QR */}
//         <Col md="4" className="footer-qr text-center">
//           <h4 className="mt-3">Escanea el QR</h4>
//           <QRCode value={address} size={150} />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Footer;



import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillEnvironment, AiOutlineInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import qr from "../Assets/qr.png";

function Footer() {
  const address = "Av. Siempre Viva 123, Springfield, USA"; // Dirección de ejemplo
  const googleMapsUrl = `https://www.google.com/maps/place/Gaudencio+Mainardi+621,+S2300KQA+Rafaela,+Santa+Fe/@-31.2408893,-61.4998751,17z/data=!4m13!1m7!3m6!1s0x95caae1431d738d5:0xace1cc344f69f898!2sGaudencio+Mainardi+621,+S2300KQA+Rafaela,+Santa+Fe!3b1!8m2!3d-31.240894!4d-61.4950042!3m4!1s0x95caae1431d738d5:0xace1cc344f69f898!8m2!3d-31.240894!4d-61.4950042?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D`; // URL de Google Maps

  // Links de redes sociales
  const whatsappUrl = "https://wa.me/1234567890"; // Reemplaza con tu número de WhatsApp
  const instagramUrl = "https://www.instagram.com/algoentremanos?igsh=eXlkd2c4OGZjam9z"; // Reemplaza con tu perfil de Instagram

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-heading text-center">
          <h2>¿Dónde nos encontramos?</h2>
        </Col>
      </Row>
      <Row className="align-items-center">
        {/* Dirección */}
        <Col md="4" className="footer-location text-center">
          <div className="location-box">
            <AiFillEnvironment size={50} color="#ffffff" />
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="location-button"
            >
              Nuestra dirección
            </a>
          </div>
        </Col>

        {/* QR PNG */}
        <Col md="4" className="footer-qr text-center">
          <h4 className="mt-3">Escanea el QR</h4>
          <img
            src={qr}
            alt="Código QR de la dirección"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Col>

        {/* Comunícate con Nosotros */}
        <Col md="4" className="footer-contact text-center">
          <h4 className="mt-3">Comunícate con nosotros</h4>
          <div className="contact-icons">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
            >
              <FaWhatsapp size={50} />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
            >
              <AiOutlineInstagram size={50} />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

