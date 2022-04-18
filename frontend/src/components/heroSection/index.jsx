import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import CardList from './CardList'

import kedneyImg from '../../assets/kedney.png'

function HeroSection() {
  
  return (
    <div className="hero-section p-5 pb-0">
      {/* <div className="left-box d-flex align-items-center">
        <div className="text-box">
          <h1 className='text-white'> Automated Screening Tool for Multiclass Prediction of <span>Chronic Kidney Disease</span> </h1>
          <a href="#about" className="btn">Find out more</a>
        </div>

      </div>

      <div className="right-box">
        <img src="https://bit.ly/3qZuTYS" alt="" />
      </div> */}

      {/* <div className="card-list">
        <CardList data={data} />
      </div> */}

      <Container fluid>
        <div className="inner-content b-radious-16">

          <Row>
            <Col lg={7} md={12} className="d-flex align-items-center">
            <div className="text-content">
              <h1 className='text-white'> CKD.Net </h1>
              <h1 className='text-white h2'> Automated Screening Tool for Multiclass Prediction of Chronic Kidney Disease (CKD)  </h1>
              {/* <a href="#about" className="btn">Find out more</a> */}
            </div>
            </Col>
            <Col lg={5} md={12}>
              <div className="img-container">
                <img src={kedneyImg} alt=""/>
              </div>
            </Col>
          </Row>
          
        </div>
      </Container>
    </div>
  )
}

export default HeroSection


// const data = [
//   {
//     id: "01",
//     label: "Label goes here",
//     title: "Title goes here",
//     link:"http://google.com",
//     img_url: "https://bit.ly/364r90Z"
//     // img_url: "http://placehold.co/840x600"
//   },
//   {
//     id: "02",
//     label: "Label goes here",
//     title: "Title goes here",
//     link: "http://google.com",
//     img_url: "https://bit.ly/3JrpQaz"
//   },
//   {
//     id: "03",
//     label: "Label goes here",
//     title: "Title goes here",
//     link: "http://google.com",
//     img_url: "https://bit.ly/3tm8pmg"
//   },
//   {
//     id: "04",
//     label: "Label goes here",
//     title: "Title goes here",
//     link: "http://google.com",
//     img_url: "https://bit.ly/3qlXc3d"
//   },
//   {
//     id: "05",
//     label: "Label goes here",
//     title: "Title goes here",
//     link: "http://google.com",
//     img_url: "https://bit.ly/3qeVgti"
//   },
// ]
