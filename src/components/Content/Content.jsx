import { useContext } from "react";
import { Row, Col,  Button, Dropdown  } from "antd"
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { OrdinaryCard } from "../PremiumCard/PremiumCard";
import { BlogContext } from "../../App";

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

const Content = () => {
    const navigate = useNavigate();
    const { allBLog, setSingleBlog } = useContext(BlogContext)
    const headDropdown = ["Business", "Beauty", "Education", "Tech" ]

    const handleCardClick = (obj) => {
        setSingleBlog(obj)
        navigate(`/full-blog/${obj?.id}`)
    }

    return(
    <>
    <Row>
        <Col span={24} style={{padding: '0 140px' }}>
            <Row>
                <Col style={{padding: '15px 0' }}>
                    {headDropdown.map((item) => {
                        return (
                            <Dropdown menu={{ items }} placement="bottom" arrow>
                                <Button>{item} <DownOutlined /></Button>
                            </Dropdown>
                        )
                    })}
                </Col>
                <Col style={{padding: '15px 0' }} >
                    <Dropdown menu={{ items }} placement="bottom" arrow>
                        <Button>Sort By <DownOutlined /></Button>
                    </Dropdown>
                </Col>
            </Row>
                <h1 style={{fontSize:'20px', textAlign:"center" }}>
                    {`"Success is not final; failure is not fatal: It is the courage to continue that counts."`}</h1>
                <p style={{ textAlign:"center" }}> — Winston S. Churchill</p>
            <Row>
                <Col span={24} style={{ padding:'25px 0' }} >
                    <Row gutter={18}>
                            { allBLog && allBLog.map((item,ind) => {
                                if (item.id <= 4) {
                                return (
                                        <Col span={6} onClick={() => handleCardClick(item)} key={item?.id} >
                                            <OrdinaryCard data={item} />
                                        </Col>
                                )}
                            })}
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col span={24} style={{ display:'flex', justifyContent:'center' }}>
                    <Button style={{background:'#EA8933', border:"none", marginLeft:'20px', marginLeft: '-20px', borderRadius: '180px' }} onClick={() => { navigate('/blogs');}}>Continue Reading... <DownOutlined /></Button>
                </Col>
            </Row>
        </Col>  
    </Row>
    </>
    )
}

export default Content;