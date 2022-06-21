import { httpClient } from '@utils/httpClient';
import { Button, List, message, Popconfirm, Typography, Image } from 'antd';
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
        renderItem={item => {
          const imageUrls = item?.imageUrl ? JSON.parse(item?.imageUrl) : [];

          return (
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
              <List.Item.Meta
                title={
                  <Typography.Title level={3}>
                    {item.variantId}. {item.color}
                  </Typography.Title>
                }
                description={
                  <Image.PreviewGroup>
                    {(imageUrls || []).map((item: string) => (
                      <Image key={item} width={200} src={item} />
                    ))}
                  </Image.PreviewGroup>
                }
              />
            </List.Item>
          );
        }}
      />
    </>
  );
};

export default ProductVariants;
