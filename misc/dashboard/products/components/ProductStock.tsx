import { httpClient } from '@utils/httpClient';
import { Button, Col, List, message, Popconfirm, Row, Statistic, Typography } from 'antd';
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
          <List.Item>
            <List.Item.Meta
              title={<Typography.Title level={3}>{item.color}</Typography.Title>}
              description={item.sizes.map(item => (
                <React.Fragment key={item.stockId}>
                  <Row gutter={16}>
                    <Col span={1}>
                      <Statistic title="Size" value={item.size} />
                    </Col>
                    <Col span={21}>
                      <Statistic title="Amount" value={item.amount} />
                    </Col>
                    <Col span={1}>
                      <Popconfirm
                        key="1"
                        title="Sure to delete?"
                        onConfirm={async () => {
                          try {
                            // TODO not working delete for multiple stocks
                            await httpClient.delete(`api/admin/stocks/${item.stockId}/remove`);
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
                      </Popconfirm>
                    </Col>
                  </Row>
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
