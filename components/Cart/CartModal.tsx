import { ShoppingOutlined } from '@ant-design/icons';
import { Button, message, Modal } from 'antd';
import { products, shoesColors } from 'mock/products';
import React, { useState } from 'react';
import { useStore } from 'store';
import classes from './CartModal.module.scss';

const CartModal = ({ id }: { id: string }) => {
  const store = useStore();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState<shoesColors>();

  const product = products.find(item => item.key === id);
  const colors = product?.colors;
  const sizes = product?.sizes.filter(s => s.onstock > 0);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (selectedSize && selectedColor && product) {
      store.addToCart({
        ...product,
        variants: [
          {
            size: selectedSize,
            color: selectedColor,
          },
        ],
        quantity: 1,
        id: Date.now().toString(),
      });
      setSelectedColor(undefined);
      setSelectedSize(undefined);
      message.success('Product Added');
    } else {
      message.error('Product Not Added - missing variants');
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button size="middle" type="primary" className={classes.button} icon={<ShoppingOutlined />} onClick={showModal} />
      <Modal title="Choose size and the colour" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className={classes.modalColor}>
          {colors &&
            colors.map(item => {
              return (
                <button
                  className={selectedColor === item ? classes.modalColor_element_active : classes.modalColor_element}
                  style={{ backgroundColor: `${item}` }}
                  key={item}
                  onClick={() => {
                    setSelectedColor(item);
                  }}
                />
              );
            })}
        </div>

        <div className={classes.modalSize}>
          {sizes &&
            sizes.map(item => {
              if (item.onstock > 0) {
                return (
                  <button
                    className={
                      selectedSize === item.size.toString()
                        ? classes.modalSize_element_active
                        : classes.modalSize_element
                    }
                    key={item.size}
                    //@ts-ignore
                    onClick={e => setSelectedSize(e.target.innerHTML)}
                  >
                    {item.size}
                  </button>
                );
              }
            })}
        </div>
      </Modal>
    </>
  );
};

export default CartModal;
