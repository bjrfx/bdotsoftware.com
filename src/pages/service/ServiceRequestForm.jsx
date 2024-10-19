import React, { useState } from 'react';
import { Form, Button, Col, Row, InputGroup, Alert, Spinner } from 'react-bootstrap';
import { db, collection, addDoc } from '../../firebase/firebaseConfig'; // import your Firebase config
import { BsCheckCircle } from 'react-icons/bs'; // Checkmark icon

const ServiceRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
    serviceType: '',
    budget: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.phone) formErrors.phone = 'Phone number is required';
    if (!formData.serviceType) formErrors.serviceType = 'Service type is required';
    if (!formData.budget) formErrors.budget = 'Estimated budget is required';
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        // Add data to Firebase Firestore
        await addDoc(collection(db, 'serviceRequests'), formData);
        setSubmitted(true);
        setSuccessMessage(`Thank you ${formData.name}, we will get back to you shortly!`);
        setErrors({});
        setLoading(false);
      } catch (error) {
        console.error('Error submitting form: ', error);
        setLoading(false);
      }
    } else {
      setErrors(formErrors);
      setLoading(false);
    }
  };

  return (
    <div>
      {submitted ? (
        <div className="text-center">
          <BsCheckCircle size={50} color="green" />
          <h4>{successMessage}</h4>
        </div>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formServiceType">
                <Form.Label>Service Type</Form.Label>
                <Form.Control
                  as="select"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  isInvalid={!!errors.serviceType}
                >
                  <option value="">Select a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Motion Graphics">Motion Graphics</option>
                  <option value="Platform Engineering">Platform Engineering</option>
                  <option value="Cloud Migration">Cloud Migration</option>
                  <option value="DevOps">DevOps</option>
                  <option value="Other">Other</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.serviceType}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="formBudget">
                <Form.Label>Estimated Budget</Form.Label>
                <InputGroup>
                  <InputGroup.Text>$</InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="budget"
                    placeholder="Enter your estimated budget"
                    value={formData.budget}
                    onChange={handleChange}
                    isInvalid={!!errors.budget}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.budget}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formComments">
                <Form.Label>Additional Comments</Form.Label>
                <Form.Control
                  as="textarea"
                  name="comments"
                  placeholder="Enter any additional details"
                  value={formData.comments}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit" className="mt-3" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : 'Submit'}
          </Button>
        </Form>
      )}
    </div>
  );
};

export default ServiceRequestForm;