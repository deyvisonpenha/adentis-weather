import { ChangeEvent, useEffect, useState } from 'react';

import { Forecast } from '../Forecast';
import { Region } from '../Region';

import { 
  Container, 
  LeftContent, 
  RightContent, 
  Input 
} from './styles';

import { RequestData } from './dashboard.types';

export function Dashboard(){
  const [ regions, setRegions ] = useState([] as RequestData[]);
  const [searchRegions, setSearchRegions] = useState([] as RequestData[]);

  useEffect(()=>{
   fetch('http://api.ipma.pt/open-data/distrits-islands.json')
    .then(response => response.json())
    .then(items => {
      setRegions(items.data);
      setSearchRegions(items.data)
    });
  },[]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchInput = regions.filter( region => 
      region.idAreaAviso.includes(event.target.value.toUpperCase()) 
      );
    setSearchRegions(searchInput);
  }

  return(
    <Container>
      <LeftContent>
        <h2>Region</h2>
        <Input 
          type="text"
          placeholder="Filter Region"
          onChange={handleChange}
        />
        <Region regions={searchRegions}/>
      </LeftContent>
      
      <RightContent>
        <h2>Forecast</h2>
        <Forecast />
      </RightContent>
    </Container>
  )
}