import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";

const StepOne = ({ handleChange }) => {
  return (
    <div className="">
      {/* <h2>Personal Info</h2> */}
      <Row>
        <Col md={6}>
          <Form.Group className="">
            <Form.Label className="mb-1"> Gender </Form.Label>
            <Form.Select
              as="select"
              onChange={handleChange("sex")}
              name="sex"
            >
              <option>Select</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-sm-20">
            <Form.Label className="mb-1"> age </Form.Label>
            <InputGroup>
              <Form.Control
                  // placeholder="First Name"
                  onChange={handleChange("age")}
                  name="age"
                />
                <InputGroup.Text>Years</InputGroup.Text>
              </InputGroup>
            </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1"> height </Form.Label>
            <InputGroup>
              <Form.Control
                // placeholder="First Name"
                onChange={handleChange("height")}
                name="height"
              />
              <InputGroup.Text>cm</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1"> weight </Form.Label>
            <InputGroup>
              <Form.Control
                // placeholder="First Name"
                onChange={handleChange("weight")}
                name="weight"
              />
              <InputGroup.Text>kg</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1"> waist </Form.Label>
            <InputGroup>
              <Form.Control
                // placeholder="First Name"
                onChange={handleChange("waist")}
                name="waist"
              />
              <InputGroup.Text>cm</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1"> vision left </Form.Label>
            <InputGroup>
              <Form.Control
                // placeholder="First Name"
                onChange={handleChange("vision_left")}
                name="vision_left"
              />
              <InputGroup.Text>diopters</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1"> vision right </Form.Label>
            <InputGroup>
              <Form.Control
                // placeholder="First Name"
                onChange={handleChange("vision_right")}
                name="vision_right"
              />
              <InputGroup.Text>diopters</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1"> Left hearing impairment </Form.Label>
                <Form.Select
                      as="select"
                      onChange={handleChange("listen_left")}
                      name="listen_left"
                    >
                      <option>Select</option>
                      <option value="1">Level 1</option>
                      <option value="2">Level 2</option>
                </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1"> Right hearing impairment  </Form.Label>
                <Form.Select
                      as="select"
                      onChange={handleChange("listen_right")}
                      name="listen_right"
                    >
                      <option>Select</option>
                      <option value="1">Level 1</option>
                      <option value="2">Level 2</option>
                </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1"> Systolic blood pressure </Form.Label>
            <InputGroup>
              <Form.Control
                // placeholder="First Name"
                onChange={handleChange("bp_high")}
                name="bp_high"
              />
              <InputGroup.Text>mmHG</InputGroup.Text>
            </InputGroup>
          </Form.Group>          
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1"> Diastolic blood pressure </Form.Label>
            <InputGroup>
              <Form.Control
                // placeholder="First Name"
                onChange={handleChange("bp_lwst")}
                name="bp_lwst"
              />
              <InputGroup.Text>mmHG</InputGroup.Text>
            </InputGroup>
          </Form.Group> 
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1"> Smoking status </Form.Label>
              <Form.Select
                    as="select"
                    onChange={handleChange("smk_stat_type_rsps_cd")}
                    name="smk_stat_type_rsps_cd"
                  >
                    <option>Select</option>
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
              </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1"> Drinking habit </Form.Label>
            <Form.Select
                  as="select"
                  onChange={handleChange("drink_or_not")}
                  name="drink_or_not"
                >
                  <option>Select</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
              </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1"> Teeth decay </Form.Label>
            <Form.Select
                  as="select"
                  onChange={handleChange("mouth_check")}
                  name="mouth_check"
                >
                  <option>Select</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1"> Body Mass Index </Form.Label>
            <InputGroup>
              <Form.Control
                // placeholder="First Name"
                onChange={handleChange("mbi")}
                name="mbi"
              />
              <InputGroup.Text>Kg/m2</InputGroup.Text>
            </InputGroup>
          </Form.Group> 
        </Col>
      </Row>


      {/* <Form.Group className="mt-4">
        <Form.Control
          placeholder="Last Name"
          onChange={handleChange("last_name")}
          name="last_name"
        />
      </Form.Group>

      <Form.Group className="mt-4">
        <Form.Control
          placeholder="First Name"
          as="select"
          onChange={handleChange("gender")}
          name="gender"
        >
          <option>Male</option>
          <option>Female</option>
        </Form.Control>
      </Form.Group> */}

    </div>
  );
};

export default StepOne;
