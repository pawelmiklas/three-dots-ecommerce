import React from "react";
import { Button, Col, Divider, Input, Layout as AntdLayout, Row, Typography } from "antd";
import Link from "next/link";
import classes from "./Footer.module.scss";

const { Footer: AntdFooter } = AntdLayout;
const { Title, Text } = Typography;

const Footer = () => (
  <AntdFooter className={classes.wrapper}>
    <Divider orientation="left">EveryStepMatter.com</Divider>
    <Row>
      <Col span={8}>
         <Divider type="vertical"/>
        <Title level={5}>About us</Title>
        <div className={classes.links}>
          <Link href="">
            <a className="transition-opacity">Who we are</a>
          </Link>
          <Link href="">
            <a className="transition-opacity">Press</a>
          </Link>
        </div>
      </Col>
      <Col span={8}>
        <Title level={5}>Here to help</Title>
        <div className={classes.links}>
          <Link href="">
            <a className="transition-opacity">Contact us</a>
          </Link>
          <Link href="">
            <a className="transition-opacity">Terms and conditions</a>
          </Link>
          <Link href="">
            <a className="transition-opacity">Privacy and cookies policy</a>
          </Link>
          <Link href="">
            <a className="transition-opacity">Shipping and delivery info</a>
          </Link>
          <Link href="">
            <a className="transition-opacity">Returns and exchanges</a>
          </Link>
          <Link href="">
            <a className="transition-opacity">Size guide</a>
          </Link>
        </div>
      </Col>
      <Col span={8}>
        <Title level={5}>Subscribe</Title>
        <Text>Subscribe to our newsletter and get discount 10% for first order.</Text>
        <Input.Group compact>
          <Input style={{ width: 'calc(100% - 200px)' }} placeholder="Put your email..." />
          <Button type="primary">Submit</Button>
        </Input.Group>
      </Col>
    </Row>
    <div className={classes.company}>
      <p>Three Dots 2022</p>
    </div>
  </AntdFooter>
);

export default Footer;
