//Add all of the imports needed to get API data and loading page
import {useState, useEffect} from 'react'
import Map from './components/Map'
import Loader from './components/Loader'

//Import the CSS page for the map
import './App.css';



function App()
{

  //Create the states for the API data and loading 
  const [post, setPost] = useState([])
  const [load, setLoad] = useState(false)


  //method used to obtain the api data and set the loading state to true and false depending on if the data is loaded or not
  useEffect(() => {
    const fetchEvents = async () => {
      //set loading to true
      setLoad(true)

      //obatin data from api and convert to JSON
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events?days=20')
      const { events } = await res.json()

      //put data onto posts array
      setPost(events)

      //set loading to false 
      setTimeout(()=>
      {
        setLoad(false)
      }, 2000)
    }

    fetchEvents()
  }, [])


  //trianary if to return loading page if the data is not loaded, and return map page after data is loaded
  //Also pass in the api data as a prop onto the Map file to be able to access it and use it within that file
  return(
    <div>
      {!load ? <Map post={post}/>: <Loader/>}
    </div>
  )
}


export default App;



