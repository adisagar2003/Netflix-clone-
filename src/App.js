import logo from './logo.svg';
import './App.css';
import Row from './Components/Rows/Row';
import requests from './config/requests';
import Banner from './Components/Banner/Banner';
import Nav from './Components/Navbar/Nav';
function App() {
  return (
    <div className="App">
      <Banner />
    <Row title="Popular now!" isLargeRow  fetchUrl={requests.fetchPopular} />
    <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    <Row title="Action Movies" fetchUrl={requests.fetchTrending} />
    <Row title="Horror Movies" fetchUrl={requests.fetchTrending} />
    <Row title="Romance Movies" fetchUrl={requests.fetchTrending} />
    <Row title="Documentaries" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
