import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Card } from './components/Card'

import { Container } from './styles';

import { IForecast, IState } from './forecast.types';

export function Forecast() {
  const [forecast, setForecast] = useState<IForecast[]>([]);

  const regionId = useSelector( (state: IState) => state.globalIdLocal);

  useEffect(()=>{
    if(!!regionId) {
      fetch(`http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${regionId}.json`)
      .then(response => response.json())
      .then(items => setForecast(items.data));
    }
  },[regionId])

  return(
    <Container>
      { forecast.map((item: IForecast, index) => (
        <Card forecast={item} key={index} />
      ))}
    </Container>
  )
}