import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container , Nav, Row, Col, Form, Button} from 'react-bootstrap'
import './Boot.jsx'
import './index.css'


export default class Bootstrap extends React.Component{
    render () {
        return (
            <><><><><><><><Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">RISTMI DAFFA' KHOIRI</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#PROFIL">PROFIL</Nav.Link>
                <Nav.Link href="#bio">MY BIO</Nav.Link>
                <Nav.Link href="#contact">CONTACT</Nav.Link>
              </Nav>
            </Container>
          </Navbar><br /><Container fluid="md" className='introduce' varian='dark ' bg="dark" id='PROFIL'>
              <Row>
                <Col>
                  <div class="p-5 mb-5 bg-#ffd700 rounded-3 jumbotron ">
                    <div class="container-lfuid fy-5 text-center">
                      <p class="fs-5.fst-italic mt-5">Student Eduwork</p>
                      <h1 class="display-4">Ristmi Daffa Khoiri</h1>
                      <button class="btn btn-warning border border-dark btn-sm mt-5 shadow-sm text-white px-3 py-2">
                        Likedin Profile
                      </button>

                    </div>
                  </div>
                </Col>
              </Row>
            </Container></>
            
            <Container fluid>
              <Row>
                <Col>
                  <div class="container text-center" id="bio">
                    <h3 class="fs-2 fs-bold">My Bio</h3>
                    <p class="fs-6 fst-italic fw-light">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container></>
            
            <Container fluid>
              <Row>
                <Col className="text-center">
                  <div class="col">
                    <h6 class="fs-5 ">
                      Alamat
                    </h6>
                    <p class="fw-light">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </Col>
                <Col className='text-center'>
                  <div class="col">
                    <h6 class="fs-5">
                      Volunter In NSS
                    </h6>
                    <p class="fw-light">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </Col>
                <Col className='text-center'>
                  <div class="col">
                    <h6 class="fs-5">
                      riwayat prndidikan
                    </h6>
                    <p class="fw-light">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                      since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container></>

            <Container fluid>
              <Row>
                <Col className='text-center'>
                  <div class="container mt-5" id="contact">
                    <h3 class="fs-2 fs-bold text center mb-3">My Contact</h3>
                  </div>
                </Col>
              </Row>
            </Container></>

            <Form className='card mx-auto width-500px formm' id>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>EMAIL</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>MESSAGE</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form></>

            <div className="d-grid gap-2 button" >
              <Button variant="warning" size="lg">
                SEND
              </Button>
            </div></>
            
            <Container fluid>
              <Row>
                <Col>
                <div class="container-fluid bg-dark mb-0 mt-5">
  <footer>
    <p class="text-white text-center footer">&copy; 2022 eduwork, Ristmi Khoiri</p>
  </footer>
</div>
                </Col>
              </Row>
            </Container></>
            



        )
    }
}
