import React from 'react'
import '../../styles/Booking.css'
import { Form, FormGroup } from 'reactstrap'

const Booking = () => {
  return (
    <Form>
      <FormGroup className="booking_form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First-Name" />
      </FormGroup>

      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="First-Name" />
      </FormGroup>

      <FormGroup className="booking_form d-inline-block me-4 mb-4">
        <input type="Email" placeholder="Email" />
      </FormGroup>

      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="phone number" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block me-4 mb-4">
        <input type="text" placeholder=" From Address" />
      </FormGroup>

      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="To Address" />
      </FormGroup>
    </Form>
  );
}

export default Booking