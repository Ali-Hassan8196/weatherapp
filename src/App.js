import React, { useState, useEffect } from 'react';
import './App.css';

function App(){
  const [city,setCity]=useState(null);
  const [search,setSearch]=useState("Lahore");

  useEffect(()=>{
    const fetchApi =async()=>{
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=79ae77d7cd1d6fceaae839d5b4316c11`;
      const response=await fetch(url);
      const resjson= await response.json();
      
      setCity(resjson.main)
      
    }
    fetchApi();
  },[search] )

  return (
    <div className='maindiv'>
     <div>
      <input type="search" onChange={(e)=>setSearch(e.target.value)} className="input" 
      value={search} /> 
      <br /><br /><br /> <br /><br />
      </div>
      {!city ? (
          <p>No Data Found</p>
        ) : (
          <div>
          <h1 className='searchh' >{search}</h1> <br />
    
      <h1 className='tempr'>{city.temp} °C </h1>  <br />
      <h2 className='humdiv' >Humidity : {city.humidity}</h2>
           
       <h3 className='minmax'>Max: {city.temp_max} °C |  Min: {city.temp_min} °C</h3>
      </div>
        )

      }
      
    </div>
  )
}
export default App;