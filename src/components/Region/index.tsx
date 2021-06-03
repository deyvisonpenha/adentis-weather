import { useDispatch } from 'react-redux';

import { Container, Button } from "./styles";

import { RequestData } from '../Dashboard/dashboard.types';
import { ShowForecast } from '../../store/forecast/forecast.actions';

interface Props{
  regions: RequestData[];
}

export function Region({regions}: Props){
  const dispatch = useDispatch();

  const handleShowWeather = ((globalIdLocal: Number) => {
    dispatch(ShowForecast(globalIdLocal));
  }) 

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <td>Region</td>
            <td>Code</td>
            <td>Local</td>
          </tr>
        </thead>
       <tbody>
         {regions.map(region => (
            <tr key={region.globalIdLocal}>
              <td>{region.idAreaAviso}</td>
              <td>{region.globalIdLocal}</td>
              <td>{region.local}</td>
              <td>
                <Button onClick={()=>handleShowWeather(region.globalIdLocal)}>Show</Button>
              </td>
            </tr>
         ))}
       </tbody>
      </table>
    </Container>
  )
}