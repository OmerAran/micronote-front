import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from "./Navbar";
import Footer from "./Footer";

const NoPage = () => {
    return (
        <>
            <Navbar/>
            <section className="no-page">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={6} className="text-center">
                            <h1>404 - Page Not Found</h1>
                            <p>The page you are looking for does not exist.</p>
                            <Button variant="primary" href="/home" className="mt-3">
                                Go back to Home
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer/>
        </>

    );
};

export default NoPage;