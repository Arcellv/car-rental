import React from 'react'
import { Col } from 'reactstrap'
import '../../styles/ServiceSection.css'
import Data from '../../assets/data/serviceData'
import serviceData from '../../assets/data/serviceData'

const ServiceSection = () => {
  return <>
  {
    serviceData.map(item =>(
        <serviceData item = {item}  key = {item.id}/>
    )) 
  }
  </>
}

const Item = ({ item }) => (
    <Col lg="4" md="6">
        <div className="service_item">
            <span className="mb-3">
                <i class={item.icon} />
            </span>

            <h6>{item.title}</h6>
            <p className="description_section">{item.desc}</p>
        </div>
    </Col>
)

export default ServiceSection