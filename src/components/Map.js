//Import all of the "react-leaflet" methods and other files within the project
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import { Icon } from "leaflet";
import Legend from "./Legend";
import MarkerClusterGroup from "react-leaflet-cluster";

//Import all of the images
import fire1 from "./fire.png"
import ice1 from "./iceberg.png"
import burn1 from "./sun.png"
import dust1 from "./foggy.png"
import crack1 from "./electrocardiogram.png"
import seaWaves1 from "./flooded-house.png"
import landSlide1 from "./landslide.png"
import mandMade1 from "./biohazard.png"
import storm1 from "./thunderstorm.png"
import snow1 from "./snowflake.png"
import temp1 from "./temperature.png"
import volcanoes1 from "./volcano.png"


//Create all of the icons used for their respected natural disaster

const fire = new Icon({
  iconUrl: fire1,
  iconSize: [25, 25],
});

const ice = new Icon({
  iconUrl: ice1,
  iconSize: [25, 25],
});

const burn = new Icon({
  iconUrl: burn1,
  iconSize: [25, 25],
});

const dust = new Icon({
  iconUrl: dust1,
  iconSize: [25, 25],
});

const crack = new Icon({
  iconUrl: crack1,
  iconSize: [25, 25],
});

const seaWaves = new Icon({
  iconUrl: seaWaves1,
  iconSize: [25, 25],
});

const landSlide = new Icon({
  iconUrl: landSlide1,
  iconSize: [25, 25],
});

const manMade = new Icon({
  iconUrl: mandMade1,
  iconSize: [25, 25],
});

const storm = new Icon({
  iconUrl: storm1,
  iconSize: [25, 25],
});

const snow = new Icon({
  iconUrl: snow1,
  iconSize: [25, 25],
});

const temp = new Icon({
  iconUrl: temp1,
  iconSize: [25, 25],
});

const volcanoes = new Icon({
  iconUrl: volcanoes1,
  iconSize: [25, 25],
});


//use the api Data passed from "App.js" to obtain the information needed to plot the disasters within the map


//The method in which is used to plot the points is by mapping out the api Data and then inputting the correct parameters onto the function from the "LocationMarker.js" file  
//This will in return create the points within the map and also add other functions within the "LocationMarker.js" file
const Map = ({ post, center, zoom }) => {
  const markers = post.map((data) => {
    if (data.categories[0].id === 6) {
      return (
        <LocationMarker
          key={data.id}
          lat={data.geometries[0].coordinates[1]}
          long={data.geometries[0].coordinates[0]}
          icon={burn}
          title={data.title}
          time={data.geometries[0].date}
        />
      );
    }


    if (data.categories[0].id === 7) {
      return (
        <LocationMarker
          key={data.id}
          lat={data.geometries[0].coordinates[1]}
          long={data.geometries[0].coordinates[0]}
          icon={dust}
          title={data.title}
          time={data.geometries[0].date}
        />
      );
    }

    if (data.categories[0].id === 8) {
      return (
        <LocationMarker
          key={data.id}
          lat={data.geometries[0].coordinates[1]}
          long={data.geometries[0].coordinates[0]}
          icon={fire}
          title={data.title}
          time={data.geometries[0].date}
        />
      );
    }

    if (data.categories[0].id === 9) {
      return (
        <LocationMarker
          key={data.id}
          lat={data.geometries[0].coordinates[1]}
          long={data.geometries[0].coordinates[0]}
          icon={seaWaves}
          title={data.title}
          time={data.geometries[0].date}
        />
      );
    }

    if (data.categories[0].id === 10) {
      const storm2 = data.geometries.map((geo) => {
        return (
          <LocationMarker
            key={data.id}
            lat={geo.coordinates[1]}
            long={geo.coordinates[0]}
            icon={storm}
            title={data.title}
            time={geo.date}
          />
        );
      });
      return storm2;
    }

    if (data.categories[0].id === 12) {
      return (
        <LocationMarker
          key={data.id}
          lat={data.geometries[0].coordinates[1]}
          long={data.geometries[0].coordinates[0]}
          icon={volcanoes}
          title={data.title}
          time={data.geometries[0].date}
        />
      );
    }

    if (data.categories[0].id === 14) {
      return (
        <LocationMarker
          key={data.id}
          lat={data.geometries[0].coordinates[1]}
          long={data.geometries[0].coordinates[0]}
          icon={landSlide}
          title={data.title}
          time={data.geometries[0].date}
        />
      );
    }

    if (data.categories[0].id === 15) {
      const ice2 = data.geometries.map((geo) => {
        return (
          <LocationMarker
            key={data.id}
            lat={geo.coordinates[1]}
            long={geo.coordinates[0]}
            icon={ice}
            title={data.title}
            time={geo.date}
          />
        );
      });
      return ice2;
    }

    if (data.categories[0].id === 16) {
      return (
        <LocationMarker
          key={data.id}
          lat={data.geometries[0].coordinates[1]}
          long={data.geometries[0].coordinates[0]}
          icon={crack}
          title={data.title}
          time={data.geometries[0].date}
        />
      );
    }

    if (data.categories[0].id === 17) {
      return (
        <LocationMarker
          key={data.id}
          lat={data.geometries[0].coordinates[1]}
          long={data.geometries[0].coordinates[0]}
          icon={snow}
          title={data.title}
          time={data.geometries[0].date}
        />
      );
    }

    if (data.categories[0].id === 18) {
      return (
        <LocationMarker
          key={data.id}
          lat={data.geometries[0].coordinates[1]}
          long={data.geometries[0].coordinates[0]}
          icon={temp}
          title={data.title}
          time={data.geometries[0].date}
        />
      );
    }

    if (data.categories[0].id === 19) {
      return (
        <LocationMarker
          key={data.id}
          lat={data.geometries[0].coordinates[1]}
          long={data.geometries[0].coordinates[0]}
          icon={manMade}
          title={data.title}
          time={data.geometries[0].date}
        />
      );
    }

    return null;
  });

  
  //Initializing map and calling all of the marker/points and is put within the MarkerCluster for better user visibility
  return (
    <div className="map">
      <MapContainer
        center={center}
        zoom={zoom}
        minZoom={3}
        worldCopyJump={true}
        maxBounds={1}
        maxBoundsViscosity= {1.0}
      >
        <TileLayer
          ss
          url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=JdbYq0IOmnjd0Jgw8cH7"
          tileSize={512}
          zoomOffset={-1}
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />

        
        <MarkerClusterGroup>
        {markers}  
        </MarkerClusterGroup>
      </MapContainer>
      <Legend/>
    </div>
  );
};


//Default Map props if none are specified
Map.defaultProps = {
  center: {
    lat: 37.0902,
    lng: -95.7129,
  },
  zoom: 4,
};

export default Map;
