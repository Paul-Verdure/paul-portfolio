import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProjectPageTudigo from './ProjectPage/ProjectPageTudigo';
import Main from './Main';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Tudigo" element={<ProjectPageTudigo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
