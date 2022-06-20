// import { httpClient } from '@utils/httpClient';
import { Button, List, message, Popconfirm, Rate, Typography } from 'antd';
import { useProductReviews } from 'hooks/api/useProductReviews';
import { useRouter } from 'next/router';

const ProductReviews = () => {
  const router = useRouter();
  const productId = Number(router.query.id);
  const { data, mutate } = useProductReviews(productId);

  return (
    <>
      <List
        bordered
        dataSource={data || []}
        renderItem={item => (
          <List.Item
            actions={[
              <Popconfirm
                key="1"
                title="Sure to delete?"
                onConfirm={async () => {
                  try {
                    // TODO
                    // await httpClient.delete(`api/admin/products/${productId}/reviews/delete/${item.reviewId}`);
                    await mutate();
                    message.success('Review has been deleted!');
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
              title={<Rate defaultValue={item.rating} count={4} disabled />}
              description={<Typography.Text>{item.content}</Typography.Text>}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default ProductReviews;
