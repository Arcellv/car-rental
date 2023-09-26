import React from 'react'
import '../../styles/Booking.css'
import { Form, FormGroup } from 'reactstrap'

const Booking = () => {

  const HandlerSubmit = event =>{
    event.preventDefault()
  }

  return (
    <Form onSubmit={HandlerSubmit}>
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
        <select name="" id="">
          <option value="1 person">1 person</option>
          <option value="2 person">2 person</option>
          <option value="3 person">3 person</option>
          <option value="4 person">4 person</option>
          <option value="5 person">5 person</option>
        </select>
      </FormGroup>

      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <select name="" id="">
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggages">2 luggages</option>
          <option value="3 luggages">3 luggages</option>
          <option value="4 luggages">4 luggages</option>
          <option value="5 luggages">5 luggages</option>
        </select>
      </FormGroup>

      <FormGroup className="booking_form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" />
      </FormGroup>

      <FormGroup className="booking_form d-inline-block ms-1 mb-4">
        <input type="time" placeholder="Journey Time" className="time_picker" />
      </FormGroup>

      <FormGroup>
        <textarea rows={5} type="textarea" className="textarea" placeholder="write"></textarea>
      </FormGroup>
    </Form>
  );
}

export default Booking