import './App.css';
import Contact from "./components/Contact";
import Map from './components/map/Map';


function App() {
    const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }
  return (
    <div>
      <header >
        <p>
          hello to my app
        </p>
        </header>
        <Map/>
        <Contact/>
       
    </div>
  );
}

export default App;
