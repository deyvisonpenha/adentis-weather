import { Container } from './styles';
import { IForecast } from '../../forecast.types'

interface Props {
  forecast: IForecast,
}

export function Card({forecast}: Props) {
  return(
    <Container >
     
        <h3>{forecast.predWindDir} {forecast.forecastDate}</h3>
        <p>Minimum temperature: {forecast.tMin}˚C</p>
        <p>Maximum temperature: {forecast.tMax}˚C</p>
        <p>% precipitation: {forecast.precipitaProb}%</p>
      
    </Container>
  )
}