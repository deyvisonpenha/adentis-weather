import { useEffect, useState } from 'react';
import { Forecast } from '../Forecast';
import { Region } from '../Region'
import { Container, LeftContent, RightContent } from './styles';

export interface RequestData {
  "idAreaAviso": string,
  "globalIdLocal": number,
  "local": string,
}

export function Dashboard(){
  const [ regions, setRegions ] = useState([] as RequestData[])

  useEffect(()=>{
   fetch('http://api.ipma.pt/open-data/distrits-islands.json')
    .then(response => response.json())
    .then(items => setRegions(items.data));
  },[]);

  return(
    <Container>
      <LeftContent>
        <h2>Region</h2>
        <input type="text" />
        <Region regions={regions}/>
      </LeftContent>
      <RightContent>
        <Forecast />
      </RightContent>
    </Container>
  )
}