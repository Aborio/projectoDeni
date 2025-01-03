import React from "react";
import { Container } from "react-bootstrap";
import "./Home2.css"; // Archivo CSS vinculado

function Home2() {
  const people = [
    {
      img: "https://via.placeholder.com/150",
      name: "Juan Pérez",
      age: 25,
      comment: "Hola, me parece que algo entre manos es un momento de vida.",
      position: { top: "20%", left: "60%" },
    },
    {
      img: "https://via.placeholder.com/150",
      name: "Ana García",
      age: 30,
      comment: "Creo que trabajar en equipo nos hace mejores personas.",
      position: { top: "40%", left: "40%" },
    },
    {
      img: "https://via.placeholder.com/150",
      name: "Carlos López",
      age: 28,
      comment: "Me encanta compartir ideas y aprender de los demás.",
      position: { top: "60%", left: "60%" },
    },
    {
      img: "https://via.placeholder.com/150",
      name: "María Fernández",
      age: 27,
      comment: "Siempre hay algo nuevo por descubrir en cada paso que damos.",
      position: { top: "80%", left: "40%" },
    },
  ];

  return (
    <Container fluid className="home-about-section" id="about">
      <div className="relative-container">
        {people.map((person, index) => (
          <div
            key={index}
            className="absolute-item"
            style={{
              top: person.position.top,
              left: person.position.left,
            }}
          >
            <div className="cardHome">
              <img
                src={person.img}
                alt={`${person.name}'s avatar`}
                className="profile-img"
              />
              <h4>{person.name}</h4>
              <p className="age">{person.age} años</p>
              <p className="comment">"{person.comment}"</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Home2;
