import { Button, List, Typography } from 'antd';
import { useProductVariants } from 'hooks/api/useProductVariants';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ProductVariantAdd from './ProductVariantAdd';

const ProductVariants = () => {
  const router = useRouter();
  const productId = Number(router.query.id);
  const { data, mutate } = useProductVariants(productId);
  const [isProductVariantAdd, setIsProductVariantAdd] = useState<boolean>(false);

  if (!data?.variants) {
    return null;
  }

  return (
    <>
      {!!isProductVariantAdd && (
        <ProductVariantAdd
          isModalVisible={!!isProductVariantAdd}
          productId={productId}
          onCancel={() => {
            setIsProductVariantAdd(false);
            mutate();
          }}
        />
      )}
      <Button
        type="primary"
        onClick={() => {
          setIsProductVariantAdd(true);
        }}
        style={{ marginBottom: 16 }}
      >
        Add variant
      </Button>
      <List
        bordered
        dataSource={data.variants || []}
        renderItem={item => (
          <List.Item>
            <Typography.Text>{item.variantId}.</Typography.Text> {item.color}
          </List.Item>
        )}
      />
    </>
  );
};

export default ProductVariants;
