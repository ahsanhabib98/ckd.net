import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import GetPrediction from './components/getPrediction';
import Navbar from './components/Header';
import HeroSection from './components/heroSection';
import Reports from './components/reports';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar/>

      {/* Hero Banner */}
      <HeroSection />
      
      {/* About */}
      <About/>

      {/* Get Prediction */}
      <GetPrediction/>
      
      {/* Reports */}
      <Reports/>

      {/* Contact */}
      <Contact/>
      
      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
