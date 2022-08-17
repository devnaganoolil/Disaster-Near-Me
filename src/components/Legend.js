//Adding all of the icon imports used for the legend
import {BsFillSunFill} from "react-icons/bs"
import {HiFire} from "react-icons/hi"
import {BsCloudHaze} from "react-icons/bs"
import {WiEarthquake, WiVolcano} from "react-icons/wi"
import {RiFloodFill} from "react-icons/ri"
import {BsFillCloudLightningRainFill} from "react-icons/bs"
import {GiFallingRocks, GiIceberg} from "react-icons/gi"
import {FaSnowflake, FaTemperatureHigh, FaBiohazard} from "react-icons/fa"

//Adding the css file used for the legend
import './Legend.css';


//creating legend function, where all of the disasters are labled with their respected icons
const Legend = () => {

    return (<legend>
        <h2>Legend</h2>
        <ul>
            <li><BsFillSunFill/> Drought</li>
            <li><BsCloudHaze/> Dust and Haze </li>
            <li><HiFire/> Wildfires</li>
            <li><RiFloodFill/> Floods </li>
            <li><BsFillCloudLightningRainFill/> Severe Storms </li>
            <li><WiVolcano/> Volcanoes </li>
            <li><GiFallingRocks/> Landslides </li>
            <li><GiIceberg/> Sea and Lake Ice </li>
            <li><WiEarthquake/> Earthquake </li>
            <li><FaSnowflake/> Snow </li>
            <li><FaTemperatureHigh/> Temperature Extremes </li>
            <li><FaBiohazard/> Manmade</li>
        </ul>
    </legend>
    );
};

export default Legend;