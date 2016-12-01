import React from 'react'
import {Row,Col,Image} from 'react-bootstrap';
import styles from '../../css/book.css';
import imgurl from '../../img/123.jpg';
// 请求资源，要使用先请求
const Book = (props) => {
    return (
      
     <Row className={styles.book}>
     <Col md={4} xs={12}><Image src={props.image} responsive></Image></Col>
     <Col md={8} xs={12}>
     <h3>{props.title}</h3>
     <p>{props.summary}</p>
     </Col>
     </Row>
    
    )
}

export default Book