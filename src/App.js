import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import Main from './Main';
import ProjectPageFieldbox from './ProjectPage/ProjectPageFieldbox';
import ProjectPageGameBazaar from './ProjectPage/ProjectPageGameBazaar';
import ProjectPageGrossjungig from './ProjectPage/ProjectPageGrossjungig';
import ProjectPageTudigo from './ProjectPage/ProjectPageTudigo';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Fieldbox" element={<ProjectPageFieldbox />} />
            <Route path="/Tudigo" element={<ProjectPageTudigo />} />
            <Route path="/Grossjungig" element={<ProjectPageGrossjungig />} />
            <Route path="/GameBazaar" element={<ProjectPageGameBazaar />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
