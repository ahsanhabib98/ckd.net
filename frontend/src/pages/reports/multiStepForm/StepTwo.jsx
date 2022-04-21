import React, { useState } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";

const StepTwo = ({
  handleChange,
  prevStep,
  values,
  handlePredictCKDHybrid,
}) => {
  //creating error state for validation
  const [validated, setValidated] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // console.log("Step Two: ", values);

    // Pass submitted data to parent component
    handlePredictCKDHybrid(values);

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    if (validated) {
      setDisabled(true);
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={submitFormData}>
      <fieldset className="mt-2">
        <legend>Renal function test</legend>
        <Row>
          <Col md={6}>
            <Form.Group className="">
              <Form.Label className="mb-1"> Urine protein </Form.Label>
              <InputGroup>
                <Form.Control
                  required
                  onChange={handleChange("olig_prote_cd")}
                  name="olig_prote_cd"
                />
                <InputGroup.Text>mg/dl</InputGroup.Text>

                <Form.Control.Feedback type="invalid">
                  This is a required field
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mt-sm-20">
              <Form.Label className="mb-1"> creatinine </Form.Label>
              <InputGroup>
                <Form.Control
                  required
                  onChange={handleChange("creatinine")}
                  name="creatinine"
                />
                <InputGroup.Text>mg/dl</InputGroup.Text>

                <Form.Control.Feedback type="invalid">
                  This is a required field
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group className="mt-3">
              <Form.Label className="mb-1">
                {" "}
                Estimated glomerular filtration rate{" "}
              </Form.Label>
              <InputGroup>
                <Form.Control
                  required
                  onChange={handleChange("gfr")}
                  name="gfr"
                />
                <InputGroup.Text>ml/min/1.73 m-2</InputGroup.Text>

                <Form.Control.Feedback type="invalid">
                  This is a required field
                </Form.Control.Feedback>
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
                  required
                  onChange={handleChange("sgot_ast")}
                  name="sgot_ast"
                />
                <InputGroup.Text>IU/L</InputGroup.Text>

                <Form.Control.Feedback type="invalid">
                  This is a required field
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mt-3">
              <Form.Label className="mb-1"> SGPT(ALT) </Form.Label>
              <InputGroup>
                <Form.Control
                  required
                  onChange={handleChange("sgpt_alt")}
                  name="sgpt_alt"
                />
                <InputGroup.Text>IU/L</InputGroup.Text>

                <Form.Control.Feedback type="invalid">
                  This is a required field
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group className="mt-3">
              <Form.Label className="mb-1"> GAMMA(GTP) </Form.Label>
              <InputGroup>
                <Form.Control
                  required
                  onChange={handleChange("gamma_gtp")}
                  name="gamma_gtp"
                />
                <InputGroup.Text>IU/dL</InputGroup.Text>

                <Form.Control.Feedback type="invalid">
                  This is a required field
                </Form.Control.Feedback>
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
                  required
                  onChange={handleChange("tot_chole")}
                  name="tot_chole"
                />
                <InputGroup.Text>mg/dl</InputGroup.Text>

                <Form.Control.Feedback type="invalid">
                  This is a required field
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mt-sm-20">
              <Form.Label className="mb-1"> Triglycerides </Form.Label>
              <InputGroup>
                <Form.Control
                  required
                  onChange={handleChange("triglyceride")}
                  name="triglyceride"
                />
                <InputGroup.Text>mg/dl</InputGroup.Text>

                <Form.Control.Feedback type="invalid">
                  This is a required field
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mt-3">
              <Form.Label className="mb-1"> HDL cholesterol </Form.Label>
              <InputGroup>
                <Form.Control
                  required
                  onChange={handleChange("hdl_chole")}
                  name="hdl_chole"
                />
                <InputGroup.Text>mg/dl</InputGroup.Text>

                <Form.Control.Feedback type="invalid">
                  This is a required field
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mt-3">
              <Form.Label className="mb-1"> LDL cholesterol </Form.Label>
              <InputGroup>
                <Form.Control
                  required
                  onChange={handleChange("ldl_chole")}
                  name="ldl_chole"
                />
                <InputGroup.Text>mg/dl</InputGroup.Text>

                <Form.Control.Feedback type="invalid">
                  This is a required field
                </Form.Control.Feedback>
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
            <Form.Control required onChange={handleChange("hmg")} name="hmg" />
            <InputGroup.Text>mg/dl</InputGroup.Text>

            <Form.Control.Feedback type="invalid">
              This is a required field
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </fieldset>
      <fieldset>
        <legend>Others</legend>

        <Form.Group className="">
          <Form.Label className="mb-1"> Blood sugar </Form.Label>
          <InputGroup>
            <Form.Control
              required
              onChange={handleChange("blds")}
              name="blds"
            />
            <InputGroup.Text>mg/dl</InputGroup.Text>

            <Form.Control.Feedback type="invalid">
              This is a required field
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </fieldset>

      <div className="d-flex justify-content-around mt-4">
        <button
          className="btn btn-secondary w-100 me-2"
          type="button"
          onClick={prevStep}
        >
          Previous
        </button>
        <button
          className="btn primaryRed text-white w-100"
          disabled={isDisabled}
          type="submit"
        >
          Submit
        </button>
      </div>
    </Form>
  );
};

export default StepTwo;
