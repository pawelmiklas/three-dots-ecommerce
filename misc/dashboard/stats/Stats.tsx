import DashboardLayout from '@components/DashboardLayout/DashboardLayout';
import { Card, Col, Row, Statistic, Typography } from 'antd';
import { useCategories } from 'hooks/api/useCategories';
import { useProducts } from 'hooks/api/useProducts';
import { useSizes } from 'hooks/api/useSizes';
import { useUsers } from 'hooks/api/useUsers';
import { ResponsiveContainer, Treemap } from 'recharts';
import _groupBy from 'lodash/groupBy';

const COLORS = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

const CustomizedContent = ({ root, depth, x, y, width, height, index, colors, name, value }: any) => (
  <g>
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      style={{
        fill: depth < 2 ? colors[Math.floor((index / root.children.length) * 6)] : 'none',
        stroke: '#fff',
        strokeWidth: 2 / (depth + 1e-10),
        strokeOpacity: 1 / (depth + 1e-10),
      }}
    />
    {depth === 1 ? (
      <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={14}>
        {name} - {value}$
      </text>
    ) : null}
  </g>
);

const Sizes = () => {
  const { data: users } = useUsers();
  const { data: sizes } = useSizes();
  const { data: categories } = useCategories();
  const { data: products } = useProducts();

  const productsByCategory = _groupBy(products, 'categoryId');
  const data = Object.entries(productsByCategory).map(([key, items]) => ({
    name: categories?.find(item => item.id === Number(key))?.name,
    children: items.map(item => ({ name: item.name, size: item.price - item.discount })),
  }));

  return (
    <DashboardLayout>
      <Card>
        <Row gutter={[64, 64]}>
          <Col span={6} style={{ display: 'flex', justifyContent: 'center' }}>
            <Statistic title="Active Users" value={users?.length} />
          </Col>
          <Col span={6} style={{ display: 'flex', justifyContent: 'center' }}>
            <Statistic title="Number of sizes" value={sizes?.length} />
          </Col>
          <Col span={6} style={{ display: 'flex', justifyContent: 'center' }}>
            <Statistic title="Number of categories" value={categories?.length} />
          </Col>
          <Col span={6} style={{ display: 'flex', justifyContent: 'center' }}>
            <Statistic title="Number of products" value={products?.length} />
          </Col>
        </Row>
        <Row style={{ height: 500, marginTop: 24, marginBottom: 48 }}>
          <Typography.Paragraph style={{ marginBottom: 16, fontSize: 18 }}>
            Total worth of shoes within category
          </Typography.Paragraph>
          <ResponsiveContainer width="100%" height="100%">
            <Treemap
              width={400}
              height={200}
              data={data}
              dataKey="size"
              stroke="#fff"
              fill="#8884d8"
              content={<CustomizedContent colors={COLORS} />}
            />
          </ResponsiveContainer>
        </Row>
      </Card>
    </DashboardLayout>
  );
};

export default Sizes;
