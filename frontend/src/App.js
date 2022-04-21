import { Container } from "react-bootstrap";
import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import GetPrediction from "./components/getPrediction";
import Navbar from "./components/Header";
import HeroSection from "./components/heroSection";
import Reports from "./components/reports";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      {/* Hero Banner */}
      <HeroSection />
      {/* About */}
      <About />
      {/* Get Prediction */}
      <GetPrediction />
      {/* Reports */}
      <Reports />
      {/* Contact */}
      <Contact />

      <div className="disclaimer mt-5 pb-3">
        <Container>
          <p>
          THIS WEBSITE DOES NOT PROVIDE MEDICAL ADVICE. The information on this website, including but not limited to text, pictures, photographs, and other material, is provided solely for informational and educational reasons. This website's content is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or another qualified health care provider if you have any questions about a medical condition or treatment, and always seek professional medical advice from professional medical advice. Do not rely on the on something you read on this website.
          </p>
        </Container>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
