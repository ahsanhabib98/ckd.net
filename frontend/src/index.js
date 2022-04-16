import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import GFRReports from './pages/gfrReports/GenerateReport';
import NotFound from './pages/notFound/NotFound';
import GenerateReport from './pages/reports/GenerateReport';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="generate-report" element={<GenerateReport />} />
        <Route path="gfr-report" element={<GFRReports />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
