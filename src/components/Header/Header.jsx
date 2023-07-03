import { Row, Col, Input, Select, Space, Dropdown, Button } from "antd";
import { DownOutlined, SearchOutlined, ShoppingCartOutlined , EnvironmentOutlined } from '@ant-design/icons';
import logo from "../Images/logo.png"


const items = [
    {
        key: '1',
        label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
        </a>
        ),
    },
    ];

const boxStyle = {
    color:"#72959A",
    padding: ' 0 16px',
    fontWeight: 700,
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const Header = () => {

return (
<>
    <Row style={{background:'#2C2C2C'}}>
        <Col span={12} style={{display:'flex', paddingLeft:'100px'}}>
            <img src={logo} height={55} alt="logo" />
            <Dropdown menu={{ items }} placement="bottom" arrow>
                <Button style={{color:'white', backgroundColor: 'transparent', border:'1px solid white', margin:'10px'}}>Service Categories <DownOutlined /></Button>
            </Dropdown>
        </Col>
        <Col span={12} style={{ display:'flex', justifyContent:'center', alignItems: 'center'}}>
            <div style={{  display:'flex'}}>
                <span style={boxStyle} >Home</span>
                <span style={boxStyle}>spanbout</span>
                <span style={boxStyle}>Contact</span>
                <span style={boxStyle}>Login</span>
            </div>
            <div style={{ display:'flex', justifyContent:'center', alignItems: 'center'}} >
                <Button shape="circle" icon={<ShoppingCartOutlined />} />
                <Button style={{background:'#EA8933', border:"none", marginLeft:'20px'}}>Business Login</Button>
            </div>
            
        </Col>
    </Row>
    <Row span={24} style={{ background: "#72959A", height: "46px", display:'flex',justifyContent:'center' ,alignItems: 'center', }}>

            <Input placeholder="default size" prefix={<SearchOutlined />} style={{ width:"200px", border:"none", marginLeft: '-20px', borderRadius: '180px' }} />

            <Input placeholder="default size" prefix={<EnvironmentOutlined />} style={{ width:"200px", border:"none", marginLeft: '-20px', borderRadius: '180px' }} />

            <Button style={{background:'#EA8933', border:"none", marginLeft:'20px', marginLeft: '-20px', borderRadius: '180px' }}>Business Login</Button>

    </Row>
</>
);
};

export default Header;
