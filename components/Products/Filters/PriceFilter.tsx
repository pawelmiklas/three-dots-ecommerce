import classes from './PriceFilter.module.scss';
import { Slider } from 'antd';
import Title from 'antd/lib/typography/Title';
import { useStore } from 'store';
import { filtering } from './helper';

// const prices = [
//   { label: '< 200', value: 200 },
//   { label: '< 400', value: 400 },
//   { label: '< 510', value: 510 },
// ];

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
    store.setupPriceFilter([e]);
    filtering(store, products);
  };
  return (
    <div className={classes.main}>
      <Title level={5}>Prices:</Title>
      <Slider max={500} defaultValue={30} onChange={e => onChange(e)} tooltipVisible step={20} />
      {/* <Checkbox.Group options={prices} onChange={e => onChange(e)} className={classes.group} /> */}
    </div>
  );
};

export default PriceFilter;
