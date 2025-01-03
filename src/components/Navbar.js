// import React, { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import logo from "../Assets/logo.png";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import { CgGitFork } from "react-icons/cg";
// import { ImBlog } from "react-icons/im";
// import {
//   AiFillStar,
//   AiOutlineHome,
//   AiOutlineFundProjectionScreen,
//   AiOutlineUser,
// } from "react-icons/ai";

// import { CgFileDocument } from "react-icons/cg";

// function NavBar() {
//   const [expand, updateExpanded] = useState(false);
//   const [navColour, updateNavbar] = useState(false);

//   function scrollHandler() {
//     if (window.scrollY >= 20) {
//       updateNavbar(true);
//     } else {
//       updateNavbar(false);
//     }
//   }

//   window.addEventListener("scroll", scrollHandler);

//   return (
//     <Navbar
//       expanded={expand}
//       fixed="top"
//       expand="md"
//       className={navColour ? "sticky" : "navbar"}
//     >
//       <Container>
//         <Navbar.Toggle
//           aria-controls="responsive-navbar-nav"
//           onClick={() => {
//             updateExpanded(expand ? false : "expanded");
//           }}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ms-auto" defaultActiveKey="#home">
//             <Nav.Item>
//               <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
//                 <AiOutlineHome style={{ marginBottom: "2px" }} /> Inicio
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/about"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineUser style={{ marginBottom: "2px" }} /> Sobre Nosotros
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/project"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineFundProjectionScreen
//                   style={{ marginBottom: "2px" }}
//                 />{" "}
//                 Nuestros Servicios
//               </Nav.Link>
//             </Nav.Item>

//             {/* <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/resume"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <CgFileDocument style={{ marginBottom: "2px" }} /> 
//               </Nav.Link>
//             </Nav.Item> */}

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/certif"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <CgFileDocument style={{ marginBottom: "2px" }} /> Contactate con nosotros!
//               </Nav.Link>
//             </Nav.Item>


//             {/* <Nav.Item className="fork-btn">
//               <Button
//                 href="https://github.com/Aborio"
//                 target="_blank"
//                 className="fork-btn-inner"
//               >
//                 <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
//                 <AiFillStar style={{ fontSize: "1.1em" }} />
//               </Button>
//             </Nav.Item> */}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;

import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className="navbar">
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Inicio
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Sobre Nosotros
              </Nav.Link>
            </Nav.Item>

            {/* Dropdown funcional para Nuestros Servicios */}
            <Dropdown>
  <Dropdown.Toggle
    as={Nav.Link}
    variant="link"
    id="dropdown-custom"
    className="dropdown-toggle"
  >
    <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
    Nuestros Servicios
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item as={Link} to="/service1">
      Servicio 1
    </Dropdown.Item>
    <Dropdown.Item as={Link} to="/service2">
      Servicio 2
    </Dropdown.Item>
    <Dropdown.Item as={Link} to="/service3">
      Servicio 3
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/certif"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Contactate con nosotros!
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
