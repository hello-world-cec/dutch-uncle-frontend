import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContentView from './components/ContentView/ContentView';
import CardView from './components/CardView/CardView';
import ServiceCard from './components/ServiceCard/ServiceCard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/content" element={<ContentView />} />
          <Route path="/card" element={<CardView />} />
          <Route path="/news" element={<News />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/places" element={<Places />} />
          <Route path="/services" element={<Services />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/dos-and-donts" element={<DosAndDonts />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
