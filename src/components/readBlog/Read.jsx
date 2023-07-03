import Header from "../Header/Header"
import { BlogContext } from "../../App";
import { useEffect, useState, useContext } from "react";
import { fetchAllCommentsByPostId, fetchAuthorByUserId } from "../../Services/blog.service";
import { Row, Col, Button } from "antd";


const Blog = () => {
    const { singleBlog, setAddFav, addFav } = useContext(BlogContext)
    const [comments, setComments] = useState()
    const [authorData, setAuthorData] = useState()

    const fetchComments = async () => {
        const response = await fetchAllCommentsByPostId(singleBlog?.id)
        setComments(response)
    }
    
    const fetchAuthor = async () => {
        const response = await fetchAuthorByUserId(singleBlog?.userId)
        setAuthorData(response?.[0])
    }

    useEffect(() => {
        fetchComments()
        fetchAuthor()
    },[])

    const handleAddBlog = async (id) => {
        if(!addFav.includes(id)){
            setAddFav([...addFav, id])
        } else {
            const newData = addFav.filter((item) => item !== id);
            setAddFav(newData);
        }
    }

return (
    <>
        <Header />
        <Row>
            <Col span={24} style={{padding: '25px'}}>
                <Row>
                    <Col span={24} style={{textAlign:'center'}} >
                        <h1>{singleBlog?.title}</h1>
                        <p style={{marginTop: '-5px'}}> {authorData?.address?.street + ', ' + authorData?.address?.city}</p>
                        <Button onClick={() => handleAddBlog(singleBlog?.id)}> { (!addFav.includes(singleBlog?.id)) ? "Add to Favorite" : "Remove Favorite" }</Button>
                    </Col>
                </Row>
                <h2>Author : {authorData?.name}</h2>
                <Row>
                    <Col>
                        <p style={{fontSize: '18px', color:"#8f8686"}} >{singleBlog.body}</p>
                    </Col>
                </Row>
            </Col>
            <Col span={24} style={{padding: '25px', background: '#f0f0f0'}} >
                <h4 style={{fontSize: '20px'}}>{`${comments?.length} Comments`}</h4>
                {comments && comments.map((item, index) => {
                    return (
                        <>
                            <Row>
                                <Col>
                                    <h5>{item?.name}</h5>
                                    <p>{item?.email}</p>
                                    <span>{item?.body}</span>
                                    <hr/>
                                </Col>
                            </Row>
                        </>
                    )
                })}
            </Col>
        </Row>
    </>
    )
}

export default Blog;