/* eslint-disable no-unused-vars */
import { Brand, brands } from './brands';
import { Collection, collections } from './collections';
import { ProductProperty, productProperties } from './productProperties';

export interface IProductSizes {
  size: number;
  onstock: number;
}

export enum shoesSex {
  men = 'men',
  women = 'women',
  kids = 'kids',
}

export const existingSizes = [
  38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 46, 46.5, 47, 47.5, 48, 48.5, 49, 49.5, 50,
];

export enum shoesColors {
  purple = '#a0008f',
  black = '#000000',
  red = '#d80000',
  orange = '#ff6000',
  blue = '#006cff',
  white = '#ffffff',
  brown = '#5d3000',
  green = '#27ba00',
  yellow = '#ffc000',
  multicolor = '#423f35',
  gray = '#a8a8a8',
  pink = '#ff006c',
}

// type shoesColors =

export interface Product {
  key: string;
  name: string;
  price: number;
  discount: number;
  collections: Collection[];
  properties: ProductProperty[];
  image: string;
  promoted: boolean;
  description: string;
  onsale: boolean;
  sizes: IProductSizes[];
  detailedImages: string[];
  sex: shoesSex;
  colors: shoesColors[];
  brand: Brand['id'];
}

const products: Product[] = [
  {
    key: '53c',
    name: 'Euro Trekker Super',
    price: 170.98,
    discount: 14,
    properties: [productProperties[8], productProperties[5], productProperties[3]],
    collections: [collections[8], collections[5], collections[3]],
    image: '/products_images/image 2.png',
    promoted: false,
    description: 'adadasdadsasd',
    onsale: false,
    sex: shoesSex.men,
    colors: [shoesColors.black, shoesColors.brown],
    brand: '1',
    sizes: [
      {
        size: 38.5,
        onstock: 1,
      },
      {
        size: 39,
        onstock: 10,
      },
      {
        size: 40,
        onstock: 13,
      },
      {
        size: 40.5,
        onstock: 0,
      },
      {
        size: 41,
        onstock: 10,
      },
      {
        size: 42,
        onstock: 10,
      },
      {
        size: 42.5,
        onstock: 0,
      },
      {
        size: 43,
        onstock: 10,
      },
      {
        size: 44,
        onstock: 16,
      },
      {
        size: 44.5,
        onstock: 20,
      },
      {
        size: 45,
        onstock: 10,
      },
      {
        size: 46,
        onstock: 10,
      },
      {
        size: 46.5,
        onstock: 30,
      },
      {
        size: 47,
        onstock: 0,
      },
      {
        size: 47.5,
        onstock: 10,
      },
      {
        size: 48,
        onstock: 0,
      },
      {
        size: 48.5,
        onstock: 10,
      },
      {
        size: 49,
        onstock: 0,
      },
      {
        size: 49.5,
        onstock: 10,
      },
      {
        size: 50,
        onstock: 0,
      },
    ],
    detailedImages: [
      '/products_images/details/171684c_2.jpg',
      '/products_images/details/171684c_3.jpg',
      '/products_images/details/171684c_4.jpg',
      '/products_images/details/171684c_5.jpg',
      '/products_images/details/171684c_6.jpg',
      '/products_images/details/171684c.jpg',
    ],
  },
  {
    key: '36c',
    name: 'Equalizer 4.0 Trail',
    price: 485.94,
    discount: 0,
    properties: [productProperties[7], productProperties[1]],
    collections: [collections[7], collections[1]],
    image: '/products_images/image 3.png',
    promoted: false,
    description: 'adadasdadsasd',
    onsale: false,
    sex: shoesSex.women,
    colors: [shoesColors.white, shoesColors.red],
    brand: '2',
    sizes: [
      {
        size: 38.5,
        onstock: 0,
      },
      {
        size: 39,
        onstock: 10,
      },
      {
        size: 40,
        onstock: 13,
      },
      {
        size: 40.5,
        onstock: 0,
      },
      {
        size: 41,
        onstock: 10,
      },
      {
        size: 42,
        onstock: 10,
      },
      {
        size: 42.5,
        onstock: 0,
      },
      {
        size: 43,
        onstock: 10,
      },
      {
        size: 44,
        onstock: 16,
      },
      {
        size: 44.5,
        onstock: 20,
      },
      {
        size: 45,
        onstock: 10,
      },
      {
        size: 46,
        onstock: 10,
      },
      {
        size: 46.5,
        onstock: 30,
      },
      {
        size: 47,
        onstock: 0,
      },
      {
        size: 47.5,
        onstock: 10,
      },
      {
        size: 48,
        onstock: 0,
      },
      {
        size: 48.5,
        onstock: 10,
      },
      {
        size: 49,
        onstock: 0,
      },
      {
        size: 49.5,
        onstock: 10,
      },
      {
        size: 50,
        onstock: 0,
      },
    ],
    detailedImages: [
      '/products_images/details/171684c_2.jpg',
      '/products_images/details/171684c_3.jpg',
      '/products_images/details/171684c_4.jpg',
      '/products_images/details/171684c_5.jpg',
      '/products_images/details/171684c_6.jpg',
      '/products_images/details/171684c.jpg',
    ],
  },
  {
    key: '64c',
    name: 'Revolt Lo Tx',
    price: 407.48,
    discount: 9,
    properties: [productProperties[10], productProperties[7], productProperties[0]],
    collections: [collections[10], collections[7], collections[0]],
    image: '/products_images/image 4.png',
    promoted: false,
    description: 'adadasdadsasd',
    onsale: false,
    sex: shoesSex.women,
    colors: [shoesColors.white, shoesColors.yellow, shoesColors.black],
    brand: '3',
    sizes: [
      {
        size: 38.5,
        onstock: 3,
      },
      {
        size: 39,
        onstock: 10,
      },
      {
        size: 40,
        onstock: 13,
      },
      {
        size: 40.5,
        onstock: 0,
      },
      {
        size: 41,
        onstock: 10,
      },
      {
        size: 42,
        onstock: 10,
      },
      {
        size: 42.5,
        onstock: 0,
      },
      {
        size: 43,
        onstock: 10,
      },
      {
        size: 44,
        onstock: 16,
      },
      {
        size: 44.5,
        onstock: 20,
      },
      {
        size: 45,
        onstock: 10,
      },
      {
        size: 46,
        onstock: 10,
      },
      {
        size: 46.5,
        onstock: 30,
      },
      {
        size: 47,
        onstock: 0,
      },
      {
        size: 47.5,
        onstock: 10,
      },
      {
        size: 48,
        onstock: 0,
      },
      {
        size: 48.5,
        onstock: 10,
      },
      {
        size: 49,
        onstock: 0,
      },
      {
        size: 49.5,
        onstock: 10,
      },
      {
        size: 50,
        onstock: 0,
      },
    ],
    detailedImages: [
      '/products_images/details/171684c_2.jpg',
      '/products_images/details/171684c_3.jpg',
      '/products_images/details/171684c_4.jpg',
      '/products_images/details/171684c_5.jpg',
      '/products_images/details/171684c_6.jpg',
      '/products_images/details/171684c.jpg',
    ],
  },
  {
    key: '9c',
    name: 'Evergreen',
    price: 470.52,
    discount: 23,
    properties: [productProperties[2], productProperties[10], productProperties[9]],
    collections: [collections[2], collections[10], collections[9]],
    image: '/products_images/image 5.png',
    promoted: false,
    description: 'adadasdadsasd',
    onsale: false,
    sex: shoesSex.men,
    colors: [shoesColors.pink],
    brand: '4',
    sizes: [
      {
        size: 38.5,
        onstock: 12,
      },
      {
        size: 39,
        onstock: 10,
      },
      {
        size: 40,
        onstock: 13,
      },
      {
        size: 40.5,
        onstock: 0,
      },
      {
        size: 41,
        onstock: 10,
      },
      {
        size: 42,
        onstock: 10,
      },
      {
        size: 42.5,
        onstock: 0,
      },
      {
        size: 43,
        onstock: 10,
      },
      {
        size: 44,
        onstock: 16,
      },
      {
        size: 44.5,
        onstock: 20,
      },
      {
        size: 45,
        onstock: 10,
      },
      {
        size: 46,
        onstock: 10,
      },
      {
        size: 46.5,
        onstock: 30,
      },
      {
        size: 47,
        onstock: 0,
      },
      {
        size: 47.5,
        onstock: 10,
      },
      {
        size: 48,
        onstock: 0,
      },
      {
        size: 48.5,
        onstock: 10,
      },
      {
        size: 49,
        onstock: 0,
      },
      {
        size: 49.5,
        onstock: 10,
      },
      {
        size: 50,
        onstock: 0,
      },
    ],
    detailedImages: [
      '/products_images/details/171684c_2.jpg',
      '/products_images/details/171684c_3.jpg',
      '/products_images/details/171684c_4.jpg',
      '/products_images/details/171684c_5.jpg',
      '/products_images/details/171684c_6.jpg',
      '/products_images/details/171684c.jpg',
    ],
  },
  {
    key: '1c',
    name: 'Mathilda 1d',
    price: 669.85,
    discount: 9,
    properties: [productProperties[2], productProperties[1]],
    collections: [collections[2], collections[1]],
    image: '/products_images/image 6.png',
    promoted: true,
    description:
      'Chuck 70s Court Być może lata 90. to dla Ciebie odległa historia, ale buty Ozelia są zakorzenione w tej bezkompromisowej, eksperymentalnej erze. Śmiały model inspirowany archiwalnymi butami adidas ma solidną konstrukcję, która sprawia, że nie sposób go nie zauważyć. Gładkie buty mają biegowy charakter, a kiedy Twoje dni nabierają tempa, amortyzacja Adiprene zapewnia stopom wygodę. Ten produkt zawiera materiały pochodzące z recyklingu w ramach naszych wysiłków zmierzających do rozwiązania problemu plastikowych odpadów. 20% elementów użytych do wykonania cholewki zawiera co najmniej 50% materiałów pochodzących z recyklingu.',
    onsale: false,
    sex: shoesSex.kids,
    colors: [shoesColors.blue, shoesColors.gray],
    brand: '5',
    sizes: [
      {
        size: 38.5,
        onstock: 12,
      },
      {
        size: 39,
        onstock: 10,
      },
      {
        size: 40,
        onstock: 13,
      },
      {
        size: 40.5,
        onstock: 0,
      },
      {
        size: 41,
        onstock: 10,
      },
      {
        size: 42,
        onstock: 10,
      },
      {
        size: 42.5,
        onstock: 0,
      },
      {
        size: 43,
        onstock: 10,
      },
      {
        size: 44,
        onstock: 16,
      },
      {
        size: 44.5,
        onstock: 20,
      },
      {
        size: 45,
        onstock: 10,
      },
      {
        size: 46,
        onstock: 10,
      },
      {
        size: 46.5,
        onstock: 30,
      },
      {
        size: 47,
        onstock: 0,
      },
      {
        size: 47.5,
        onstock: 10,
      },
      {
        size: 48,
        onstock: 0,
      },
      {
        size: 48.5,
        onstock: 10,
      },
      {
        size: 49,
        onstock: 0,
      },
      {
        size: 49.5,
        onstock: 10,
      },
      {
        size: 50,
        onstock: 0,
      },
    ],
    detailedImages: [
      '/products_images/details/171684c_2.jpg',
      '/products_images/details/171684c_3.jpg',
      '/products_images/details/171684c_4.jpg',
      '/products_images/details/171684c_5.jpg',
      '/products_images/details/171684c_6.jpg',
      '/products_images/details/171684c.jpg',
    ],
  },
  {
    key: '49c',
    name: 'Chuck 70s Court Reimagined Hi',
    price: 288.83,
    discount: 0,
    properties: [productProperties[1]],
    collections: [collections[1]],
    image: '/products_images/image 7.png',
    promoted: false,
    description: 'adadasdadsasd',
    onsale: false,
    sex: shoesSex.kids,
    colors: [shoesColors.blue, shoesColors.gray],
    brand: '6',
    sizes: [
      {
        size: 38.5,
        onstock: 12,
      },
      {
        size: 39,
        onstock: 10,
      },
      {
        size: 40,
        onstock: 13,
      },
      {
        size: 40.5,
        onstock: 0,
      },
      {
        size: 41,
        onstock: 10,
      },
      {
        size: 42,
        onstock: 10,
      },
      {
        size: 42.5,
        onstock: 0,
      },
      {
        size: 43,
        onstock: 10,
      },
      {
        size: 44,
        onstock: 16,
      },
      {
        size: 44.5,
        onstock: 20,
      },
      {
        size: 45,
        onstock: 10,
      },
      {
        size: 46,
        onstock: 10,
      },
      {
        size: 46.5,
        onstock: 30,
      },
      {
        size: 47,
        onstock: 0,
      },
      {
        size: 47.5,
        onstock: 10,
      },
      {
        size: 48,
        onstock: 0,
      },
      {
        size: 48.5,
        onstock: 10,
      },
      {
        size: 49,
        onstock: 0,
      },
      {
        size: 49.5,
        onstock: 10,
      },
      {
        size: 50,
        onstock: 0,
      },
    ],
    detailedImages: [
      '/products_images/details/171684c_2.jpg',
      '/products_images/details/171684c_3.jpg',
      '/products_images/details/171684c_4.jpg',
      '/products_images/details/171684c_5.jpg',
      '/products_images/details/171684c_6.jpg',
      '/products_images/details/171684c.jpg',
    ],
  },
  {
    key: '26c',
    name: 'Chuck 70s Court Reimagined Hi',
    price: 329.36,
    discount: 22,
    properties: [productProperties[9], productProperties[5], productProperties[4]],
    collections: [collections[9], collections[5], collections[4]],
    image: '/products_images/image 8.png',
    promoted: false,
    description: 'adadasdadsasd',
    onsale: false,
    sex: shoesSex.kids,
    colors: [shoesColors.blue, shoesColors.gray],
    brand: '1',
    sizes: [
      {
        size: 38.5,
        onstock: 12,
      },
      {
        size: 39,
        onstock: 10,
      },
      {
        size: 40,
        onstock: 13,
      },
      {
        size: 40.5,
        onstock: 0,
      },
      {
        size: 41,
        onstock: 10,
      },
      {
        size: 42,
        onstock: 10,
      },
      {
        size: 42.5,
        onstock: 0,
      },
      {
        size: 43,
        onstock: 10,
      },
      {
        size: 44,
        onstock: 16,
      },
      {
        size: 44.5,
        onstock: 20,
      },
      {
        size: 45,
        onstock: 10,
      },
      {
        size: 46,
        onstock: 10,
      },
      {
        size: 46.5,
        onstock: 30,
      },
      {
        size: 47,
        onstock: 0,
      },
      {
        size: 47.5,
        onstock: 10,
      },
      {
        size: 48,
        onstock: 0,
      },
      {
        size: 48.5,
        onstock: 10,
      },
      {
        size: 49,
        onstock: 0,
      },
      {
        size: 49.5,
        onstock: 10,
      },
      {
        size: 50,
        onstock: 0,
      },
    ],
    detailedImages: [
      '/products_images/details/171684c_2.jpg',
      '/products_images/details/171684c_3.jpg',
      '/products_images/details/171684c_4.jpg',
      '/products_images/details/171684c_5.jpg',
      '/products_images/details/171684c_6.jpg',
      '/products_images/details/171684c.jpg',
    ],
  },
  {
    key: '85c',
    name: 'Chuck 70s Court Reimagined Hi',
    price: 685.86,
    discount: 15,
    properties: [productProperties[8], productProperties[4], productProperties[3]],
    collections: [collections[8], collections[4], collections[3]],
    image: '/products_images/image 9.png',
    promoted: false,
    description: 'adadasdadsasd',
    onsale: false,
    sex: shoesSex.men,
    colors: [shoesColors.blue, shoesColors.gray],
    brand: '2',
    sizes: [
      {
        size: 38.5,
        onstock: 12,
      },
      {
        size: 39,
        onstock: 10,
      },
      {
        size: 40,
        onstock: 13,
      },
      {
        size: 40.5,
        onstock: 0,
      },
      {
        size: 41,
        onstock: 10,
      },
      {
        size: 42,
        onstock: 10,
      },
      {
        size: 42.5,
        onstock: 0,
      },
      {
        size: 43,
        onstock: 10,
      },
      {
        size: 44,
        onstock: 16,
      },
      {
        size: 44.5,
        onstock: 20,
      },
      {
        size: 45,
        onstock: 10,
      },
      {
        size: 46,
        onstock: 10,
      },
      {
        size: 46.5,
        onstock: 30,
      },
      {
        size: 47,
        onstock: 0,
      },
      {
        size: 47.5,
        onstock: 10,
      },
      {
        size: 48,
        onstock: 0,
      },
      {
        size: 48.5,
        onstock: 10,
      },
      {
        size: 49,
        onstock: 0,
      },
      {
        size: 49.5,
        onstock: 10,
      },
      {
        size: 50,
        onstock: 0,
      },
    ],
    detailedImages: [
      '/products_images/details/171684c_2.jpg',
      '/products_images/details/171684c_3.jpg',
      '/products_images/details/171684c_4.jpg',
      '/products_images/details/171684c_5.jpg',
      '/products_images/details/171684c_6.jpg',
      '/products_images/details/171684c.jpg',
    ],
  },
  {
    key: '82c',
    name: 'Chuck 70s Court Reimagined Hi',
    price: 589.84,
    discount: 0,
    properties: [productProperties[5], productProperties[6], productProperties[9]],
    collections: [collections[5], collections[6], collections[9]],
    image: '/products_images/image 10.png',
    promoted: false,
    description: 'adadasdadsasd',
    onsale: false,
    sex: shoesSex.men,
    colors: [shoesColors.orange, shoesColors.purple],
    brand: '3',
    sizes: [
      {
        size: 38.5,
        onstock: 12,
      },
      {
        size: 39,
        onstock: 10,
      },
      {
        size: 40,
        onstock: 13,
      },
      {
        size: 40.5,
        onstock: 0,
      },
      {
        size: 41,
        onstock: 10,
      },
      {
        size: 42,
        onstock: 10,
      },
      {
        size: 42.5,
        onstock: 0,
      },
      {
        size: 43,
        onstock: 10,
      },
      {
        size: 44,
        onstock: 16,
      },
      {
        size: 44.5,
        onstock: 20,
      },
      {
        size: 45,
        onstock: 10,
      },
      {
        size: 46,
        onstock: 10,
      },
      {
        size: 46.5,
        onstock: 30,
      },
      {
        size: 47,
        onstock: 0,
      },
      {
        size: 47.5,
        onstock: 10,
      },
      {
        size: 48,
        onstock: 0,
      },
      {
        size: 48.5,
        onstock: 10,
      },
      {
        size: 49,
        onstock: 0,
      },
      {
        size: 49.5,
        onstock: 10,
      },
      {
        size: 50,
        onstock: 0,
      },
    ],
    detailedImages: [
      '/products_images/details/171684c_2.jpg',
      '/products_images/details/171684c_3.jpg',
      '/products_images/details/171684c_4.jpg',
      '/products_images/details/171684c_5.jpg',
      '/products_images/details/171684c_6.jpg',
      '/products_images/details/171684c.jpg',
    ],
  },
  {
    key: '2c',
    name: 'Chuck 70s Court Reimagined Hi',
    price: 555.45,
    discount: 13,
    properties: [productProperties[0], productProperties[8], productProperties[1]],
    collections: [collections[0], collections[8], collections[1]],
    image: '/products_images/image 11.png',
    promoted: false,
    description: 'adadasdadsasd',
    onsale: true,
    sex: shoesSex.women,
    colors: [shoesColors.orange, shoesColors.purple],
    brand: '4',
    sizes: [
      {
        size: 38.5,
        onstock: 12,
      },
      {
        size: 39,
        onstock: 10,
      },
      {
        size: 40,
        onstock: 13,
      },
      {
        size: 40.5,
        onstock: 0,
      },
      {
        size: 41,
        onstock: 10,
      },
      {
        size: 42,
        onstock: 10,
      },
      {
        size: 42.5,
        onstock: 0,
      },
      {
        size: 43,
        onstock: 10,
      },
      {
        size: 44,
        onstock: 16,
      },
      {
        size: 44.5,
        onstock: 20,
      },
      {
        size: 45,
        onstock: 10,
      },
      {
        size: 46,
        onstock: 10,
      },
      {
        size: 46.5,
        onstock: 30,
      },
      {
        size: 47,
        onstock: 0,
      },
      {
        size: 47.5,
        onstock: 10,
      },
      {
        size: 48,
        onstock: 0,
      },
      {
        size: 48.5,
        onstock: 10,
      },
      {
        size: 49,
        onstock: 0,
      },
      {
        size: 49.5,
        onstock: 10,
      },
      {
        size: 50,
        onstock: 0,
      },
    ],
    detailedImages: [
      '/products_images/details/171684c_2.jpg',
      '/products_images/details/171684c_3.jpg',
      '/products_images/details/171684c_4.jpg',
      '/products_images/details/171684c_5.jpg',
      '/products_images/details/171684c_6.jpg',
      '/products_images/details/171684c.jpg',
    ],
  },
  {
    key: '74c',
    name: 'Chuck 70s Court Reimagined Hi',
    price: 477.82,
    discount: 21,
    properties: [productProperties[8], productProperties[7]],
    collections: [collections[8], collections[7]],
    image: '/products_images/image 12.png',
    promoted: false,
    description: 'adadasdadsasd',
    onsale: true,
    sex: shoesSex.women,
    colors: [shoesColors.multicolor],
    brand: '5',
    sizes: [
      {
        size: 38.5,
        onstock: 12,
      },
      {
        size: 39,
        onstock: 10,
      },
      {
        size: 40,
        onstock: 13,
      },
      {
        size: 40.5,
        onstock: 0,
      },
      {
        size: 41,
        onstock: 10,
      },
      {
        size: 42,
        onstock: 10,
      },
      {
        size: 42.5,
        onstock: 0,
      },
      {
        size: 43,
        onstock: 10,
      },
      {
        size: 44,
        onstock: 16,
      },
      {
        size: 44.5,
        onstock: 20,
      },
      {
        size: 45,
        onstock: 10,
      },
      {
        size: 46,
        onstock: 10,
      },
      {
        size: 46.5,
        onstock: 30,
      },
      {
        size: 47,
        onstock: 0,
      },
      {
        size: 47.5,
        onstock: 10,
      },
      {
        size: 48,
        onstock: 0,
      },
      {
        size: 48.5,
        onstock: 10,
      },
      {
        size: 49,
        onstock: 0,
      },
      {
        size: 49.5,
        onstock: 10,
      },
      {
        size: 50,
        onstock: 0,
      },
    ],
    detailedImages: [
      '/products_images/details/171684c_2.jpg',
      '/products_images/details/171684c_3.jpg',
      '/products_images/details/171684c_4.jpg',
      '/products_images/details/171684c_5.jpg',
      '/products_images/details/171684c_6.jpg',
      '/products_images/details/171684c.jpg',
    ],
  },
  {
    key: '92c',
    name: 'Chuck 70s Court Reimagined Hi',
    price: 182.85,
    discount: 0,
    properties: [productProperties[2], productProperties[10]],
    collections: [collections[2], collections[10]],
    image: '/products_images/image 13.png',
    promoted: false,
    description: 'adadasdadsasd',
    onsale: true,
    sex: shoesSex.kids,
    colors: [shoesColors.green],
    brand: '6',
    sizes: [
      {
        size: 38.5,
        onstock: 12,
      },
      {
        size: 39,
        onstock: 10,
      },
      {
        size: 40,
        onstock: 13,
      },
      {
        size: 40.5,
        onstock: 0,
      },
      {
        size: 41,
        onstock: 10,
      },
      {
        size: 42,
        onstock: 10,
      },
      {
        size: 42.5,
        onstock: 0,
      },
      {
        size: 43,
        onstock: 10,
      },
      {
        size: 44,
        onstock: 16,
      },
      {
        size: 44.5,
        onstock: 20,
      },
      {
        size: 45,
        onstock: 10,
      },
      {
        size: 46,
        onstock: 10,
      },
      {
        size: 46.5,
        onstock: 30,
      },
      {
        size: 47,
        onstock: 0,
      },
      {
        size: 47.5,
        onstock: 10,
      },
      {
        size: 48,
        onstock: 0,
      },
      {
        size: 48.5,
        onstock: 10,
      },
      {
        size: 49,
        onstock: 0,
      },
      {
        size: 49.5,
        onstock: 10,
      },
      {
        size: 50,
        onstock: 0,
      },
    ],
    detailedImages: [
      '/products_images/details/171684c_2.jpg',
      '/products_images/details/171684c_3.jpg',
      '/products_images/details/171684c_4.jpg',
      '/products_images/details/171684c_5.jpg',
      '/products_images/details/171684c_6.jpg',
      '/products_images/details/171684c.jpg',
    ],
  },
  {
    key: '11c',
    name: 'Chuck 70s Court Reimagined Hi',
    price: 571.38,
    discount: 0,
    properties: [productProperties[4], productProperties[0], productProperties[7]],
    collections: [collections[4], collections[0], collections[7]],
    image: '/products_images/image 14.png',
    promoted: false,
    description: 'adadasdadsasd',
    onsale: true,
    sex: shoesSex.kids,
    colors: [shoesColors.green],
    brand: '1',
    sizes: [
      {
        size: 38.5,
        onstock: 12,
      },
      {
        size: 39,
        onstock: 10,
      },
      {
        size: 40,
        onstock: 13,
      },
      {
        size: 40.5,
        onstock: 0,
      },
      {
        size: 41,
        onstock: 10,
      },
      {
        size: 42,
        onstock: 10,
      },
      {
        size: 42.5,
        onstock: 0,
      },
      {
        size: 43,
        onstock: 10,
      },
      {
        size: 44,
        onstock: 16,
      },
      {
        size: 44.5,
        onstock: 20,
      },
      {
        size: 45,
        onstock: 10,
      },
      {
        size: 46,
        onstock: 10,
      },
      {
        size: 46.5,
        onstock: 30,
      },
      {
        size: 47,
        onstock: 0,
      },
      {
        size: 47.5,
        onstock: 10,
      },
      {
        size: 48,
        onstock: 0,
      },
      {
        size: 48.5,
        onstock: 10,
      },
      {
        size: 49,
        onstock: 0,
      },
      {
        size: 49.5,
        onstock: 10,
      },
      {
        size: 50,
        onstock: 0,
      },
    ],
    detailedImages: [
      '/products_images/details/171684c_2.jpg',
      '/products_images/details/171684c_3.jpg',
      '/products_images/details/171684c_4.jpg',
      '/products_images/details/171684c_5.jpg',
      '/products_images/details/171684c_6.jpg',
      '/products_images/details/171684c.jpg',
    ],
  },
  {
    key: '27c',
    name: 'Chuck 70s Court Reimagined Hi',
    price: 76.7,
    discount: 0,
    properties: [productProperties[10]],
    collections: [collections[10]],
    image: '/products_images/image 2.png',
    promoted: false,
    description: 'adadasdadsasd',
    onsale: true,
    sex: shoesSex.women,
    colors: [shoesColors.blue],
    brand: '2',
    sizes: [
      {
        size: 38.5,
        onstock: 12,
      },
      {
        size: 39,
        onstock: 10,
      },
      {
        size: 40,
        onstock: 13,
      },
      {
        size: 40.5,
        onstock: 0,
      },
      {
        size: 41,
        onstock: 10,
      },
      {
        size: 42,
        onstock: 10,
      },
      {
        size: 42.5,
        onstock: 0,
      },
      {
        size: 43,
        onstock: 10,
      },
      {
        size: 44,
        onstock: 16,
      },
      {
        size: 44.5,
        onstock: 20,
      },
      {
        size: 45,
        onstock: 10,
      },
      {
        size: 46,
        onstock: 10,
      },
      {
        size: 46.5,
        onstock: 30,
      },
      {
        size: 47,
        onstock: 0,
      },
      {
        size: 47.5,
        onstock: 10,
      },
      {
        size: 48,
        onstock: 0,
      },
      {
        size: 48.5,
        onstock: 10,
      },
      {
        size: 49,
        onstock: 0,
      },
      {
        size: 49.5,
        onstock: 10,
      },
      {
        size: 50,
        onstock: 0,
      },
    ],
    detailedImages: [
      '/products_images/details/171684c_2.jpg',
      '/products_images/details/171684c_3.jpg',
      '/products_images/details/171684c_4.jpg',
      '/products_images/details/171684c_5.jpg',
      '/products_images/details/171684c_6.jpg',
      '/products_images/details/171684c.jpg',
    ],
  },
  {
    key: '41c',
    name: 'Chuck 70s Court Reimagined Hi',
    price: 657.62,
    discount: 12,
    properties: [productProperties[4], productProperties[0]],
    collections: [collections[4], collections[0]],
    image: '/products_images/image 3.png',
    promoted: false,
    description: 'adadasdadsasd',
    onsale: true,
    sex: shoesSex.men,
    colors: [shoesColors.blue],
    brand: '3',
    sizes: [
      {
        size: 38.5,
        onstock: 12,
      },
      {
        size: 39,
        onstock: 10,
      },
      {
        size: 40,
        onstock: 13,
      },
      {
        size: 40.5,
        onstock: 0,
      },
      {
        size: 41,
        onstock: 10,
      },
      {
        size: 42,
        onstock: 10,
      },
      {
        size: 42.5,
        onstock: 0,
      },
      {
        size: 43,
        onstock: 10,
      },
      {
        size: 44,
        onstock: 16,
      },
      {
        size: 44.5,
        onstock: 20,
      },
      {
        size: 45,
        onstock: 10,
      },
      {
        size: 46,
        onstock: 10,
      },
      {
        size: 46.5,
        onstock: 30,
      },
      {
        size: 47,
        onstock: 0,
      },
      {
        size: 47.5,
        onstock: 10,
      },
      {
        size: 48,
        onstock: 0,
      },
      {
        size: 48.5,
        onstock: 10,
      },
      {
        size: 49,
        onstock: 0,
      },
      {
        size: 49.5,
        onstock: 10,
      },
      {
        size: 50,
        onstock: 0,
      },
    ],
    detailedImages: [
      '/products_images/details/171684c_2.jpg',
      '/products_images/details/171684c_3.jpg',
      '/products_images/details/171684c_4.jpg',
      '/products_images/details/171684c_5.jpg',
      '/products_images/details/171684c_6.jpg',
      '/products_images/details/171684c.jpg',
    ],
  },
  {
    key: '25c',
    name: 'Chuck 70s Court Reimagined Hi',
    price: 57.43,
    discount: 20,
    properties: [productProperties[1], productProperties[4], productProperties[6]],
    collections: [collections[1], collections[4], collections[6]],
    image: '/products_images/image 4.png',
    promoted: false,
    description: 'adadasdadsasd',
    onsale: true,
    sex: shoesSex.men,
    colors: [shoesColors.gray],
    brand: '4',
    sizes: [
      {
        size: 38.5,
        onstock: 12,
      },
      {
        size: 39,
        onstock: 10,
      },
      {
        size: 40,
        onstock: 13,
      },
      {
        size: 40.5,
        onstock: 0,
      },
      {
        size: 41,
        onstock: 10,
      },
      {
        size: 42,
        onstock: 10,
      },
      {
        size: 42.5,
        onstock: 0,
      },
      {
        size: 43,
        onstock: 10,
      },
      {
        size: 44,
        onstock: 16,
      },
      {
        size: 44.5,
        onstock: 20,
      },
      {
        size: 45,
        onstock: 10,
      },
      {
        size: 46,
        onstock: 10,
      },
      {
        size: 46.5,
        onstock: 30,
      },
      {
        size: 47,
        onstock: 0,
      },
      {
        size: 47.5,
        onstock: 10,
      },
      {
        size: 48,
        onstock: 0,
      },
      {
        size: 48.5,
        onstock: 10,
      },
      {
        size: 49,
        onstock: 0,
      },
      {
        size: 49.5,
        onstock: 10,
      },
      {
        size: 50,
        onstock: 0,
      },
    ],
    detailedImages: [
      '/products_images/details/171684c_2.jpg',
      '/products_images/details/171684c_3.jpg',
      '/products_images/details/171684c_4.jpg',
      '/products_images/details/171684c_5.jpg',
      '/products_images/details/171684c_6.jpg',
      '/products_images/details/171684c.jpg',
    ],
  },
  {
    key: '37c',
    name: 'Chuck 70s Court Reimagined Hi',
    price: 521.58,
    discount: 13,
    properties: [productProperties[0], productProperties[7], productProperties[4]],
    collections: [collections[0], collections[7], collections[4]],
    image: '/products_images/image 5.png',
    promoted: false,
    description: 'adadasdadsasd',
    onsale: true,
    sex: shoesSex.women,
    colors: [shoesColors.yellow],
    brand: '5',
    sizes: [
      {
        size: 38.5,
        onstock: 12,
      },
      {
        size: 39,
        onstock: 10,
      },
      {
        size: 40,
        onstock: 13,
      },
      {
        size: 40.5,
        onstock: 0,
      },
      {
        size: 41,
        onstock: 10,
      },
      {
        size: 42,
        onstock: 10,
      },
      {
        size: 42.5,
        onstock: 0,
      },
      {
        size: 43,
        onstock: 10,
      },
      {
        size: 44,
        onstock: 16,
      },
      {
        size: 44.5,
        onstock: 20,
      },
      {
        size: 45,
        onstock: 10,
      },
      {
        size: 46,
        onstock: 10,
      },
      {
        size: 46.5,
        onstock: 30,
      },
      {
        size: 47,
        onstock: 0,
      },
      {
        size: 47.5,
        onstock: 10,
      },
      {
        size: 48,
        onstock: 0,
      },
      {
        size: 48.5,
        onstock: 10,
      },
      {
        size: 49,
        onstock: 0,
      },
      {
        size: 49.5,
        onstock: 10,
      },
      {
        size: 50,
        onstock: 0,
      },
    ],
    detailedImages: [
      '/products_images/details/171684c_2.jpg',
      '/products_images/details/171684c_3.jpg',
      '/products_images/details/171684c_4.jpg',
      '/products_images/details/171684c_5.jpg',
      '/products_images/details/171684c_6.jpg',
      '/products_images/details/171684c.jpg',
    ],
  },
  {
    key: '100c',
    name: 'Chuck 70s Court Reimagined Hi',
    price: 660.19,
    discount: 18,
    properties: [productProperties[7], productProperties[1]],
    collections: [collections[7], collections[1]],
    image: '/products_images/image 6.png',
    promoted: false,
    description: 'adadasdadsasd',
    onsale: false,
    sex: shoesSex.kids,
    colors: [shoesColors.yellow],
    brand: '6',
    sizes: [
      {
        size: 38.5,
        onstock: 12,
      },
      {
        size: 39,
        onstock: 10,
      },
      {
        size: 40,
        onstock: 13,
      },
      {
        size: 40.5,
        onstock: 0,
      },
      {
        size: 41,
        onstock: 10,
      },
      {
        size: 42,
        onstock: 10,
      },
      {
        size: 42.5,
        onstock: 0,
      },
      {
        size: 43,
        onstock: 10,
      },
      {
        size: 44,
        onstock: 16,
      },
      {
        size: 44.5,
        onstock: 20,
      },
      {
        size: 45,
        onstock: 10,
      },
      {
        size: 46,
        onstock: 10,
      },
      {
        size: 46.5,
        onstock: 30,
      },
      {
        size: 47,
        onstock: 0,
      },
      {
        size: 47.5,
        onstock: 10,
      },
      {
        size: 48,
        onstock: 0,
      },
      {
        size: 48.5,
        onstock: 10,
      },
      {
        size: 49,
        onstock: 0,
      },
      {
        size: 49.5,
        onstock: 10,
      },
      {
        size: 50,
        onstock: 0,
      },
    ],
    detailedImages: [
      '/products_images/details/171684c_2.jpg',
      '/products_images/details/171684c_3.jpg',
      '/products_images/details/171684c_4.jpg',
      '/products_images/details/171684c_5.jpg',
      '/products_images/details/171684c_6.jpg',
      '/products_images/details/171684c.jpg',
    ],
  },
];

const fetchProd = async () => {
  const productsAll = await (await fetch(`http://localhost:8080/api/public/products/all`)).json();

  if (productsAll) {
    productsAll.forEach(async (product: { productId: any }) => {
      const prodId = product.productId;

      if (prodId) {
        const prod = await (await fetch(`http://localhost:8080/api/public/products/${prodId}`)).json();
        const prodStock = await (await fetch(`http://localhost:8080/api/public/stocks/product/${prodId}`)).json();
        const prodVariant = await (await fetch(`http://localhost:8080/api/public/products/${prodId}/variants`)).json();

        if (prodStock && prodVariant) {
          const colors = prodVariant.variants.map((i: { color: any }) => i.color);
          const sizes: { size: any; onstock: any }[] = [];
          const images = prodVariant.variants[0].imageUrl.replace(/[^A-Za-z0-9.,:_/-]/g, '').split(',');

          prodStock.data.forEach((i: { sizes: { size: any; amount: any }[] }) => {
            console.log(i.sizes);
            i.sizes.map((element: { size: any; amount: any }) => {
              sizes.push({
                size: parseInt(element.size),
                onstock: parseInt(element.amount),
              });
            });
          });

          const sex = [shoesSex.men, shoesSex.women, shoesSex.kids];

          const product: Product = {
            key: prod.productId.toString(),
            name: prod.name,
            price: prod.price,
            discount: prod.discount,
            collections: [],
            properties: [],
            image: images[0],
            promoted: false,
            description: prod.description,
            onsale: false,
            sizes: sizes,
            detailedImages: images,
            sex: sex[Math.floor(Math.random() * (2 - 0 + 1) + 0)],
            colors: colors,
            brand: brands[Math.floor(Math.random() * (5 - 0 + 1) + 0)].id,
          };

          products.push(product);
        }
      }
    });
  }
};

fetchProd();

export { products, fetchProd };
