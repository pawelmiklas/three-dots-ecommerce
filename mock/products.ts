import { Collection, collections } from "./collections";
import { ProductProperty, productProperty } from "./productProperty";

export interface Product {
  key: string;
  name: string;
  price: number;
  discount: number;
  collections: Collection[];
  properties: ProductProperty[];
}

const products: Product[] = [
  {
    key: "53",
    name: 'lower',
    price: 170.98,
    discount: 14,
    properties: [productProperty[8], productProperty[5], productProperty[3]],
    collections: [collections[8], collections[5], collections[3]]
  },
  {
    key: "36",
    name: 'barn',
    price: 485.94,
    discount: 0,
    properties: [productProperty[7], productProperty[1]],
    collections: [collections[7], collections[1]]
  },
  {
    key: "64",
    name: 'pleasure',
    price: 407.48,
    discount: 9,
    properties: [productProperty[10], productProperty[7], productProperty[0]],
    collections: [collections[10], collections[7], collections[0]]
  },
  {
    key: "9",
    name: 'wash',
    price: 470.52,
    discount: 23,
    properties: [productProperty[2], productProperty[10], productProperty[9]],
    collections: [collections[2], collections[10], collections[9]]
  },
  {
    key: "1",
    name: 'copy',
    price: 669.85,
    discount: 9,
    properties: [productProperty[2], productProperty[1]],
    collections: [collections[2], collections[1]]
  },
  {
    key: "46",
    name: 'talk',
    price: 288.83,
    discount: 0,
    properties: [productProperty[1]],
    collections: [collections[1]]
  },
  {
    key: "26",
    name: 'progress',
    price: 329.36,
    discount: 22,
    properties: [productProperty[9], productProperty[5], productProperty[4]],
    collections: [collections[9], collections[5], collections[4]]
  },
  {
    key: "85",
    name: 'plane',
    price: 685.86,
    discount: 15,
    properties: [productProperty[8], productProperty[4], productProperty[3]],
    collections: [collections[8], collections[4], collections[3]]
  },
  {
    key: "82",
    name: 'movement',
    price: 589.84,
    discount: 0,
    properties: [productProperty[5], productProperty[6], productProperty[9]],
    collections: [collections[5], collections[6], collections[9]]
  },
  {
    key: "2",
    name: 'accurate',
    price: 555.45,
    discount: 13,
    properties: [productProperty[0], productProperty[8], productProperty[1]],
    collections: [collections[0], collections[8], collections[1]]
  },
  {
    key: "74",
    name: 'get',
    price: 477.82,
    discount: 21,
    properties: [productProperty[8], productProperty[7]],
    collections: [collections[8], collections[7]]
  },
  {
    key: "92",
    name: 'tie',
    price: 182.85,
    discount: 0,
    properties: [productProperty[2], productProperty[10]],
    collections: [collections[2], collections[10]]
  },
  {
    key: "11",
    name: 'would',
    price: 571.38,
    discount: 0,
    properties: [productProperty[4], productProperty[0], productProperty[7]],
    collections: [collections[4], collections[0], collections[7]]
  },
  {
    key: "26",
    name: 'plenty',
    price: 76.7,
    discount: 0,
    properties: [productProperty[10]],
    collections: [collections[10]]
  },
  {
    key: "41",
    name: 'hurried',
    price: 657.62,
    discount: 12,
    properties: [productProperty[4], productProperty[0]],
    collections: [collections[4], collections[0]]
  },
  {
    key: "25",
    name: 'involved',
    price: 57.43,
    discount: 20,
    properties: [productProperty[1], productProperty[4], productProperty[6]],
    collections: [collections[1], collections[4], collections[6]]
  },
  {
    key: "37",
    name: 'either',
    price: 521.58,
    discount: 13,
    properties: [productProperty[0], productProperty[7], productProperty[4]],
    collections: [collections[0], collections[7], collections[4]]
  },
  {
    key: "100",
    name: 'indicate',
    price: 660.19,
    discount: 18,
    properties: [productProperty[7], productProperty[1]],
    collections: [collections[7], collections[1]]
  },
];

export { products }
