import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProjectPageTudigo from './ProjectPage/ProjectPageTudigo';
import Main from './Main';
import ProjectPageGrossjungig from './ProjectPage/ProjectPageGrossjungig';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Tudigo" element={<ProjectPageTudigo />} />
          <Route path="/Grossjungig" element={<ProjectPageGrossjungig />} />
          <Route path="/GameBazaar" element={<ProjectPageGrossjungig />} />
          <Route path="/WeatherCamper" element={<ProjectPageGrossjungig />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
