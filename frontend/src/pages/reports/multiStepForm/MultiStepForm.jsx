import React, { useState } from "react";
import axios from "axios";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

import { ckdHybridURL, ckdGFRURL } from "../../../constants";

function MultiStepForm() {
  const [values, setValues] = useState({
    sex: "",
    age: "",
    height: "",
    weight: "",
    waist: "",
    vision_left: "",
    vision_right: "",
    listen_left: "",
    listen_right: "",
    bp_high: "",
    bp_lwst: "",
    blds: "",
    tot_chole: "",
    triglyceride: "",
    hdl_chole: "",
    ldl_chole: "",
    hmg: "",
    olig_prote_cd: "",
    creatinine: "",
    sgot_ast: "",
    sgpt_alt: "",
    gamma_gtp: "",
    smk_stat_type_rsps_cd: "",
    drink_or_not: "",
    mouth_check: "",
    mbi: "",
    gfr: "",
  });

  const [outputs, setOutputs] = useState();

  const [step, setStep] = useState(1);

  const handlePredictCKDHybrid = (payload) => {
    axios
      .post(ckdHybridURL, payload)
      .then(res => {
        const { data } = res;
        setOutputs(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const nextStep = () => {
    if (step < 2) {
      setStep(step + 1);
    } else if (step === 2) {
      handlePredictCKDHybrid(values);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <div className="multi-step-form">
      <div className="card mt-4 mb-5 m-auto b-radious-8">
        <div className="card-header d-flex text-center p-0">
          <p
            className={`w-100 text-capitalize px-3 py-4 d-flex align-items-center justify-content-center ${
              step === 1 && "active"
            }`}
          >
            Clinico-physiological parameters
          </p>
          <p
            className={`w-100 text-capitalize px-3 py-4 d-flex align-items-center justify-content-center ${
              step === 2 && "active"
            }`}
          >
            Biochemical parameters
          </p>
        </div>

        <div className="card-body p-4">
          {
            {
              1: (
                <StepOne
                  handleChange={handleChange}
                  nextStep={nextStep}
                  value={values}
                />
              ),
              2: (
                <StepTwo
                  handleChange={handleChange}
                  prevStep={prevStep}
                  handlePredictCKDHybrid={handlePredictCKDHybrid}
                  values={values}
                />
              ),
            }[step]
          }
        </div>

        {/* Show Prediction Result */}
        {outputs && (
          <div className="result border-top">
            <div className="result-header text-center pb-3 mb-2">
              <h3>Prediction Result</h3>
            </div>

            <ul className="result-body">
              <li>
                <p> stage </p> <p> Probability Score</p>
              </li>
              {Object.entries(outputs).map(([key, value], i) => (
                <li key={key}>
                  <p> stage {i+1} </p> <p> {value}.toFixed(2)</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Show Prediction Result */}
      </div>
    </div>
  );
}

export default MultiStepForm;
