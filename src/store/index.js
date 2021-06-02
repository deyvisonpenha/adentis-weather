import { createStore } from 'redux';
import { weatherForecast } from './forecast/forecast.reducer';

export const Store = createStore(weatherForecast);