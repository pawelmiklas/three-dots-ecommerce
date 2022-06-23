import classes from './SizeChart.module.scss';
import { Table, Typography } from 'antd';
import { Modal } from 'antd';
import type { ColumnsType } from 'antd/lib/table';

const SizeChart = () => {
  const { Text } = Typography;

  interface DataType {
    key: string;
    title: string;
    size1: string;
    size2: string;
    size3: string;
    size4: string;
    size5: string;
    size6: string;
    size7: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Length from heel to toe',
      dataIndex: 'title',
      key: '1',
    },
    {
      title: '22.1 cm',
      dataIndex: 'size1',
      key: '1',
    },
    {
      title: '22.5 cm',
      dataIndex: 'size2',
      key: '2',
    },
    {
      title: '22.9 cm',
      dataIndex: 'size3',
      key: '3',
    },
    {
      title: '23.3 cm',
      dataIndex: 'size4',
      key: '4',
    },
    {
      title: '23.8 cm',
      dataIndex: 'size5',
      key: '5',
    },
    {
      title: '24.2 cm',
      dataIndex: 'size6',
      key: '6',
    },
    {
      title: '24.6 cm',
      dataIndex: 'size7',
      key: '7',
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      title: 'Size in EU',
      size1: '38',
      size2: '39',
      size3: '40',
      size4: '41',
      size5: '42',
      size6: '43',
      size7: '44',
    },
  ];

  const showModal = () => {
    Modal.info({
      width: '1000px',
      title: 'Sizechart',
      content: (
        <div>
          <Table columns={columns} dataSource={data} pagination={false} />
        </div>
      ),
      onOk() {},
    });
  };

  return (
    <div className={classes.container}>
      <Text>Choose your size:</Text>
      <Text code onClick={showModal} className={classes.sizechartButton}>
        Check the sizes breakdown
      </Text>
    </div>
  );
};

export default SizeChart;
