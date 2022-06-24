import classes from './SexFilter.module.scss';
import { Checkbox } from 'antd';
import Title from 'antd/lib/typography/Title';
import { useStore } from 'store';
import { filtering } from './helper';

const sex = [
  { label: 'Mens', value: 'men' },
  { label: 'Womens', value: 'women' },
  { label: 'Kids', value: 'kids' },
];

const PriceFilter = ({ id }: { id: string }) => {
  const store = useStore();
  const products = store.products;
  // const [filteredCriteria, setFilteredCriteria] = useState<FilteringCriteria>({
  //   price: [],
  //   color: [],
  //   size: [],
  //   brand: [],
  // });

  const onChange = (e: any) => {
    // const price: number[] = [e];
    //do poprawy !!
    // setFilteredCriteria((filteredCriteria.price = [e]));
    store.setupSexFilter(e);
    filtering(store, products);
  };
  return (
    <div className={classes.main}>
      <Title level={5}>Sex:</Title>
      {/* <Slider max={500} defaultValue={30} onChange={e => onChange(e)} tooltipVisible step={20} /> */}
      <Checkbox.Group options={sex} value={store.filters.sex} onChange={e => onChange(e)} className={classes.group} />
    </div>
  );
};

export default PriceFilter;
