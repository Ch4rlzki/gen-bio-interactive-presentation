import "../App.css";
import { Container, Nav, Navbar, NavLink, Row, Col, Image, Button, Modal } from "react-bootstrap";
import { useState } from "react";

import cellMembrane from "../imgs/cell-membrane.png";
import centrosome from "../imgs/centrosome.png";
import cytoplasm from "../imgs/cytoplasm.png";
import endoplasmic from "../imgs/endoplasmic.png";
import golgiApparatus from "../imgs/golgi-apparatus.png";
import nuclearMembrane from "../imgs/nuclear-membrane.png";
import nucleopore from "../imgs/nucleopore.png";
import nucleus from "../imgs/nucleus.png";
import peroxisomes from "../imgs/peroximes.png";
import ribosome from "../imgs/ribosome.png";
import vacuole from "../imgs/vacuole.png";

function NavBar() {
  return (
    <header>
      <Navbar expand="md" className="bg-body" fixed="top">
        <Container>
          <Navbar.Brand href="#">General Biology Group 3</Navbar.Brand>
          <Navbar.Toggle aria-controls="navBar" />
          <Navbar.Collapse id="navBar">
            <Nav className="col d-flex justify-content-end">
              <NavLink href="/#" active>Home</NavLink>
              <NavLink href="/#diseases">Diseases</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

function LeftOrganelle(name, func, img, RLAnalogy) {
  const [isShow, setIsShow] = useState(false);

  const handleClose = () => {
    setIsShow(false);
  }

  const showModal = () => {
    setIsShow(true);
  }

  return (
    <section className="bg-body-secondary">
      <Modal className="position-fixed d-flex justify-content-center align-items-center" show={isShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Real life analogy of {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{RLAnalogy}</p>
        </Modal.Body>
      </Modal>
      <Container className="py-3 py-md-5">
        <Row className="gap-3 gap-md-5">
          <Col className="d-flex justify-content-center align-items-center" md>
            <Image src={img} alt={img} fluid rounded/>
          </Col>
          <Col className="d-flex justify-content-center align-items-center" md>
            <div>
              <h2>{name}</h2>
              <p>{func}</p>
              <Button onClick={showModal}>Real Life Analogy</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function RightOrganelle(name, func, img, RLAnalogy) {
  const [isShow, setIsShow] = useState(false);

  const handleClose = () => {
    setIsShow(false);
  }

  const showModal = () => {
    setIsShow(true);
  }

  return (
    <section className="bg-body-tertiary">
      <Modal className="position-fixed d-flex justify-content-center align-items-center" show={isShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Real life analogy of {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{RLAnalogy}</p>
        </Modal.Body>
      </Modal>
      <Container className="py-3 py-md-5">
        <Row className="gap-3 gap-md-5">
          <Col className="d-flex justify-content-center align-items-center" md>
            <div>
              <h2>{name}</h2>
              <p>{func}</p>
              <Button onClick={showModal}>Real Life Analogy</Button>
            </div>
          </Col>
          <Col className="d-flex justify-content-center align-items-center" md>
            <Image src={img} alt={img} fluid rounded/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function NuclearMembrane() {
  const name = "Nuclear Membrane";
  const [isShow, setIsShow] = useState(false);

  const handleClose = () => {
    setIsShow(false);
  }

  const showModal = () => {
    setIsShow(true);
  }

  return (
    <section className="bg-body-secondary">
      <Modal className="position-fixed d-flex justify-content-center align-items-center" show={isShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Real life analogy of {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>The nuclear membrane is like a hall monitor who controls traffic in the halls.</p>
        </Modal.Body>
      </Modal>
      <Container className="py-3 py-md-5">
        <Row className="gap-3 gap-md-2">
          <Col className="d-flex justify-content-center align-items-center" md>
            <Image src={nuclearMembrane} alt={nuclearMembrane} fluid rounded/>
          </Col>
          <Col className="d-flex justify-content-center align-items-center" md>
            <div>
              <h2>{name}</h2>
              <p>It is a double-membrane structure that surrounds the nucleus. It is also referred to as the nuclear envelope.</p>
              <h3>Parts</h3>
              <ol>
                <li className="mb-2"><b>Outer Membrane</b> – It is a lipid bilayer containing two layers of molecules of lipid. The outer layer is made up of lipids which have ribosomes on the surface that are linked to the endoplasmic reticulum.</li>
                <li><b>Inner Membrane</b> –  It contains proteins that rearrange the nucleus and chain the genetic material in position. The nuclear lamina is the attachment of proteins and fibres that are linked to the inner membrane. It provides structural support to the nucleus, assists in DNA repair, controls cell cycle events such as cell division and also on DNA replication.</li>
              </ol>
              <Button onClick={showModal}>Real Life Analogy</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-body py-5">
      <Container>
        <Row className="gap-3 gap-md-5">
          <Col md>
            <h2>Conclusion</h2>
            <p>Animal cell organelles are the architectural wonders that make life possible. Each organelle plays a specialized role in maintaining cellular function, and together, they orchestrate the complex processes required for life. Understanding these organelles is not only essential for biology enthusiasts but also for scientists and medical professionals striving to unlock the secrets of health and disease at the cellular level. The study of these microscopic components continues to drive breakthroughs in medicine and biotechnology, offering promising avenues for improving human health and well-being.</p>
            <p>Join us in this educational journey to unravel the inner workings of animal cells. Each organelle has a unique role, contributing to the symphony of life. Dive deeper into our website to explore these organelles in detail, enhancing your understanding of the extraordinary world of animal cells.</p>
          </Col>
          <Col md={4}>
          <h2>Members</h2>
            <ol>
              <li>Antonio Miguel Ferrer</li>
              <li>Harvie Melgar Mariquit</li>
              <li>Lance Claude Estella</li>
              <li>Myles Trist Palacio</li>
              <li>Naethan Miramon</li>
              <li>Ryan Anthony Gabito</li>
              <li>Charles Henry Tinoy</li>
            </ol>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

function Home() {
  return (
    <div>
      {NavBar()}

      <main className="mt-5">
        <section className="bg-body-tertiary">
          <Container className="py-3 py-md-5">
            <h2>Welcome to The World of Animal Cells</h2>
            <Container>
              <h3>Unlocking the Mysteries of Cellular Life</h3>
              <p>Welcome to our fascinating journey into the intricate world of animal cells. Delve deep into the building blocks of life as we explore the diverse organelles that make up these remarkable entities. From the protective cell membrane to the energy-producing mitochondria, we invite you to discover the wonders hidden within the microscopic realm.</p>
            </Container>
          </Container>
        </section>

        {LeftOrganelle("Cell Membrane", "A thin semipermeable membrane layer of lipids and proteins surrounding the cell. Its primary role is to protect the cell from its surrounding. Also, it controls the entry and exit of nutrients and other microscopic entities into the cell. For this reason, cell membranes are known as semi-permeable or selectively permeable membranes.", cellMembrane, "The Cell Membrane is like the hospital's outer walls and doors. There are employee access doors where only empolyees can enter.")}
        {RightOrganelle("Nucleus", "It is an organelle that contains several other sub-organelles such as nucleolus, nucleosomes and chromatins. It also contains DNA and other genetic materials.", nucleus, "Headquarters, The nucleus of a cell controls the operations of a cell. In a similar manner, factory headquarters controls the operations of a factory.")}

        {NuclearMembrane("Centrosome", "It is a small organelle found near the nucleus, which has a thick centre with radiating tubules. The centrosomes are where microtubules are produced.", centrosome, "The centrosome can be thought of like a shipping box being delivered to your door. The shipping box is like the centrosome. Inside the box are two presents, the centrioles.")}
        {RightOrganelle("Cytoplasm", "A jelly-like material which contains all the cell organelles, enclosed within the cell membrane. The substance found within the cell nucleus, contained by the nuclear membrane is called the nucleoplasm.", cytoplasm, "The cytoplasm is analogous to the circulatory system in the body.")}

        {LeftOrganelle("Golgi Apparatus", "A flat, smooth layered, sac-like organelle which is located near the nucleus and involved in manufacturing, storing, packing and transporting the particles throughout the cell.", golgiApparatus, "The Golgi apparatus is like a post office, because the whole point of a post office is to package and deliver things.")}
        {RightOrganelle("Ribosome", "They are small organelles made up of RNA-rich cytoplasmic granules, and they are the sites of protein synthesis.", ribosome, "The ribosomes in a cell are like the kitchen in a house. In the kitchen, meals are cooked and prepared. It is similar to ribosomes using amino acids to make proteins.  A cell's vacuole can be compared to a refrigerator.")}

        {LeftOrganelle("Endoplasmic Reticulum (ER)", "This cellular organelle is composed of a thin, winding network of membranous sacs originating from the nucleus.", endoplasmic, "The endoplasmic reticulum is like a road way in the cell. The endoplasmic reticulum is like a freeway, because it gets people from place to place.")}
        {RightOrganelle("Vacuole", "A membrane-bound organelle present inside a cell involved in maintaining shape and storing water, food, wastes, etc.", vacuole, "Vacuole, 'waste basket'. It stores the waste products, like unwanted lipids and proteins, created from various cellular processes.")}

        {LeftOrganelle("Nucleopore", "They are tiny holes present in the nuclear membrane which are involved in the movement of nucleic acids and proteins across the nuclear membrane.", nucleopore, "The nucleopore operates rather like a turnstile or ticket gate. Those entering the event area will need a ticket to operate the stile or gate. Small items can be passed through the turnstile but people with large items need special facilities.")}
        {RightOrganelle("Peroxisomes", "Peroxisomes are specialized for carrying out oxidative reactions using molecular oxygen. They generate hydrogen peroxide, which they use for oxidative purpose destroying the excess by means of the catalase they contain.", peroxisomes, "peroxisome, it is similar to a recycling plant. In a recycling plant, old or unwanted materials are cleaned and repurposed into new material.")}
      </main>

      {Footer()}

      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
      <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossorigin></script>
      <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
    </div>
  );
}
  
export default Home;