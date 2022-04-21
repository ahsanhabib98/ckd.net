import React, { useState } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";

const StepOne = ({ handleChange, nextStep, values }) => {
  //creating error state for validation
  const [validated, setValidated] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // console.log("Step One: ", values);

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      nextStep();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={submitFormData}>
      <Row>
        <Col md={6}>
          <Form.Group className="">
            <Form.Label className="mb-1"> gender </Form.Label>
            <Form.Select
              as="select"
              onChange={handleChange("sex")}
              name="sex"
              required
            >
              <option value="">Select</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              This is a required field
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-sm-20">
            <Form.Label className="mb-1"> age </Form.Label>
            <InputGroup>
              <Form.Control
                required
                onChange={handleChange("age")}
                name="age"
                aria-describedby="inputGroupPrepend"
              />
              <InputGroup.Text>Years</InputGroup.Text>

              <Form.Control.Feedback type="invalid">
                This is a required field
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1"> height </Form.Label>
            <InputGroup>
              <Form.Control
                required
                onChange={handleChange("height")}
                name="height"
              />
              <InputGroup.Text>cm</InputGroup.Text>

              <Form.Control.Feedback type="invalid">
                This is a required field
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1"> weight </Form.Label>
            <InputGroup>
              <Form.Control
                required
                onChange={handleChange("weight")}
                name="weight"
              />
              <InputGroup.Text>kg</InputGroup.Text>

              <Form.Control.Feedback type="invalid">
                This is a required field
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1"> waist </Form.Label>
            <InputGroup>
              <Form.Control
                required
                onChange={handleChange("waist")}
                name="waist"
              />
              <InputGroup.Text>cm</InputGroup.Text>

              <Form.Control.Feedback type="invalid">
                This is a required field
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1"> vision left </Form.Label>
            <InputGroup>
              <Form.Control
                required
                onChange={handleChange("vision_left")}
                name="vision_left"
              />
              <InputGroup.Text>diopters</InputGroup.Text>

              <Form.Control.Feedback type="invalid">
                This is a required field
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1"> vision right </Form.Label>
            <InputGroup>
              <Form.Control
                required
                onChange={handleChange("vision_right")}
                name="vision_right"
              />
              <InputGroup.Text>diopters</InputGroup.Text>

              <Form.Control.Feedback type="invalid">
                This is a required field
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1">Left hearing impairment</Form.Label>
            <Form.Select
              as="select"
              onChange={handleChange("listen_left")}
              name="listen_left"
              required
            >
              <option value="">Select</option>
              <option value="1">Level 1</option>
              <option value="2">Level 2</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid">
              This is a required field
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1">Right hearing impairment</Form.Label>
            <Form.Select
              as="select"
              onChange={handleChange("listen_right")}
              name="listen_right"
              required
            >
              <option value="">Select</option>
              <option value="1">Level 1</option>
              <option value="2">Level 2</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid">
              This is a required field
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1">Systolic blood pressure</Form.Label>
            <InputGroup>
              <Form.Control
                required
                onChange={handleChange("bp_high")}
                name="bp_high"
              />
              <InputGroup.Text>mmHG</InputGroup.Text>

              <Form.Control.Feedback type="invalid">
                This is a required field
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1">Diastolic blood pressure</Form.Label>
            <InputGroup>
              <Form.Control
                required
                onChange={handleChange("bp_lwst")}
                name="bp_lwst"
              />
              <InputGroup.Text>mmHG</InputGroup.Text>

              <Form.Control.Feedback type="invalid">
                This is a required field
              </Form.Control.Feedback>
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
              required
            >
              <option value="">Select</option>
              <option value="1">Level 1</option>
              <option value="2">Level 2</option>
              <option value="3">Level 3</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid">
              This is a required field
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1"> Drinking habit </Form.Label>
            <Form.Select
              as="select"
              onChange={handleChange("drink_or_not")}
              name="drink_or_not"
              required
            >
              <option value="">Select</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid">
              This is a required field
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1"> Teeth decay </Form.Label>
            <Form.Select
              as="select"
              onChange={handleChange("mouth_check")}
              name="mouth_check"
              required
            >
              <option value="">Select</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid">
              This is a required field
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mt-4">
            <Form.Label className="mb-1"> Body Mass Index </Form.Label>
            <InputGroup>
              <Form.Control
                required
                onChange={handleChange("mbi")}
                name="mbi"
              />
              <InputGroup.Text>Kg/m2</InputGroup.Text>

              <Form.Control.Feedback type="invalid">
                This is a required field
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
      </Row>

      <button className="btn primaryRed text-white w-100 mt-4">Next</button>
    </Form>
  );
};

export default StepOne;
