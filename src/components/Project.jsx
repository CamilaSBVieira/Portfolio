import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Carousel, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Title } from "./Title";
import AluraGeek from '../assets/images/AluraGeek.jpg';
import AluraGeekMobile from '../assets/images/AluraGeekMobile.jpg';

export function Project() {

    // let { name } = useParams();
    const location = useLocation();
    const { project, technologies } = location.state;

    return (
        <Container fluid className="p-0 mb-5">
            <Row>
                <Title text={project.formatedName}></Title>
            </Row>
            <Row>

                <Carousel variant="dark" className="d-none d-md-block" style={{minHeight: 500}}>
                    <Carousel.Item>
                        <img
                            className="d-block mx-auto img-fluid"
                            style={{maxHeight: 500, width: 'auto' }}
                            src={AluraGeek}
                            alt="Desktop View"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block mx-auto img-fluid"
                            style={{maxHeight: 500, width: 'auto'}}
                            src={AluraGeekMobile}
                            alt="Mobile View"
                        />
                    </Carousel.Item>
                </Carousel>
                <img src={AluraGeekMobile} title="Mobile View" style={{ maxHeight: 500, width: 'auto' }} className='d-block d-md-none mx-auto' />
            </Row>
            <Row>
                <Col xs='12' lg='6' className='mx-auto'>
                    <Card className='border-0 p-4 mx-5'>
                        <Card.Body className="px-0 mx-0">
                            <Card.Text className='fs-5'>
                                {project.description}
                                <p className="fs-4 pt-3">Main Technologies</p>
                                <ListGroup horizontal className="fs-4 my-2">
                                    {project.topics.map(topic => {
                                        return technologies.map(t => {
                                            if (t.name === topic) {
                                                return (<ListGroupItem className='border-0'>
                                                    <FontAwesomeIcon icon={t.icon} />
                                                </ListGroupItem>)
                                            }
                                        })
                                    })}
                                </ListGroup>
                            </Card.Text>
                            <Row>
                                <Col xs='12' lg='6'>
                                    <a href={project.link} target='blank' className='w-100 mb-2 btn btn-success btn-lg fw-semibold'>View Site</a>
                                </Col>
                                <Col xs='12' lg='6'>
                                    <a href={project.html_url} target='blank' className='w-100 mb-2 btn btn-dark btn-lg fw-semibold'>Access Repo</a>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}