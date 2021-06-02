import { useDispatch } from 'react-redux';

import { Container } from "./styles";

import { RequestData } from '../Dashboard/index';
import { ShowForecast } from '../../store/forecast/forecast.actions';

interface Props{
  regions: RequestData[];
}

export function Region({regions}: Props){
  const dispatch = useDispatch();

  const handleRegionWeather = ((globalIdLocal: Number) => {
    dispatch(ShowForecast(globalIdLocal));
  }) 

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <td>Local</td>
            <td>Code</td>
            <td>Area</td>
          </tr>
        </thead>
       <tbody>
         {regions.map(region => (
            <tr key={region.globalIdLocal}>
              <td>{region.local}</td>
              <td>{region.globalIdLocal}</td>
              <td>{region.idAreaAviso}</td>
              <td>
                <button onClick={()=>handleRegionWeather(region.globalIdLocal)}>Show</button>
              </td>
            </tr>
         ))}
       </tbody>
      </table>
    </Container>
  )
}