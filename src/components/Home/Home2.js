import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home2.css";

function Home2() {
  const people = [
    {
      name: "Fabricio Santi",
      age: 29,
      comment: "TPA PARA MI ES SALUD, BIENESTAR, APRENDIZAJE Y CONCIENCIA POSTURAL",
    },
    {

      name: "Luciana Androetto",
      age: 30,
      comment: "ES UN MOMENTO EN EL QUE ME CONECTO CON TODO MI SET FISICO Y EMOCIONAL. ME PROVOCA MUCHISIMO PLACER COLGARME, ELONGAR, MANTENERME ACTIVA PERO SERENA Y CONSCIENTE, ESTOY LOGRANDO MUCHOS BENEFICIOS FISICOS",
    },
    {

      name: "Marcel Alberti",
      age: 59,
      comment: "RELAJACION, CONCENTRACION, BIENESTAR PARA MI SALUD",
    },
    {

      name: "Marta Borsarelli",
      age: 71,
      comment: "falto el comentario tia",
    },
  ];

  return (
   <>
      <div className="comments-header">
        <h2>Comentarios</h2>
        <p>Conoce lo que opinan nuestros participantes:</p>
      </div>
      <Row className="comments-container">
  {people.map((person, index) => (
    <div key={index} className="comment-card">
      <div className="card-content">
        <h4 className="name">{person.name}</h4>
        <p className="age">{person.age} años</p>
        <p className="comment">"{person.comment}"</p>
      </div>
    </div>
  ))}
</Row>
    </>
  );
}

export default Home2;