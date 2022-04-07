import { v4 as uuid } from "uuid";
import { cap2, glasses4, shoe8 } from "../../assets";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Caps",
    imgSrc: cap2,
  },
  {
    _id: uuid(),
    categoryName: "Shoes",
    imgSrc: shoe8,
  },
  {
    _id: uuid(),
    categoryName: "Glasses",
    imgSrc: glasses4,
  },
];
