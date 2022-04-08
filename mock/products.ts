import { Collection, collections } from "./collections";
import { ProductProperty, productProperties } from "./productProperties";

export interface Product {
  key: string;
  name: string;
  price: number;
  discount: number;
  collections: Collection[];
  properties: ProductProperty[];
  image:string;
}

const products: Product[] = [
  {
    key: "53",
    name: 'Euro Trekker Super',
    price: 170.98,
    discount: 14,
    properties: [productProperties[8], productProperties[5], productProperties[3]],
    collections: [collections[8], collections[5], collections[3]],
    image:'/products_images/image 2.png'
  },
  {
    key: "36",
    name: 'Equalizer 4.0 Trail',
    price: 485.94,
    discount: 0,
    properties: [productProperties[7], productProperties[1]],
    collections: [collections[7], collections[1]],
    image:'/products_images/image 3.png'
  },
  {
    key: "64",
    name: 'Revolt Lo Tx',
    price: 407.48,
    discount: 9,
    properties: [productProperties[10], productProperties[7], productProperties[0]],
    collections: [collections[10], collections[7], collections[0]],
    image:'/products_images/image 4.png'
  },
  {
    key: "9",
    name: 'ACBC Trampki do kostki- Evergreen',
    price: 470.52,
    discount: 23,
    properties: [productProperties[2], productProperties[10], productProperties[9]],
    collections: [collections[2], collections[10], collections[9]],
    image:'/products_images/image 5.png'
  },
  {
    key: "1",
    name: 'Mathilda 1d',
    price: 669.85,
    discount: 9,
    properties: [productProperties[2], productProperties[1]],
    collections: [collections[2], collections[1]],
    image:'/products_images/image 6.png'
  },
  {
    key: "46",
    name: 'Chuck 70s Court Reimagined Hi',
    price: 288.83,
    discount: 0,
    properties: [productProperties[1]],
    collections: [collections[1]],
    image:'/products_images/image 7.png'
  },
  {
    key: "26",
    name: 'Chuck 70s Court Reimagined Hi',
    price: 329.36,
    discount: 22,
    properties: [productProperties[9], productProperties[5], productProperties[4]],
    collections: [collections[9], collections[5], collections[4]],
    image:'/products_images/image 8.png'
  },
  {
    key: "85",
    name: 'Chuck 70s Court Reimagined Hi',
    price: 685.86,
    discount: 15,
    properties: [productProperties[8], productProperties[4], productProperties[3]],
    collections: [collections[8], collections[4], collections[3]],
    image:'/products_images/image 9.png'
  },
  {
    key: "82",
    name: 'Chuck 70s Court Reimagined Hi',
    price: 589.84,
    discount: 0,
    properties: [productProperties[5], productProperties[6], productProperties[9]],
    collections: [collections[5], collections[6], collections[9]],
    image:'/products_images/image 10.png'
  },
  {
    key: "2",
    name: 'Chuck 70s Court Reimagined Hi',
    price: 555.45,
    discount: 13,
    properties: [productProperties[0], productProperties[8], productProperties[1]],
    collections: [collections[0], collections[8], collections[1]],
    image:'/products_images/image 11.png'
  },
  {
    key: "74",
    name: 'Chuck 70s Court Reimagined Hi',
    price: 477.82,
    discount: 21,
    properties: [productProperties[8], productProperties[7]],
    collections: [collections[8], collections[7]],
    image:'/products_images/image 12.png'
  },
  {
    key: "92",
    name: 'Chuck 70s Court Reimagined Hi',
    price: 182.85,
    discount: 0,
    properties: [productProperties[2], productProperties[10]],
    collections: [collections[2], collections[10]],
    image:'/products_images/image 13.png'
  },
  {
    key: "11",
    name: 'Chuck 70s Court Reimagined Hi',
    price: 571.38,
    discount: 0,
    properties: [productProperties[4], productProperties[0], productProperties[7]],
    collections: [collections[4], collections[0], collections[7]],
    image:'/products_images/image 14.png'
  },
  {
    key: "26",
    name: 'Chuck 70s Court Reimagined Hi',
    price: 76.7,
    discount: 0,
    properties: [productProperties[10]],
    collections: [collections[10]],
    image:'/products_images/image 2.png'
  },
  {
    key: "41",
    name: 'Chuck 70s Court Reimagined Hi',
    price: 657.62,
    discount: 12,
    properties: [productProperties[4], productProperties[0]],
    collections: [collections[4], collections[0]],
    image:'/products_images/image 3.png'
  },
  {
    key: "25",
    name: 'Chuck 70s Court Reimagined Hi',
    price: 57.43,
    discount: 20,
    properties: [productProperties[1], productProperties[4], productProperties[6]],
    collections: [collections[1], collections[4], collections[6]],
    image:'/products_images/image 4.png'
  },
  {
    key: "37",
    name: 'Chuck 70s Court Reimagined Hi',
    price: 521.58,
    discount: 13,
    properties: [productProperties[0], productProperties[7], productProperties[4]],
    collections: [collections[0], collections[7], collections[4]],
    image:'/products_images/image 5.png'
  },
  {
    key: "100",
    name: 'Chuck 70s Court Reimagined Hi',
    price: 660.19,
    discount: 18,
    properties: [productProperties[7], productProperties[1]],
    collections: [collections[7], collections[1]],
    image:'/products_images/image 6.png'
  },
];

export { products }
