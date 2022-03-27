import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
    categoryName: "caps",
    brand: "Adidas",
    rating: '5',
    gender: "men",
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "3000",
    categoryName: "glasses",
    brand: "H&M",
    rating: '3',
    gender: "women",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "x",
    price: "1000",
    categoryName: "party wear",
    brand: "Ray Ban",
    rating: '2',
    gender: "Men",
  },
  {
    _id: uuid(),
    title: "book1",
    author: "msk",
    price: "900",
    categoryName: "caps",
    rating: '2',
    brand: "Nike",
    gender: "Women",
  },
  {
    _id: uuid(),
    title: "Hooked",
    author: "Nir Eyal",
    price: "200",
    categoryName: "shoes",
    rating: '1',
    brand: "Nike",
    gender: "Men"
  },
];
