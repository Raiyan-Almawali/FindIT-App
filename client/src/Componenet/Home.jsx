import { Container, Row, Col, Card, CardBody, CardHeader, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import Header from "./Header";
import Footer from "./Footer";


const Home = () => {
    return (
        <>
        <Container>

                <Row>
                    <Col><Header/></Col>
                    
                </Row> 
                <Row style={{ height: '400px' }}>
                    <Col >
                    <header className="mt-5 mb-5">
                        <h1 className="text-start" style={{color: "#023e8a"}}>Curating World-Class Creative Talent.</h1>
                        <p className="text-start">The premier architectural exchange for editors, designers, and high-end creators. Connect with authority.</p>
                    </header>
                    </Col>
                </Row> 
               
               
                <Row className="mb-10">

                    <h6 className="text-start">Featured Opportunitys</h6>  
                    <h7 className="font-monospace, text-end mb-3">Exeplore all listings</h7>
                    <Col>
                    

                        <Card>
                            <CardBody>
                                <CardHeader>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                </CardHeader>
                                <CardText>
                                    <h7 className="float-start">Remote,UK</h7>
                                    <h7>3 Weeks</h7>
                                </CardText>
                                <Button>Apply</Button>
                            </CardBody>
                        </Card>
                        
                    </Col>
                    <Col>

                        <Card>
                            <CardBody>
                                <CardHeader>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                </CardHeader>
                                <CardText>Card text</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                        
                    </Col>
                    <Col>

                        <Card>
                            <CardBody>
                                <CardHeader>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                </CardHeader>
                                <CardText>Card text</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                        
                    </Col>
                </Row> 

               
                 <Row >
                    <Col>


                    <Card>
                            <CardBody>
                                <CardHeader>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                </CardHeader>
                                <CardText>Card text</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>  
                <Row><Footer/></Row> 

        </Container>
        </>
    );
};

export default Home;