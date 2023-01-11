import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const bannerData = [
    { title: 'Canon camera', imageUrl: "./img/8 1 (1).png" },
    { title: 'Speaker', imageUrl: "./img/5 1.png" },
    { title: 'Desktop & laptop', imageUrl: "./img/2 1.png" }
]
 const Card = (props)=>{
    return(
        <>
        <Row>
            <Col> <h2>{props.title}</h2></Col>
            <Col><img src={props.img}/></Col>
        </Row>
        </>
    )
 }

function Banner() {
    return (
        <>{ bannerData.map((data) =><Card title={data.title} img = {data.imageUrl}/>)
        }
        </>
    )
}

export default Banner;