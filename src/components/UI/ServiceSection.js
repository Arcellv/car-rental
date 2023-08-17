import React from 'react'
import { Col } from 'reactstrap'
import '../../styles/ServiceSection.css'
import serviceData from '../../assets/data/serviceData'

const ServiceSection = () => {
  return <>
  {
    serviceData.map (item =>(
        <ServiceItem item = {item}  key = {item.id}/>
    )) 
  }
  </>
}

const ServiceItem = ({item}) => (

    <Col lg="4" md="6" className="mb-3">
        <div className="service_item">
            <span className="mb-3 d-inline-block">
                <i class={item.icon} />
            </span>

            <h6>{item.title}</h6>
            <p className="description_section">{item.desc}</p>
        </div>
    </Col>
)

export default ServiceSection