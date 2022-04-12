import React from 'react';
import { Col, Layout as AntdLayout, Row, Typography } from 'antd';
import Link from 'next/link';
import classes from './Footer.module.scss';

const { Footer: AntdFooter } = AntdLayout;
const { Title } = Typography;

const Footer = () => (
  <AntdFooter className={classes.wrapper}>
    <Row>
      <Col span={8}>
        <Title level={3}>About us</Title>
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
        <Title level={3}>Here to help</Title>
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
        </div>
      </Col>
      <Col span={8}>
        <Title level={3}>Shopping with us</Title>
        <div className={classes.links}>
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
    </Row>
    <div className={classes.company}>
      <p>Three Dots 2022</p>
    </div>
  </AntdFooter>
);

export default Footer;
