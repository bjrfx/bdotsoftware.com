import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';

const CareerContent = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section className="team_section layout_padding">
            <div className="container-fluid" style={{ marginBottom: "5rem" }}>
                <div className="heading_container heading_center">
                    <h2 className="">
                        Career <span>Opportunities</span>
                    </h2>
                </div>

                <Container>
                    <Stack className="mt-4" align="start" gap={3}>
                        <div className="p-2"><h3>General Application</h3></div>
                        <div className="p-2"><p>If you feel that you might be able to add some magic to our team, hit us up!</p></div>
                        <div className="p-2">
                            <Button variant="primary" onClick={handleShow}>
                                Apply
                            </Button>

                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>HIRE ME ANYWAY!</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Stack direction="horizontal" gap={3}>
                                            <div className="p-2">
                                                <Form.Control type="text" placeholder="First Name" />
                                            </div>
                                            <div className="p-2">
                                                <Form.Control type="text" placeholder="Last Name" />
                                            </div>
                                        </Stack>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>
                                        <div>
                                            <Form.Label htmlFor="basic-url">Your Website</Form.Label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Text id="basic-addon3">
                                                    http:
                                                </InputGroup.Text>
                                                <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                                            </InputGroup>
                                        </div>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Phone Number" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" placeholder="Enter Message" />
                                        </Form.Group>
                                        <Form.Label htmlFor="drop-down-place">Are you a citizen or current resident of Canada with an active work visa?</Form.Label>
                                        <Form.Select id='drop-down-place' aria-label="Default select example">
                                            <option>Select an option</option>
                                            <option value="1">I am a Canadian citizen</option>
                                            <option value="2">I am a Canadian resident with a work visa</option>
                                            <option value="3">Other - please explain in the "Message" field above</option>
                                        </Form.Select>
                                        <Form.Label htmlFor="drop-down-place2">Are you a citizen or current resident of Canada with an active work visa?</Form.Label>
                                        <Form.Select id='drop-down-place2' aria-label="Default select example" style={{marginBottom: "1rem"}}>
                                            <option>Do you currently live in Ontario?</option>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                            <option value="3">No, but I would like to relocate</option>
                                        </Form.Select>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    {/* <Button variant="primary">Understood</Button> */}
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Stack>
                </Container>

            </div>
        </section>
    )
}

export default CareerContent