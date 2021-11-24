import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContentView from './components/ContentView/ContentView';
import CardView from './components/CardView/CardView';
import UserLogin from './components/UserLogin/UserLogin';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Culture from './pages/Culture/Culture';
import Services from './pages/Services/Services';
import Restaurants from './pages/Restaurants/Restaurants';
import Places from './pages/Places/Places';
import DosAndDonts from './pages/DosAndDonts/DosAndDonts';

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
          <Route path="/login" element={<UserLogin />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
