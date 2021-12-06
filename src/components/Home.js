import { Card } from "react-bootstrap";
function Home(props)
{
    return(
            <>
                <Card className="bg-light text-dark">
                    <Card.Img src="https://www.eldon.com.ar/media/wysiwyg/ss22-banner-slider.jpg" alt="Card image"/> 
                </Card>
            </>
    )   
}
export default Home;