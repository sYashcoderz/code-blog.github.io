import { Row, Col,  Button, Dropdown  } from "antd"
import { useNavigate } from 'react-router-dom';
import Header from "../Header/Header"
import { OrdinaryCard } from "../PremiumCard/PremiumCard";
import { useContext } from "react";
import { BlogContext } from "../../App";

const Blog = () => {
    const navigate = useNavigate();
    const { allBLog, setSingleBlog } = useContext(BlogContext)

    const handleCardClick = (obj) => {
        console.log("clicked", obj)
        setSingleBlog(obj)
        navigate(`/full-blog/${obj?.id}`)
    }

return (
    <>
        <Header />
        <Row>
                <Col span={24}  style={{padding:'24px',}}>
                    <Row gutter={16}> 
                            { allBLog && allBLog.map((item,ind) => {
                                return (
                                        <Col span={6} onClick={() => handleCardClick(item)} key={item?.id}>
                                            <OrdinaryCard data={item}  />
                                        </Col>
                                )
                            })}
                    </Row>
                </Col>
            </Row>
    </>
    )
}

export default Blog;