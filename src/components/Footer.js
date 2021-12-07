import { Col, Container, Image, Row } from "react-bootstrap";

function Footer(){
    return(
        <>
        <Container>
            <Row>
                <Col style={{textAlign:'right'}}>
                    <p><b>Seguinos en nuestras redes sociales:</b></p>
                </Col>
                <Col>
                    <Image style={{height:'2rem'}} src="https://www.eldon.com.ar/media/wysiwyg/iconos/instagramlogo.png" alt=""/>{' '}
                    <Image style={{height:'2rem'}} src="https://www.eldon.com.ar/media/wysiwyg/iconos/facebooklogo.png" alt=""/>{' '}    
                    <Image style={{height:'2rem'}} src="https://www.eldon.com.ar/media/wysiwyg/iconos/youtube.png" alt=""/>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Footer;