import {Offer} from '../types/offers';

export const offers: Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    goods: ['Spa tub', 'Kitchen', 'Balcony', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: '/img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['/img/room.jpg', '/img/apartment-02.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: '/img/apartment-03.jpg',
    price: 120,
    rating: 4.1,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 50.216,
        longitude: 6.2388,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: '/img/avatar-angelina.jpg',
      id: 4,
      isPro: true,
      name: 'Regina',
    },
    id: 2,
    images: ['/img/apartment-01.jpg', '/img/apartment-03.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 48.838270287830674,
      longitude: 2.3408418979472327,
      zoom: 8,
    },
    maxAdults: 3,
    previewImage: '/img/apartment-01.jpg',
    price: 180,
    rating: 5.0,
    title: 'Great location',
    type: 'apartment',
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 50.216,
        longitude: 6.2388,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: '/img/avatar-angelina.jpg',
      id: 2,
      isPro: true,
      name: 'Alice',
    },
    id: 3,
    images: ['/img/apartment-01.jpg', '/img/apartment-03.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 48.857087360223794,
      longitude: 2.319574097326833,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: '/img/apartment-01.jpg',
    price: 110,
    rating: 3.8,
    title: 'Beautiful location',
    type: 'apartment',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 48.00216,
        longitude: 2.168,
        zoom: 11,
      },
      name: 'Hamburg',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen'],
    host: {
      avatarUrl: '/img/avatar-angelina.jpg',
      id: 1,
      isPro: false,
      name: 'Olga',
    },
    id: 4,
    images: ['/img/apartment-02.jpg', '/img/apartment-03.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    maxAdults: 6,
    previewImage: '/img/apartment-02.jpg',
    price: 100,
    rating: 3.4,
    title: 'Luxurious studio at great location',
    type: 'apartment',
  },
];
