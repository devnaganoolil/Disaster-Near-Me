//adding the CSS file 
import './Loader.css';

const Loader = () => {
  //Creating Loading screen by providing data and adding picture
  return (
    <div>
      <h1>Disasters Around Us</h1>
      <h3>WebApp Created by Dev Naganoolil</h3>
      <h4>Powered by Leaflet and E.O.N.E.T.</h4>
      <div class="loader"></div>
      <img src={require('./disaster.png')} alt="Disaster"/>
    </div>
    
  );
};

export default Loader;
