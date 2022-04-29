import React from 'react';
import Image from 'next/image';

const ProductImage = ({ url }: { url: string }) => {
  return (
    <>
      <Image src={url} layout={'fixed'} width={110} height={55} />
    </>
  );
};

export default ProductImage;
