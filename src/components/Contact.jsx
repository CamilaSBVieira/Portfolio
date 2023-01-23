import { Col, Container, Row } from "react-bootstrap";
import { Social } from "./Social";
import { Title } from "./Title";

export function Contact({ socialMedias }) {
    return (
        <Container>
            <Row>
                <Col xs='12' md='6' className='mx-auto'>
                    <Title text={'Contact Me'} stylying='text-center'></Title>
                    <p className='text-center display-6'>Or follow me on social media</p>
                </Col>
            </Row>
            <Row>
                <Col xs='12' md='6' className='mx-auto pt-5'>
                    <Social styling='fs-1 d-flex justify-content-center' socialMedias={socialMedias} />
                </Col>
            </Row>
        </Container>
    )
}