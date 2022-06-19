import { Cookies } from '@constants/cookies';
import { UserRoles } from '@constants/userRoles';
import { Card, Col, Row, Typography, Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { setCookies } from 'cookies-next';
import jwtDecode from 'jwt-decode';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const { Title } = Typography;

const formItemLayout = {
  labelCol: { xs: { span: 24 } },
  wrapperCol: { xs: { span: 24 } },
};

const tailFormItemLayout = { wrapperCol: { xs: { span: 24 } } };

const LoginPage = () => {
  const router = useRouter();
  const [form] = Form.useForm();

  const onFinish = async ({ nickname, password }: any) => {
    try {
      const response = await axios.post('api/public/auth/login', { username: nickname, password });
      const decodedToken: any = jwtDecode(response.data.token);

      setCookies(Cookies.THREE_DOTS_AUTH_TOKEN, response.data.token, {
        path: '/',
        sameSite: 'strict',
        maxAge: 60 * 6 * 24,
      });
      form.resetFields();
      router.push(decodedToken?.role === UserRoles.ROLE_ADMIN ? '/dashboard/products' : '/');
    } catch (error) {
      message.error('Something went wrong!');
    }
  };

  return (
    <Row justify="center" style={{ marginTop: 32 }}>
      <Col xs={24} md={18} lg={14} xl={10}>
        <Card>
          <Title level={2} style={{ marginBottom: 24 }}>
            Login
          </Title>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            layout="vertical"
            onFinish={onFinish}
            validateTrigger="onBlur"
          >
            <Form.Item
              name="nickname"
              label="Nickname"
              rules={[
                {
                  required: true,
                  message: 'Please input your nickname!',
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
            <Form.Item {...tailFormItemLayout} style={{ marginBottom: 0 }}>
              <Button type="primary" htmlType="submit" style={{ marginRight: 8 }}>
                Login
              </Button>
              Or <Link href="/registration">register now!</Link>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginPage;
