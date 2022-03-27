import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
// import { cap1, cap2, cap3, cap4, cap5, cap6, cap7, cap8, cap9, cap10, cap11, cap12, cap13, cap14 } from "../../assets"
import {cap1, cap2, cap3} from "../../assets";

export const products = [
  {
    _id: uuid(),
    title: "Nike",
    imgSrc: cap1,
    subtitle: "Embroidered cap",
    brand: "Nike",
    price: "500",
    categoryName: "caps",
    gender: "men",
    rating: 2,
  },
  {
    _id: uuid(),
    title: "Adidas",
    imgSrc: cap2,
    subtitle: "Casual cap",
    brand: "Adidas",
    price: "900",
    categoryName: "caps",
    gender: "men",
    rating: 4,
  },
  {
    _id: uuid(),
    title: "H&M",
    imgSrc: cap3,
    subtitle: "Embroidered cap",
    brand: "H&M",
    price: "700",
    categoryName: "caps",
    gender: "men",
    rating: 2,
  },
];
