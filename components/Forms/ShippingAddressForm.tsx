import React from 'react';
import { Form, Input, Button } from 'antd';
import { ShippingAddress } from 'pages/cart';

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 8 },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const ShippingAddressForm = ({
  shippingDetailsFilled,
  setShippingAddress,
  address,
  setCurrent,
}: {
  shippingDetailsFilled: (arg: boolean) => void;
  setShippingAddress: (arg: ShippingAddress) => void;
  address: ShippingAddress;
  setCurrent: (arg: number) => void;
}) => {
  const onFinish = (values: ShippingAddress) => {
    console.log('values', values);
    setShippingAddress(values);
    shippingDetailsFilled(true);
    setCurrent(2);
  };
  console.log('AADRESS', address);
  // const shippingAddress: ShippingAddress = {
  //   firstname: address?.firstname,
  //   lastname: address?.lastname,
  //   addressline1: address?.addressline1,
  //   addressline2: address?.addressline2,
  //   city: address?.city,
  //   postcode: address?.postcode,
  //   email: address?.email,
  //   phone: address?.phone,
  // };
  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['firstname']} label="First name" rules={[{ required: true }]}>
        <Input value={'misiu'} defaultValue={address?.firstname || ''} />
      </Form.Item>
      <Form.Item name={['lastname']} label="Last name" rules={[{ required: true }]}>
        <Input defaultValue={address?.lastname || ''} />
      </Form.Item>
      <Form.Item name={['addressline1']} label="Address line 1" rules={[{ required: true }]}>
        <Input defaultValue={address?.addressline1 || ''} />
      </Form.Item>
      <Form.Item name={['addressline2']} label="Address line 2" rules={[{ required: false }]}>
        <Input defaultValue={address?.addressline2 || ''} />
      </Form.Item>
      <Form.Item name={['city']} label="City" rules={[{ required: true }]}>
        <Input defaultValue={address?.city || ''} />
      </Form.Item>
      <Form.Item name={['postcode']} label="Postcode" rules={[{ required: true }]}>
        <Input defaultValue={address?.postcode || ''} />
      </Form.Item>
      <Form.Item name={['email']} label="Email" rules={[{ type: 'email', required: true }]}>
        <Input defaultValue={address?.email} />
      </Form.Item>
      <Form.Item
        name={['phone']}
        label="Phone"
        rules={[
          {
            pattern: /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/,
          },
        ]}
      >
        <Input defaultValue={address?.phone} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ShippingAddressForm;
