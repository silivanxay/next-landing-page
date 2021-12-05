import React from 'react';
import { Container, Row, Col } from "reactstrap";
const FeatureBox = (props) => {
    return (
        <>
            {
                props.features.map((feature, key) =>
                    (feature.id % 2 !== 0) ?
                        <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
                            <Col md={5} >
                                <div>
                                    <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
                                </div>
                            </Col>
                            <Col md={{size:6, offset:1}}>
                                <div className="mt-5 mt-sm-0 mb-4">
                                    <div className="my-4">
                                        <i className={feature.icon}></i>
                                    </div>
                                    <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                                    <p className="text-muted mb-3 f-15">{feature.desc}</p>
                                    <a href={feature.link} className="f-16 text-warning">Read More <span className="right-icon ml-2">&#8594;</span></a>
                                </div>
                            </Col>
                        </Row>
                        :
                        <Row key={key} className="align-items-center mt-5">
                            <Col md={6}>
                                <div className="mb-4">
                                    <div className="my-4">
                                        <i className="mdi mdi-account-group"></i>
                                    </div>
                                    <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                                    <p className="text-muted mb-3 f-15">{feature.desc}</p>
                                    <a href={feature.link} className="f-16 text-warning">Read More <span className="right-icon ml-2">&#8594;</span></a>
                                </div>
                            </Col>
                            <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
                                <div>
                                    <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
                                </div>
                            </Col>
                        </Row>
                )
            }
        </>
    );
}
const Feature = () => {
    const features = [
        {id : 1, img : "./images/Cupcake.png", title : "Cup Cake", desc :
                "ລະດູການສະຕໍເບີລີ້ 🍓🍓🍓 ໃກ້ຈະມາຮອດແລ້ວ~~ \n" +
                "🧁🧁ຄັບເຄັກນົມຮ໋ອກໄກໂດສູດດັ້ງເດີມ ກັບມາແລ້ວ\n" +
                "ທີ່ເພີ່ມເຕີມຄື ແປ້ງນຸ້ມໆຍິ່ງຂຶ້ນ 😋😋\n" +
                "ສັ່ງໄດ້ແລ້ວມື້ນີ້ ໄດ້ຮັບມື້ອື່ນເດີ້ຈ້າາາ .", link : "/#feature"},
        {id : 2, img : "./images/Milk.png", title : "Fresh Milk", desc :
                "ພຸດດິ້ງຮອກໄກໂດ “ນົມສົດ” ມີໃຫ້ອໍເດີ້ແລ້ວ ບໍ່ຕ້ອງກິນຢູ່ຍີ່ປຸ່ນ ບໍ່ຕ້ອງກິນຢູ່ໄທ ກິນຢູ່ລາວບ່ອນນີ້ໄດ້ ທີ່ຮ້ານ ເຄັກທີອະລ້າ.\n" +
                "\n" +
                "ມີຂາຍຢູ່ທີ່ ຮ້ານເຝີແຊບ ສາຂາວິວມໍພ້ອມເດີ້..", link : "/#feature"},
        {id : 3, img : "./images/Cake.png", title : "Cake", desc :
                "ອົບໃຫມ່ໆ ພ້ອມທ໋ອບປິ້ງ 🍓ສະຕໍເບີຣີ້ສົດ ເຄັກນົມເປື່ອຍ “ຮອກໄກໂດ”" +
                " 🍰 ເຄັກນຸ້ມໆ ເປື່ອຍລະລາຍໃນປາກ ນ້ຳໜັກເຄັກ 350ກລາມ " +
                "ນ້ຳໜັກສະຕໍເບີລີ້ທອບ 80ກກ ພິເສດຄ່າສົ່ງ 5,000₭ ດ່ວນໆສັ່ງເຂົ້າມາໄດ້ " +
                "ຂອບໃຈຫລາຍໆ ອໍເດີ້ແໜ້ນໆເລີຍ 🥰.", link : "/#feature"},
    ];
    return (
        <section className="section" id="feature">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} md={8}>
                        <div className="title text-center mb-5">
                            <h3 className="font-weight-normal text-dark"><span className="text-warning">Features</span></h3>
                            <p className="text-muted">Yummy Cake is Tiara Cake.</p>
                        </div>
                    </Col>
                </Row>
                <FeatureBox features={features} />
            </Container>
        </section>
    );
}
export default Feature;