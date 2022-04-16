import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";

const StepTwo = ({ handleChange }) => {
  return (
    <div className="">
      {/* <h2>Contact Info</h2> */}

      <fieldset className="mt-2">
        <legend>Renal function test</legend>

         <Row>
          <Col md={6}>
            <Form.Group className="">
              <Form.Label className="mb-1"> Urine protein </Form.Label>
              <InputGroup>
                <Form.Control
                  // placeholder="First Name"
                  onChange={handleChange("olig_prote_cd")}
                  name="olig_prote_cd"
                />
                <InputGroup.Text>mg/dl</InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>          
          <Col md={6}>
            <Form.Group className="mt-sm-20">
              <Form.Label className="mb-1"> creatinine </Form.Label>
              <InputGroup>
                <Form.Control
                  // placeholder="First Name"
                  onChange={handleChange("creatinine")}
                  name="creatinine"
                />
                <InputGroup.Text>mg/dl</InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
      </fieldset>
      <fieldset>
        <legend>Liver function test</legend>

         <Row>
          <Col md={6}>            
            <Form.Group className="mt-3">
              <Form.Label className="mb-1"> SGOT(AST) </Form.Label>
              <InputGroup>
                <Form.Control
                  // placeholder="First Name"
                  onChange={handleChange("sgot_ast")}
                  name="sgot_ast"
                />
                <InputGroup.Text>IU/L</InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mt-3">
              <Form.Label className="mb-1"> SGPT(ALT) </Form.Label>
              <InputGroup>
                <Form.Control
                  // placeholder="First Name"
                  onChange={handleChange("sgpt_alt")}
                  name="sgpt_alt"
                />
                <InputGroup.Text>IU/L</InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group className="mt-3">
              <Form.Label className="mb-1"> GAMMA(GTP) </Form.Label>
              <InputGroup>
                <Form.Control
                  // placeholder="First Name"
                  onChange={handleChange("gamma_gtp")}
                  name="gamma_gtp"
                />
                <InputGroup.Text>IU/dL</InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
      </fieldset>
      <fieldset>
        <legend>Lipid profile</legend>

         <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="mb-1"> Total cholesterol </Form.Label>
              <InputGroup>
                <Form.Control
                  // placeholder="First Name"
                  onChange={handleChange("tot_chole")}
                  name="tot_chole"
                />
                <InputGroup.Text>mg/dl</InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mt-sm-20">
              <Form.Label className="mb-1"> Triglycerides </Form.Label>
              <InputGroup>
                <Form.Control
                  // placeholder="First Name"
                  onChange={handleChange("triglyceride")}
                  name="triglyceride"
                />
                <InputGroup.Text>mg/dl</InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mt-3">
              <Form.Label className="mb-1"> HDL cholesterol </Form.Label>
              <InputGroup>
                  <Form.Control
                    // placeholder="First Name"
                    onChange={handleChange("hdl_chole")}
                    name="hdl_chole"
                  />
                <InputGroup.Text>mg/dl</InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mt-3">
              <Form.Label className="mb-1"> LDL cholesterol </Form.Label>
              <InputGroup>
                <Form.Control
                  // placeholder="First Name"
                  onChange={handleChange("ldl_chole")}
                  name="ldl_chole"
                />
                <InputGroup.Text>mg/dl</InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
      </fieldset>
      <fieldset>
        <legend>Haematological test</legend>
         
        <Form.Group className="">
          <Form.Label className="mb-1"> Hemoglobin </Form.Label>
           <InputGroup>
            <Form.Control
              // placeholder="First Name"
              onChange={handleChange("hmg")}
              name="hmg"
            />
            <InputGroup.Text>mg/dl</InputGroup.Text>
          </InputGroup>
        </Form.Group>
      </fieldset>
      <fieldset>
        <legend>Others</legend>

        <Form.Group className="">
          <Form.Label className="mb-1"> Blood sugar </Form.Label>
           <InputGroup>
              <Form.Control
                // placeholder="First Name"
                onChange={handleChange("blds")}
                name="blds"
              />
                <InputGroup.Text>mg/dl</InputGroup.Text>
              </InputGroup>
        </Form.Group>
      </fieldset>
    </div>
  );
};

export default StepTwo;
