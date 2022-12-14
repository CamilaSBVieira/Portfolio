import { Button, Col, Form, Row } from "react-bootstrap";
import { Title } from "./Title";


export function EmailMe() {
    return (
        <Row className='my-5 pb-5'>
            <Col xs='12' lg='6' className='mx-auto'>
                <Title text={'Send me an email'}></Title>
                <Form action="mailto:camila.frontend@gmail.com" method="POST">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            Your email will never be shared with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as='textarea' rows={4} placeholder="Type your message here" />
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}