import { Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import logo from '../assets/logoII.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export function AboutMe({ technologies }) {
    return (
        <Row className="p-5" >
            <Col xs='12' lg='4'>
                <img src={logo} style={{ width: 250 }} className='d-block mx-auto' />
            </Col>
            <Col xs='12' lg='8' className="fs-3 px-md-2 px-0 py-3 d-flex flex-column">
                <Col>
                    <p>Meu nome é Camila, sou desenvolvedora Front-End React, com conhecimento também em Back-End. Sou apaixonada
                        por construir aplicações.
                    </p>
                </Col>
                <Col className='p-0 m-0'>
                    <ListGroup horizontal className=" fs-4 d-flex align-items-center justify-content-center flex-wrap">
                        {technologies.map((t, index) => {
                            if (t.icon) {
                                return <ListGroupItem key={index} className="border-0">
                                    <FontAwesomeIcon icon={t.icon} title={t.name} />
                                </ListGroupItem>
                            } else {
                                return <p className="d-block mb-0">{t.name}</p>
                            }
                        })}
                    </ListGroup>
                </Col>
            </Col>
        </Row>
    )
}