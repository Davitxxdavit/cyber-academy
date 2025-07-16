import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Courses from "./components/Courses";
import WebTech from "./components/webTech";
import Gallery from "./components/Gallery";
import Partners from "./components/Partners";
import Mentors from "./components/Mentors";
import Graphics from "./components/Graphics";
import Robo from "./components/Robo";
import IT from "./components/It";
import Algos from "./components/Algos";
import Office from "./components/Office";
import Photo from "./components/Photo";
import Mission from './components/Mission';
import Norms from './components/Norms';
import Quality from './components/Quality';
import Strategy from './components/Strategy';
import Plan from './components/Plan';
import Finance from './components/Finance';
import MicrosoftSuite from './components/MicrosoftSuite';
import GoogleWorkspace from './components/GoogleWorkspace';
import Managment from './components/Managment';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Partners" element={<Partners />} />
          <Route path="/Mentors" element={<Mentors />} />
          <Route path="/WebTech" element={<WebTech />} />
          <Route path="/Graphics" element={<Graphics />} />
          <Route path="/Robotech" element={<Robo />} />
          <Route path="/It" element={<IT />} />
          <Route path="/Algos" element={<Algos />} />
          <Route path="/Office" element={<Office />} />
          <Route path="/Photograph" element={<Photo />} />
          <Route path="/Mission" element={<Mission/>} />
          <Route path="/Norms" element={<Norms/>} />
          <Route path="/Quality" element={<Quality/>} />
          <Route path="/Strategy" element={<Strategy/>} />
          <Route path="/Plan" element={<Plan/>} />
          <Route path="/Finance" element={<Finance/>} />
          <Route path="/MicrosoftSuite" element={<MicrosoftSuite/>} />
          <Route path="/GoogleWorkspace" element={<GoogleWorkspace/>} />
          <Route path="/Managment" element={<Managment/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />

         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;