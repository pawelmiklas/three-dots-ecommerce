import { httpClient } from '@utils/httpClient';
import { Button, List, message, Popconfirm, Typography } from 'antd';
import { useProductStock } from 'hooks/api/useProductStock';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ProductStockAdd from './ProductStockAdd';

const ProductStock = () => {
  const router = useRouter();
  const productId = Number(router.query.id);
  const { data, mutate } = useProductStock(productId);
  const [isProductStockAdd, setIsProductStockAdd] = useState(false);

  return (
    <>
      {!!isProductStockAdd && (
        <ProductStockAdd
          isModalVisible={!!isProductStockAdd}
          productId={productId}
          onCancel={() => {
            setIsProductStockAdd(false);
            mutate();
          }}
        />
      )}
      <Button
        type="primary"
        onClick={() => {
          setIsProductStockAdd(true);
        }}
        style={{ marginBottom: 16 }}
      >
        Add stock
      </Button>
      <List
        bordered
        dataSource={data?.data || []}
        renderItem={item => (
          <List.Item
            actions={[
              <Popconfirm
                key="1"
                title="Sure to delete?"
                onConfirm={async () => {
                  try {
                    await httpClient.delete(`api/admin/stocks/${item.sizes[0].stockId}/remove`);
                    await mutate();
                    message.success('Stock has been deleted!');
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
              title={`Variant: ${item.color}`}
              description={item.sizes.map(item => (
                <React.Fragment key={item.stockId}>
                  <Typography.Text>Size: {item.size}</Typography.Text>
                  <br />
                  <Typography.Text> Amount: {item.amount}</Typography.Text>
                </React.Fragment>
              ))}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default ProductStock;
