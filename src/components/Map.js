//Import all of the "react-leaflet" methods and other files within the project
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import { Icon } from "leaflet";
import Legend from "./Legend";
import MarkerClusterGroup from "react-leaflet-cluster";


//Create all of the icons used for their respected natural disaster

const fire = new Icon({
  iconUrl: "/fire.png",
  iconSize: [25, 25],
});

const ice = new Icon({
  iconUrl: "/iceberg.png",
  iconSize: [25, 25],
});

const burn = new Icon({
  iconUrl: "/sun.png",
  iconSize: [25, 25],
});

const dust = new Icon({
  iconUrl: "/foggy.png",
  iconSize: [25, 25],
});

const crack = new Icon({
  iconUrl: "/electrocardiogram.png",
  iconSize: [25, 25],
});

const seaWaves = new Icon({
  iconUrl: "/flooded-house.png",
  iconSize: [25, 25],
});

const landSlide = new Icon({
  iconUrl: "/landslide.png",
  iconSize: [25, 25],
});

const manMade = new Icon({
  iconUrl: "/biohazard.png",
  iconSize: [25, 25],
});

const storm = new Icon({
  iconUrl: "/thunderstorm.png",
  iconSize: [25, 25],
});

const snow = new Icon({
  iconUrl: "/snowflake.png",
  iconSize: [25, 25],
});

const temp = new Icon({
  iconUrl: "/temperature.png",
  iconSize: [25, 25],
});

const volcanoes = new Icon({
  iconUrl: "/volcano.png",
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
