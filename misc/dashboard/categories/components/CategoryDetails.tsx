import { ArrowDownOutlined } from '@ant-design/icons';
import { Button, Descriptions, List, Statistic, Typography } from 'antd';
import { useCategoriesProduct } from 'hooks/api/useCategoriesProduct';
import { useRouter } from 'next/router';
import NumberFormat from 'react-number-format';
import classes from '../../products/Products.module.scss';

const CategoryDetails = () => {
  const router = useRouter();
  const { data } = useCategoriesProduct(Number(router.query.id));

  return (
    <List
      bordered
      dataSource={data || []}
      renderItem={item => (
        <List.Item
          actions={[
            <Button size="small" key="1" onClick={() => router.push(`/dashboard/products/${item.productId}`)}>
              Details
            </Button>,
          ]}
        >
          <List.Item.Meta
            title={
              <Typography.Title level={3}>
                {item.productId}. {item.name}
              </Typography.Title>
            }
            description={
              <Descriptions bordered>
                <Descriptions.Item label="Id" span={3}>
                  {item?.productId}
                </Descriptions.Item>
                <Descriptions.Item label="Name" span={3}>
                  {item?.name}
                </Descriptions.Item>
                <Descriptions.Item label="Description" span={3}>
                  {item?.description}
                </Descriptions.Item>
                <Descriptions.Item label="Price">
                  <NumberFormat value={item?.price} displayType="text" thousandSeparator prefix="$" />
                </Descriptions.Item>
                <Descriptions.Item label="Discount" span={2}>
                  <Statistic
                    value={item?.discount > 0 ? item?.discount : '-'}
                    precision={2}
                    valueStyle={{ color: item?.discount > 0 ? '#3f8600' : '' }}
                    prefix={item?.discount > 0 ? <ArrowDownOutlined /> : null}
                    suffix={item?.discount > 0 ? '$' : undefined}
                    className={classes.statistics}
                  />
                </Descriptions.Item>
              </Descriptions>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default CategoryDetails;
