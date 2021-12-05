import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Service = () => {
    const services = [
        { title : "Pre-order", desc : "ຕິດຕໍ່ ເບີໂທ/w.a ☎️ 020 91 456 239 ຫຼື  Facebook inbox @TiaraNCake" },
        { title : "App", desc : "ທາງ ແອັບ GOTEDDY, ແລະ Food Panda" },
        { title : "ໂຕແທນຈຳໜ່າຍ", desc : "ຮ້ານ ເຝິບ້ານພິມ ( ວັດໄຕ ), ແລະ  ຮ້ານເຝີແຊບ ສາຂາວິວມໍ" },
    ]

    return (
        <section className="section" id="service">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} md={8}>
                        <div className="title text-center mb-5">
                            <h3 className="font-weight-normal text-dark"><span className="text-warning">Services</span></h3>
                            <p className="text-muted">ຮັກໃນການເຮັດເຄັກ ໃສ່ໃຈໃນຄຸນນະພາບ ເພື່ອວັນພິເສດຂອງທ່ານ
                                ເຄັກແຊບໆ ວັດຖຸດິບຊັ້ນດີ</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        services.map((service, key) =>
                            <Col key={key} lg={4} md={6}>
                                <div>
                                    <div className="mb-5">
                                        <i className={service.icon}></i>
                                    </div>
                                    <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                                    <p className="text-muted mb-4">{service.desc}</p>
                                </div>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </section>
    );
}
export default Service;