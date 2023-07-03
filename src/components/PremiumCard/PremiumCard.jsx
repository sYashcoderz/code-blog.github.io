import { Card, Row, Col, Button } from 'antd';

export const OrdinaryCard = (props) => {
    const { Meta } = Card;
return (
    <>
    <Row>
        <Col style={{ }} >
            <Card
                hoverable
                cover={<img alt="example" style={{height:'150px', width:'100%'}} src="https://picsum.photos/200/300/?blur=2" />}
                >
                <Meta title={props?.data?.title} 
                description={<div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%' 
                }}>
                    {props?.data?.body}
                </div> } />
            </Card>
        </Col>
    </Row>
    </>
);
};
