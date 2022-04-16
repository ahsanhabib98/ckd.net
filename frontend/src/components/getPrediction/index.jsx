import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SectionHeader from '../sectionHeader'

function GetPrediction() {
  return (
    <div className='get-prediction-section p-5 pb-0' id='get-prediction'>
      <Container fluid>
        <div className="outer-content bgColor b-radious-16 p-100">
          <SectionHeader
            title="Get Prediction"
            subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />

          <div className="inner-content">
            <Row className='mt-5'>
              <Col md={6} sm={6}>
                <Link to='/generate-report' className="card card-2 b-radious-16 primaryBlue border-0">
                  <h3 className='text-white mb-4'>CKD Stage Prediction</h3>
                  <p className='text-white'> View Details </p>
                </Link>
              </Col>
              <Col md={6} sm={6}>
                <Link to='/gfr-report' className="card card-2 b-radious-16 secondaryBlue border-0">
                  <h3 className='text-white mb-4'>eGFR Prediction</h3>
                  <p className='text-white'> View Details </p>
                </Link>
              </Col>
            </Row>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default GetPrediction