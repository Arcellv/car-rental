import React from 'react'
import '../../styles/CarForm.css'
import "../../styles/CarForm.css"

import { Form, FormGroup  } from 'reactstrap'


const CarForm = () => {
  return (
    <Form className="form">
      <div className="d-flex aligns-items-center justify-content-between flex-wrap">
        <FormGroup className="form_group">
          <input type="text" placeholder=" From address" required />
        </FormGroup>

        <FormGroup className="form_group">
          <input type="text" placeholder=" to address" required />
        </FormGroup>

        <FormGroup className="form_group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="form_group">
          <input  className="Journey_time" type="time" placeholder="Journey time" required />
          <span>
            <i class="ri-time-line"></i>
          </span>
        </FormGroup>

        <FormGroup className="select_group">
          <select>
            <option value="ac"> AC Car</option>
            <option value="non-ac"> None-AC Car</option>
          </select>
        </FormGroup>

        <FormGroup className="form_group">
          <button className="btn car_btn">Find car</button>
        </FormGroup>
      </div>
    </Form>
  );
}

export default CarForm