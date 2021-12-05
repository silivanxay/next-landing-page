import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Hero = () => {
    return (
        <section className="section position-relative">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="pr-lg-5">
                            <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">@TiaraNCake</p>
                            <h1 className="mb-4 font-weight-normal line-height-1_4">Homemade Bakery specialist <span className="text-primary font-weight-medium"><p>ເຄັກທີອະລ້າ &#11088;4.7 (14 reviews)</p></span></h1>
                            <p className="text-muted mb-4 pb-2">ຮັກໃນການເຮັດເຄັກ ໃສ່ໃຈໃນຄຸນນະພາບ ເພື່ອວັນພິເສດຂອງທ່ານ
                                ເຄັກແຊບໆ ວັດຖຸດິບຊັ້ນດີ</p>
                            <a href="#" className="btn btn-warning">
                                Find Out How <span className="ml-2 right-icon">&#8594;</span>
                            </a>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mt-5 mt-lg-0">
                            <img src="/images/Banner.jpg" alt="" className="img-fluid mx-auto d-block"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Hero;