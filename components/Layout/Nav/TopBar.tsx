import { Row, Col} from 'antd';
import Text from 'antd/lib/typography/Text';

const TopBar = () => {
    const freeShipping = 120;
    const leftSide = [
        {
            name:'[ We ship internationally ]',
            path:''
        },
        {
            name:`[ Free  Europe delivery over ${freeShipping} EUR ]`,
            path:''
        }
    ]
    const rightSide = [
        {
            name:'[ Login ]',
            path:'/login'
        },
        {
            name:`[ Register ]`,
            path:'/registration'
        }
    ]

  return (
    <>
        <Row justify="space-between">
            <Col span={16}>
                <Row justify="start">
                    <Col>
                        {leftSide.map(({name, path})=>{
                            return(
                                <span key={name}><Text code>{ name }</Text></span>
                            )
                        })}
                    </Col>
                </Row>
            </Col>
            <Col span={8}>
                <Row justify="end">
                    <Col>
                        {rightSide.map(({name, path})=>{
                            return(
                                <span key={name}><Text code>{ name }</Text></span>
                            )
                        })}
                    </Col>
                </Row>
            </Col>
        </Row>
    </>
  );
};

export default TopBar;
