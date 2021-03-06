import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from '../types/state';

export enum ActionType {
  LoadOffers = 'main/loadOffers',
  LoadOffersNearby = 'offer/loadOffersNearby',
  LoadFavoriteOffers = 'main/loadFavoriteOffers',
  LoadInfoAboutOffer = 'offer/loadInfoAboutOffer',
  LoadCommentsAboutOffer = 'offer/loadCommentsAboutOffer',
  DeleteAuthorization = 'user/logout',
  RedirectToRoute = 'user/redirectToRoute',
  SetActiveCity = 'main/setActiveCity',
  SetOfferActive = 'offer/setOfferActive',
  SetAuthStatus = 'user/login',
  SetSortOffers = 'main/setSortOffers',
  SetUserInfo ='user/setUserInfo',
  SetRating = 'offer/setRating',
  SetTextComment = 'offer/setTextComment',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
