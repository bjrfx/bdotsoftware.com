import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Ourservices from './ourservices/Ourservices';
import AllServices from './AllServices';
import ServiceRequestForm from '../../pages/service/ServiceRequestForm';

const AddonServices = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <section className="service_section layout_padding">
      <div className="service_container">
        <div className="container">
          <Ourservices />
          <div className="row">
            <AllServices />
          </div>

          {/* Centered button to open modal */}
          <div className="d-flex justify-content-center mt-4">
            <Button variant="primary" onClick={handleShowModal}>
              Request a Service
            </Button>
          </div>

          {/* Modal for the Service Request Form */}
          <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>Request a Service or Quote</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ServiceRequestForm />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default AddonServices;