import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import TNC from './component/TNC';
import PrivacyPolicy from './component/Privacy';
import SafetyStandards from './component/SaftyStandards';

function ExternalRedirect({ url }) {
  React.useEffect(() => {
    window.location.href = url;
  }, [url]);

  return null;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/download-app"
          element={
            <ExternalRedirect url="https://play.google.com/store/apps/details?id=com.loveakot.android" />
          }
        />
        <Route path="/terms-and-conditions" element={<TNC />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/safety-standards" element={<SafetyStandards />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;