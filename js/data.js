/* @flow */

export type Listing = {
  id: number;
  name: string;
  instantBook: boolean;
  price: number;
  starRating: number;
  reviewsCount: number;
  previewImageURL: string;
  typeText: string;
  location: string;
};

export const AIRBNB_API = 'https://gist.githubusercontent.com/frantic/892564944e2230ee712a76f2a214365d/raw/397b9e29a703a3acf5d31cb507e231fb0aaa41e5/listings.json';
