import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styles';

export function Forecast() {
  const [forecast, setForecast] = useState([]);

  const regionId = useSelector( (state: any) => state.globalIdLocal)

  useEffect(()=>{
    if(!!regionId) {
      fetch(`http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${regionId}.json`)
      .then(response => response.json())
      .then(items => setForecast(items.data));
    }
  },[regionId])

  return(
    <Container>
      <h1>Forecast</h1>
      { forecast.map((item:any, index) => (
        <div key={index}>
          <h3>{item.predWindDir} {item.forecastDate}</h3>
          <p>Minimum temperature: {item.tMin}˚C</p>
          <p>Maximum temperature: {item.tMax}˚C</p>
          <p>% precipitation: {item.precipitaProb}%</p>
        </div>
      ))}
    </Container>
  )
}