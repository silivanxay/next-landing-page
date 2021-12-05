import React from 'react';
import { Container, Row, Col } from "reactstrap";
const About = () => {
    return (
        <section className="section bg-light" id="about">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} md={8}>
                        <div className="title text-center mb-5">
                            <h3 className="font-weight-normal text-dark">About <span className="text-warning">Us</span></h3>
                            <p className="text-muted">
                                ຮັກໃນການເຮັດເຄັກ ໃສ່ໃຈໃນຄຸນນະພາບ ເພື່ອວັນພິເສດຂອງທ່ານ
                                ເຄັກແຊບ ວັດຖຸດິບຊັ້ນດີ</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <h2 className="font-weight-light line-height-1_6 text-dark mb-4">Tiara N Cake ເຄັກທີອະລ້າ</h2>
                    </Col>
                    <Col md={{ size:7, offset :1 }}>
                        <Row>
                            <Col md={6}>
                                <h6 className="text-dark font-weight-light f-20 mb-3">Our Mission</h6>
                                <p className="text-muted font-weight-light">Homemade Bakery specialist</p>
                            </Col>
                            <Col md={6}>
                                <h6 className="text-dark font-weight-light f-20 mb-3">Our Vision</h6>
                                <p className="text-muted font-weight-light">Yummy Cake is Tiara Cake</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default About;