export interface Brand {
  id: string;
  name: string;
  logo: string;
}

const brands: Brand[] = [
  {
    id: '1',
    name: 'Converse',
    logo: 'https://cdn.officeshoes.ws/product_images/brandlogos/converse.jpg',
  },
  {
    id: '2',
    name: 'FILA',
    logo: 'https://cdn.officeshoes.ws/product_images/brandlogos/fila.jpg',
  },
  {
    id: '3',
    name: 'Levis',
    logo: 'https://cdn.officeshoes.ws/product_images/brandlogos/levis.jpg',
  },
  {
    id: '4',
    name: 'Vans',
    logo: 'https://cdn.officeshoes.ws/product_images/brandlogos/vans.jpg',
  },
  {
    id: '5',
    name: 'New Balance',
    logo: 'https://cdn.officeshoes.ws/product_images/brandlogos/new%20balance.jpg',
  },
  {
    id: '6',
    name: 'Champion',
    logo: 'https://cdn.officeshoes.ws/product_images/brandlogos/champion.jpg',
  },
];

export { brands };
