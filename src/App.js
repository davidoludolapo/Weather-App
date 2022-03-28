import axios from 'axios'
import{ useState} from 'react'

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&&units=imperial&appid=78846346fb2a6f51f3d21b08b6f10dc8`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
       axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data);
    })
    setLocation('')
    }
   
  }

  return (
   <div className="app">
   <div className="search">
     <input type="text" value={location} placeholder="Enter Location" onKeyDown={searchLocation} onChange={event => setLocation(event.target.value)}  />
   </div>
      <div className="container">

      {data.name !== undefined &&
      
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()} °F</h1> : null}
           
          </div>
          <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
          
          </div>
        </div>
      }


    {data.name !== undefined && 
    
        <div className="bottom">
          <div className="feels">
            <p>Feels like</p>
          {data.main ? <p>{data.main.feels_like.toFixed()} °F</p> : null}
            
          </div>
          <div className="humidity">
            <p>Humidity</p>
          {data.main ? <p className="bold">{data.main.humidity} %</p> : null}
          </div>
          <div className="wind">
            <p>Wind Speed</p>
          {data.wind ? <p className="bold">{data.wind.speed.toFixed()} MPH</p> : null}
          </div>
        </div>
    
    }


      </div>
   </div>

  );
}

export default App;
