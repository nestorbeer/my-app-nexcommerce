import { Col, Container, Image, Row } from "react-bootstrap";
//https://www.eldon.com.ar/media/wysiwyg/banner2.jpg
function Home(props)
{
    return(
        <Container fluid>
            <Row md={12} >
                <Col sd={12} md={12} >
                    <Image alt="" src="https://www.eldon.com.ar/media/wysiwyg/ss22-banner-slider.jpg" fluid ></Image>    
                    
                </Col>
            </Row>
        </Container>
    )   
}
export default Home;