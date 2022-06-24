import React, { useState } from 'react';
import Layout from '@components/Layout/Layout';
import { ICart, useStore } from 'store';
import classes from '../pages/Cart.module.scss';
import Image from 'next/image';
import { Divider, Button, Steps, Modal } from 'antd';
import { MinusOutlined, PlusOutlined, SmileOutlined } from '@ant-design/icons';
import ShippingAddressForm from '@components/Forms/ShippingAddressForm';
import { Product, shoesColors } from 'mock/products';
import PaymentMethod from '@components/Cart/PaymentMethod';

export interface ShippingAddress {
  firstname: string;
  lastname: string;
  addressline1: string;
  addressline2: string;
  city: string;
  postcode: string;
  email: string;
  phone: string;
}

interface ModalData {
  type: string;
  product: Product | null | undefined;
}

interface ItemData {
  id: string;
  index: number | null;
}

const Cart = () => {
  const store = useStore();
  const { Step } = Steps;
  const [current, setCurrent] = useState<number>(0);
  const [shippingDetailsFilled, setShippingDetailsFilled] = useState<boolean>(false);
  // eslint-disable-next-line no-unused-vars
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>();

  const onChange = (value: number) => {
    setCurrent(value);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<ModalData>({ type: '', product: null });
  const [itemData, setItemData] = useState<ItemData>({ id: '', index: null });

  const showModal = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target instanceof Element) {
      const ex = e.target.attributes;
      const key: any = Object.keys(ex).find(k => ex[k as unknown as number].name === 'product-key');
      if (key) {
        const value = e.target.attributes[key].value;
        const product = store.products.find(p => p.key === value);
        setModalData({ type: e.target.id, product });
      }
    }
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const setSize = (p: ICart, size: number) => {
    p.variants[itemData.index!].size = size;
  };

  const setColor = (p: ICart, color: shoesColors) => {
    p.variants[itemData.index!].color = color;
  };

  const RenderModal = () => {
    switch (modalData.type) {
      case 'size':
        const p = store.cart.find(p => p.id === itemData.id);
        return (
          <div className={classes.modalSize}>
            {modalData.product?.sizes.map(item => {
              if (item.onstock > 0) {
                return (
                  <div className={classes.modalSize_element} key={item.size} onClick={() => setSize(p!, item.size)}>
                    {item.size}
                  </div>
                );
              }
            })}
          </div>
        );
      case 'color':
        console.log(itemData.id);
        const a = store.cart.find(p => p.id === itemData.id);
        console.log('A', a);
        return (
          <div className={classes.modalColor}>
            {modalData.product?.colors.map(item => {
              return (
                <div
                  className={classes.modalColor_element}
                  style={{ backgroundColor: `${item}` }}
                  key={item}
                  onClick={() => setColor(a!, item)}
                />
              );
            })}
          </div>
        );
      default:
        return <div>Nothing to show</div>;
    }
  };

  const RenderSteps = ({ current }: { current: number }) => {
    switch (current) {
      case 0:
        return (
          <>
            <div>
              {store.cart &&
                store.cart.map(item => {
                  return (
                    <div key={item.key}>
                      <div className={classes.main}>
                        <div>
                          <Image src={item.image} width={180} height={140} />
                        </div>
                        <div>{item.name}</div>
                        <div>
                          {item.variants.map((i, index) => {
                            return (
                              <div
                                key={index}
                                style={{ backgroundColor: `${i.color}` }}
                                className={classes.color}
                                onClick={e => {
                                  setItemData({ id: item.id, index });
                                  showModal(e);
                                }}
                                product-key={item.key}
                                id="color"
                              ></div>
                            );
                          })}
                        </div>
                        <div>
                          {item.variants.map((i, index) => {
                            return (
                              <div
                                className={classes.size}
                                id="size"
                                key={index}
                                product-key={item.key}
                                onClick={e => {
                                  setItemData({ id: item.id, index });
                                  showModal(e);
                                }}
                              >
                                {i.size}
                              </div>
                            );
                          })}
                        </div>
                        <div className={classes.quantity}>
                          <Button
                            type="dashed"
                            icon={<MinusOutlined />}
                            size={'small'}
                            disabled={item.quantity ? item.quantity <= 1 : true}
                            onClick={() => store.decrQuantity(item.id)}
                          />
                          {item.quantity}
                          <Button
                            type="dashed"
                            icon={<PlusOutlined />}
                            size={'small'}
                            onClick={() => store.incrQuantity(item.id)}
                          />
                        </div>
                        <div>{(item.price * (item.quantity || 1)).toFixed(1)} EUR</div>
                        <Button type="primary" onClick={() => store.removeFromCart(item.id)}>
                          Remove item
                        </Button>
                      </div>
                      <Divider />
                    </div>
                  );
                })}
              <Modal
                title={`Choose ${modalData.type}`}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <RenderModal />
              </Modal>
              <Button disabled={store.cart.length <= 0} type="primary" onClick={() => setCurrent(1)}>
                Procceed with the order
              </Button>
            </div>
          </>
        );
      case 1:
        return (
          <div className={classes.shipping}>
            <ShippingAddressForm
              shippingDetailsFilled={setShippingDetailsFilled}
              setShippingAddress={setShippingAddress}
              address={shippingAddress!}
              setCurrent={setCurrent}
              // shippingAddress={() => shippingAddress}
            />
          </div>
        );
      case 2:
        return (
          <div className={classes.paymentMethods}>
            <PaymentMethod setCurrent={setCurrent} />
          </div>
        );
      case 3:
        return (
          <div className={classes.confirmation}>
            <span>
              Order Success <SmileOutlined />
            </span>
            <span> Order number: {Date.now()}</span>
          </div>
        );

      default:
        return <></>;
    }
  };
  return (
    <Layout>
      <Steps type="navigation" current={current} onChange={onChange} className="site-navigation-steps">
        <Step title="Check your cart" />
        <Step disabled={store.cart.length === 0} title="Shipping address" />
        <Step disabled={!shippingDetailsFilled} title="Make a payment" />
        <Step disabled title="Confirmation" />
      </Steps>
      <RenderSteps current={current} />
    </Layout>
  );
};

export default Cart;
