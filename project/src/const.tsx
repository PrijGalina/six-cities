import {PointExpression} from 'leaflet';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const RATING_STARS = {
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
};

export const RATING_VALUES: number[] = [5, 4, 3, 2, 1];

export const RATING_STYLE = {
  'zero': 0,
  'one': 20,
  'two': 40,
  'three': 60,
  'four': 80,
  'five': 100,
};


export const CITIES = [ 'Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const URL_MARKER_DEFAULT = 'http://localhost:3000/img/pin.svg';
export const URL_MARKER_CURRENT = 'http://localhost:3000/img/pin-active.svg';

export const PIN_SIZE: PointExpression = [20, 30];
export const PIN_ANCHOR: PointExpression = [10, 30];

export const PagesClass = new Map ([
  ['Home', 'page__main--index'],
  ['LogIn', 'page__main--login'],
  ['Favorites', 'page__main--favorites'],
  ['Property', 'page__main--property'],
  ['undefined', 'page__main--undefined'],
]);

export enum PagesApp {
  Home = 'Home',
  LogIn = 'LogIn',
  Favorites = 'Favorites',
  Property = 'Property',
  undefined = 'undefined',
}
