import React, { useState } from 'react';
import { db, collection, addDoc } from '../../firebase/firebaseConfig'; // Adjust the path as needed
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';

const CareerContent = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    phoneNumber: '',
    message: '',
    citizenship: '',
    livingInOntario: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Add form data to Firestore
      const docRef = await addDoc(collection(db, "careerformdata"), formData);
      setSuccess('Application submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        website: '',
        phoneNumber: '',
        message: '',
        citizenship: '',
        livingInOntario: ''
      });
    } catch (error) {
      console.error('Error adding document:', error);
      setError('Error submitting application. Please try again.');
    }
  };

  return (
    <section className="service_section layout_padding">
      <div className="service_container" style={{ marginBottom: '5rem' }}>
        <div className="container">
          <div className='heading_container heading_center'>
            <h2>
              Career <span>Opportunities</span>
            </h2>
          </div>
        </div>

        <Container>
          <Stack className="mt-4" align="start" gap={3}>
            <div className="p-2">
              <h3 style={{ fontWeight: '200' }}>General Application</h3>
            </div>
            <div className="p-2">
              <p>If you feel that you might be able to add some magic to our team, hit us up!</p>
            </div>
            <div className="p-2">
              <Button variant="outline-dark" onClick={handleShow}>
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
                  <Form onSubmit={onSubmit}>
                    <Stack direction="horizontal" gap={3}>
                      <div className="p-2">
                        <Form.Control
                          type="text"
                          placeholder="First Name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="p-2">
                        <Form.Control
                          type="text"
                          placeholder="Last Name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </Stack>
                    <Form.Group className="mb-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="basic-url">Your Website</Form.Label>
                      <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon3">http:</InputGroup.Text>
                        <Form.Control
                          id="basic-url"
                          name="website"
                          aria-describedby="basic-addon3"
                          value={formData.website}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Phone Number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Enter Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="citizenship-select">Are you a citizen or current resident of Canada with an active work visa?</Form.Label>
                      <Form.Select
                        id="citizenship-select"
                        name="citizenship"
                        value={formData.citizenship}
                        onChange={handleChange}
                      >
                        <option value="">Select an option</option>
                        <option value="1">I am a Canadian citizen</option>
                        <option value="2">I am a Canadian resident with a work visa</option>
                        <option value="3">Other - please explain in the "Message" field above</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="living-in-ontario-select">Do you currently live in Ontario?</Form.Label>
                      <Form.Select
                        id="living-in-ontario-select"
                        name="livingInOntario"
                        value={formData.livingInOntario}
                        onChange={handleChange}
                      >
                        <option value="">Do you currently live in Ontario?</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                        <option value="3">No, but I would like to relocate</option>
                      </Form.Select>
                    </Form.Group>
                    {error && <div className="text-danger mb-3">{error}</div>}
                    {success && <div className="text-success mb-3">{success}</div>}
                    <Button type="submit" className="btn btn-primary">
                      Submit
                    </Button>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Stack>
        </Container>
      </div>
    </section>
  );
};

export default CareerContent;
