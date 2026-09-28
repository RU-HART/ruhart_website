import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Projects from './pages/projects';
import Team from './pages/team';
import Sponsors from './pages/sponsors';
import Media from './pages/media';
import Connect from './pages/connect';
import Footer from './components/footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/media" element={<Media />} />
        <Route path="/connect" element={<Connect />} />


      </Routes>
       <Footer />  {/* sits below all pages */}
    </BrowserRouter>
  );
}



export default App;