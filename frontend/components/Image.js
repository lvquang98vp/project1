import React from 'react';
import { Card, Col, Row } from 'antd';

const { Meta } = Card;

const Image = () => {
    return (
        <Row gutter={16}>
            <Col span={6}>
                <Card
                    hoverable
                    style={{ width: '' }}
                    cover={<img alt="example" className="img-fluid" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title='Girl' description='abc'></Meta>
                </Card>
            </Col>
            <Col span={6}>
                <Card
                    hoverable
                    style={{ width: '' }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title='Girl' description='abc'></Meta>
                </Card>
            </Col>
            <Col span={6}>
                <a rel="noopener noreferrer" target='_blank' href='https://www.elle.vn/wp-content/uploads/2019/10/elle-viet-nam-jennie-1-1024x640.jpg'>
                    <Card
                        hoverable
                        style={{ width: '' }}
                        cover={<img alt="example" className="img-fluid" src="https://www.elle.vn/wp-content/uploads/2019/10/elle-viet-nam-jennie-1-1024x640.jpg" />}
                    >
                        <Meta title='Girl' description='abc'></Meta>
                    </Card>
                </a>
            </Col>
            <Col span={6}>
                <a rel="noopener noreferrer" target='_blank' href='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'>
                    <Card
                        hoverable
                        style={{ width: '' }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title='Girl' description='abc'></Meta>
                    </Card>
                </a>
            </Col>
            <Col span={6}>
                <Card
                    hoverable
                    style={{ width: '' }}
                    cover={<img alt="example" src="https://t.a4vn.com/2019/01/6/them-phot-chan-dong-jennie-black-pink-bi-dao-lai-facebook-cu-toa-222.jpg" />}
                >
                    <Meta title='Girl' description='abc'></Meta>
                </Card>
            </Col>
            <Col span={6}>
                <Card
                    hoverable
                    style={{ width: '' }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title='Girl' description='abc'></Meta>
                </Card>
            </Col>
            <Col span={6}>
                <Card
                    hoverable
                    style={{ width: '' }}
                    cover={<img alt="example" src="https://t.a4vn.com/2019/01/6/them-phot-chan-dong-jennie-black-pink-bi-dao-lai-facebook-cu-toa-222.jpg" />}
                >
                    <Meta title='Girl' description='abc'></Meta>
                </Card>
            </Col>
            <Col span={6}>
                <Card
                    hoverable
                    style={{ width: '' }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title='Girl' description='abc'></Meta>
                </Card>
            </Col>
        </Row>
    );
}

export default Image;