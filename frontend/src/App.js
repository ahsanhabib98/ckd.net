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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Container>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
