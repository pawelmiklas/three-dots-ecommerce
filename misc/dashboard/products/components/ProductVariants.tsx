import { httpClient } from '@utils/httpClient';
import { Button, List, message, Popconfirm, Typography } from 'antd';
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
          <List.Item
            actions={[
              <Popconfirm
                key="1"
                title="Sure to delete?"
                onConfirm={async () => {
                  try {
                    await httpClient.delete(`api/admin/products/${productId}/remove-variant/${item.variantId}`);
                    await mutate();
                    message.success('Product has been deleted!');
                  } catch (error) {
                    message.error('Something went wrong!');
                  }
                }}
              >
                <Button danger size="small">
                  Delete
                </Button>
              </Popconfirm>,
            ]}
          >
            <Typography.Text>{item.variantId}.</Typography.Text> {item.color}
          </List.Item>
        )}
      />
    </>
  );
};

export default ProductVariants;
