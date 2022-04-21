import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/footer";
import Header from "../../components/Header";
import SectionHeader from "../../components/sectionHeader";
import MultiStepForm from "./multiStepForm/GFR_Form";

function GFRReports() {
  return (
    <>
      <Header />

      <div className="generate-report p-5">
        <Container>
          <SectionHeader
            title="eGFR Prediction"
            subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <MultiStepForm />
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default GFRReports;
