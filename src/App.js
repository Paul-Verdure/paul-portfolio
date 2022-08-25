import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectPageTudigo from './ProjectPage/ProjectPageTudigo';
import Main from './Main';
import ProjectPageGrossjungig from './ProjectPage/ProjectPageGrossjungig';
import ProjectPageWeatherCamper from './ProjectPage/ProjectPageWeatherCamper';
import ProjectPageGameBazaar from './ProjectPage/ProjectPageGameBazaar';
import ScrollToTop from './ScrollToTop';

function App() {
	return (
		<div>
			<BrowserRouter>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/Tudigo" element={<ProjectPageTudigo />} />
						<Route path="/Grossjungig" element={<ProjectPageGrossjungig />} />
						<Route path="/GameBazaar" element={<ProjectPageGameBazaar />} />
						<Route
							path="/WeatherCamper"
							element={<ProjectPageWeatherCamper />}
						/>
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
}

export default App;
