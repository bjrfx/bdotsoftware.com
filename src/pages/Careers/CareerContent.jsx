import React from 'react'
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
const CareerContent = () => {
    return (
        <section className="team_section layout_padding">
            <div className="container-fluid" style={{ marginBottom: "5rem" }}>
                <div className="heading_container heading_center">
                    <h2 className="">
                        Careers <span> </span>
                    </h2>
                </div>

                <Container>
                    <Stack className="mt-4" align="start" gap={3}>
                        <div className="p-2"><h3>General Application</h3></div>
                        <div className="p-2"><p>If you feel that you might be able to add some magic to our team, hit us up!</p></div>
                        <div className="p-2">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Phone Number" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" placeholder="Enter Message" />
                                </Form.Group>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </Form>
                        </div>
                    </Stack>
                </Container>

            </div>
        </section>
    )
}

export default CareerContent