import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home2.css";

function Home2() {
  const people = [
    {
      name: "Fabricio",
      age: 29,
      comment: "TPA PARA MI ES SALUD, BIENESTAR, APRENDIZAJE Y CONSIENCIA POSTURAL",
    },
    {
      name: "Rita",
      age: 85,
      comment: "BUENA PREDISOPSICIÓN, ACOMPAÑAMIENTO Y BEIENESTAR GENERAL ",
    },
    {
      name: "Nuria",
      age: 50,
      comment: "BIENESTAR PARA MI SALUD Y DESENCHUFE MENTAL",
    },
    {
      name: "Nora",
      age: 66,
      comment: "DESAFÍO PERMAMENTE Y SUPERACIÓN PERSONAL. EXCELENTES PROFESIONALES",
    },
    {
      name: "Adriana",
      age: 51,
      comment: "CAMBIO DE VIDA. MEJOR CALIDAD DE VIDA",
    },
    {
      name: "Sonia",
      age: 60,
      comment: "DISFRUTE, BIENESTAR, FUERZA Y ELONGACIÓN",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    },
  };

  return (
    <>
      <div className="comments-header">
        <h2>Comentarios</h2>
        <p>Testimonios de nuestros alumnos:</p>
      </div>
      <Carousel className="carousel"
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={10000000}
        keyBoardControl
        showDots
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {people.map((person, index) => (
          <div key={index} className="comment-card text-center p-2">
            <h4 className="name">{person.name}</h4>
            <p className="age">{person.age} años</p>
            <p className="comment">"{person.comment}"</p>
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default Home2;