//Adding all of the imports used within the file 
import {Marker, Popup} from "react-leaflet";


const LocationMarker = ({key, lat, long, icon, title, time}) => {

    //Splitting the strings to use within the popup method 
    var text = time.toString();
    var arr = text.split("T")
    var date = arr[0];
    var time1 = arr[1].replace("Z","")

    //Calling the marker method within "react-leaflet" to input marker/point onto map and also the popup method to show its respected information
    return (
        <div className="location-marker">
            <Marker key={key} position={[lat,long]} icon={icon}>
                <Popup>
                    <h2>{title}</h2>
                    <h3>Coordinates: {lat} {long}</h3>
                    <h3>Date: {date}</h3>
                    <h3>Time: {time1}</h3>
                </Popup>
            </Marker>
        </div>
    )
}

export default LocationMarker;