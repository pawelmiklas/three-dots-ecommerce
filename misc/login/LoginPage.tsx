import { Card, Col, Row, Typography, Form, Input, Button } from "antd";
import { useRouter } from "next/router";
import React from "react";

const { Title } = Typography;

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
    },
  },
};

const LoginPage = () => {
  const router = useRouter();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    form.resetFields();
    router.push("/dashboard/products");
  };

  return (
    <Row justify="center">
      <Col xs={24} md={18} lg={14} xl={10}>
        <Card>
          <Title level={2} style={{ marginBottom: 24 }}>
            Login
          </Title>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            initialValues={{
              prefix: "48",
            }}
            layout="vertical"
            onFinish={onFinish}
            validateTrigger="onBlur"
          >
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
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
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...tailFormItemLayout} style={{ marginBottom: 0 }}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginPage;
