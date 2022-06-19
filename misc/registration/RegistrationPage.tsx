import { Card, Col, Row, Typography, Form, Input, Select, Checkbox, Button, message, InputNumber } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';

const { Title } = Typography;
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
  },
};

const RegistrationPage = () => {
  const router = useRouter();
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      await axios.post('api/public/auth/register', {
        email: values.email,
        username: values.nickname,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: `0${values.phone}`,
        zipCode: `${String(values.zipCode).substring(0, 2)}-${String(values.zipCode).substring(2, 5)}`,
        city: values.city,
        street: values.street,
        apartmentNumber: values.apartmentNumber,
        buildingNumber: values.buildingNumber,
      });
      message.success('Registration went successfully!');
      form.resetFields();
      router.push('/login');
    } catch {
      message.error('Something went wrong!');
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="48">+48</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Row justify="center" style={{ marginTop: 32 }}>
      <Col xs={24} md={18} lg={14} xl={10}>
        <Card>
          <Title level={2} style={{ marginBottom: 24 }}>
            Registration
          </Title>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            initialValues={{
              prefix: '48',
            }}
            layout="vertical"
            onFinish={onFinish}
            validateTrigger="onBlur"
          >
            <Form.Item
              name="firstName"
              label="First name"
              rules={[
                {
                  required: true,
                  message: 'Please input your first name!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[
                {
                  required: true,
                  message: 'Please input your last name!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirm password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="nickname"
              label="Nickname"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone number"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
              name="city"
              label="City"
              rules={[
                {
                  required: true,
                  message: 'Please input your City!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="zipCode"
              label="Zip code"
              rules={[
                {
                  required: true,
                  message: 'Please input your Zip code!',
                },
              ]}
            >
              <InputNumber style={{ width: '100%' }} min={10000} max={99999} />
            </Form.Item>
            <Form.Item
              name="street"
              label="Street"
              rules={[
                {
                  required: true,
                  message: 'Please input your Street!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="buildingNumber"
              label="Building number"
              rules={[
                {
                  required: true,
                  message: 'Please input your building number!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="apartmentNumber"
              label="Apartment number"
              rules={[
                {
                  required: true,
                  message: 'Please input your apartment number!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout} style={{ marginBottom: 0 }}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default RegistrationPage;
