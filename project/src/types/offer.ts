export type Location = {
  latitude: number,
  longitude: number,
  zoom: number,
}

export type City = {
  location: Location,
  name: string,
}

export type Hosts = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
}

export type Offer = {
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: Hosts,
  id: number,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: Location,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
}

export type OfferClasses = {
  article: string,
  image: string,
  info: string,
}

export type OfferStatusFavorite = {
  id: number,
  status: number,
}

export type CommentForm = {
  id: number,
  comment: string,
  rating: number,
}
