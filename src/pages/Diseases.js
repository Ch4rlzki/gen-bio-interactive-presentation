import "../App.css";
import { Container, Nav, Navbar, NavLink, Row, Col, Image, Button, Modal } from "react-bootstrap";
import { useState } from "react";

import endoplasmicDiseases from "../imgs/endoplasmic-diseases.png";
import golgiApparatusDiseases from "../imgs/golgi-apparatus-diseases.png";
import mitochondrialDisorder from "../imgs/mitochondrial-disorders.png";
import nuclearEnvelopeDisorder from "../imgs/nuclear-envelope-disorders.png";
import noImage from "../imgs/no-image.jpg";

function NavBar() {
  return (
    <header>
      <Navbar expand="md" className="bg-body" fixed="top">
        <Container>
          <Navbar.Brand href="#">General Biology Group 3</Navbar.Brand>
          <Navbar.Toggle aria-controls="navBar" />
          <Navbar.Collapse id="navBar">
            <Nav className="col d-flex justify-content-end">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/diseases" active>Diseases</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
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

function LeftOrganelle(name, desc1, desc2, desc3, img, examples) {
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
          <Modal.Title>Examples of {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{examples}</p>
        </Modal.Body>
      </Modal>
      <Container className="py-3 py-md-5">
        <Row className="gap-3 gap-md-5">
          <Col className="d-flex justify-content-center align-items-center" md>
            <Image src={img} alt={img} fluid rounded />
          </Col>
          <Col className="d-flex justify-content-center align-items-center" md>
            <div>
              <h2>{name}</h2>
              <p>{desc1}</p>
              <p>{desc2}</p>
              <p>{desc3}</p>
              <Button onClick={showModal} variant="danger">Examples</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function RightOrganelle(name, desc1, desc2, desc3, img, examples) {
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
          <Modal.Title>Examples of {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{examples}</p>
        </Modal.Body>
      </Modal>
      <Container className="py-3 py-md-5">
        <Row className="gap-3 gap-md-5">
          <Col className="d-flex justify-content-center align-items-center" md>
            <div>
              <h2>{name}</h2>
              <p>{desc1}</p>
              <p>{desc2}</p>
              <p>{desc3}</p>
              <Button onClick={showModal} variant="danger">Examples</Button>
            </div>
          </Col>
          <Col className="d-flex justify-content-center align-items-center" md>
            <Image src={img === "" ? noImage : img} alt={img === "" ? noImage : img} fluid rounded />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function Diseases() {
  return (
    <div>
      {NavBar()}

      <main className="mt-5">
        {RightOrganelle("Mitochondrial Disorders", "These are a group of genetic disorders that affect the mitochondria, leading to impaired energy production.", "Mitochondrial diseases can manifest as a range of symptoms, including muscle weakness, fatigue, and organ dysfunction. One well-known example is mitochondrial myopathy.", "", mitochondrialDisorder, "Kearns–Sayre syndrome, LHON, Lactic acidosis, MELAS syndrome, Progressive external ophthalmoplegia, Friedreich's ataxia, Mitochondrial DNA depletion syndrome, Pearson syndrome, Narp Syndrome")}

        {LeftOrganelle("Endoplasmic Reticulum (ER) Stress-Related Diseases", "Malfunctions in the ER can lead to ER stress, contributing to various diseases.", "For instance, cystic fibrosis is caused by mutations in a protein called CFTR, which disrupts protein folding in the ER, leading to mucus buildup in the lungs.", "", endoplasmicDiseases, "Alzheimer’s disease, Parkinson’s disease, Amyotrophic lateral sclerosis, Type 2 diabetes, Atherosclerosis, Nonalcoholic fatty liver disease, HCV and HBV infection, Alcoholic liver disease, Cancer")}
        {RightOrganelle("Nuclear Envelope Disorders", "Mutations in genes encoding nuclear envelope proteins can lead to rare disorders known as laminopathies.", "These disorders can affect muscle, heart, and other tissues due to abnormalities in nuclear envelope structure and function.", "", nuclearEnvelopeDisorder, "Dilated cardiomyopathy with variable muscular dystrophy, Dunnigan-type familial partial lipodystrophy, Charcot-Marie-Tooth type 2 disease, mandibuloacral dysplasia, and Hutchinson-Gilford progeria syndrome.")}

        {LeftOrganelle("Golgi Apparatus-Related Diseases", "While not as common, disruptions in Golgi apparatus function can impact protein sorting and secretion.", "Some genetic disorders, like Hermansky-Pudlak syndrome, can affect the formation of vesicles in the Golgi, leading to issues with pigment and blood platelet production.", "", golgiApparatusDiseases, "Amyotrophic lateral sclerosis, Alzheimer's disease, Parkinson's disease, Huntington's disease, Creutzfeldt-Jacob disease and multiple system atrophy.")}
        {RightOrganelle("Peroxisomal Disorders", "Peroxisomes are involved in lipid metabolism and detoxification. Diseases like Zellweger syndrome result from peroxisomal dysfunction, leading to problems with fatty acid processing and other metabolic issues.", "", "", "", "Zellweger syndrome (ZS), neonatal adrenoleukodystrophy (NALD), infantile Refsum disease (IRD), and rhizomelic chondrodysplasia punctata (RCDP)")}
      </main>

      {Footer()}

      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
      <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossorigin></script>
      <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
    </div>
  );
}

export default Diseases;