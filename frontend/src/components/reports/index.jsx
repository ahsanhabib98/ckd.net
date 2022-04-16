import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardItem from '../heroSection/CardItem'
import SectionHeader from '../sectionHeader'

import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';

import chart_1 from '../../assets/chart_1.png';
import chart_2 from '../../assets/chart_2.png';

const data = [
  {
    "id": 1,
    "label": "Label goes here",
    "title": "Title goes here",
    "link":"http://google.com",
    // img_url: "https://images.unsplash.com/photo-1587685987799-73e5a5ec0878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
    "img_url": img1
  },
  {
    "id": 2,
    "label": "Label goes here",
    "title": "Title goes here",
    "link":"http://google.com",
    "img_url": img2
  },
  {
    "id": 3,
    "label": "Label goes here",
    "title": "Title goes here",
    "link":"http://google.com",
    "img_url": img3
  },
  {
    "id": 4,
    "label": "Label goes here",
    "title": "Title goes here",
    "link":"http://google.com",
    "img_url": img4
  },
  {
    "id": 5,
    "label": "Label goes here",
    "title": "Title goes here",
    "link":"http://google.com",
    "img_url": img5
  },
  {
    "id": 6,
    "label": "Label goes here",
    "title": "Title goes here",
    "link":"http://google.com",
    "img_url": img6
  },
]


function Reports() {
  return (
    <div className='report-section p-100 px-5' id='reports'>
      <Container fluid>
        <SectionHeader
          title="Method and Analysis "
          subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />  
        {/* <img src={img1} alt="" /> */}

        <Row>
          <Col lg={7} md={6} sm={6} className='mt-4'>
            <div className="card-container">
              <CardItem 
                label=""
                title="Research methodology"
                link=""
                img_url={chart_1}
                b_radious="b-radious-16"
              />
              <br />
              <CardItem 
                label=""
                title="Model architecture"
                link=""
                img_url={chart_2}
                b_radious="b-radious-16"
              />
            </div>
          </Col>
          <Col lg={5} md={6} sm={6} className='mt-4'>
            <div className="card-container">
              <CardItem 
                label=""
                title="Validation loss"
                link=""
                img_url={img1}
                b_radious="b-radious-16"
              />
              <br />
              <CardItem 
                label=""
                title="Stage Prediction"
                link=""
                img_url={img2}
                b_radious="b-radious-16"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Reports