import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import health from "../../images/healthifi.jpg"
import codeup from "../../images/codeupscale.jpg"
import coachvan from "../../images/coachvantage.jpg"
import auto from "../../images/autoupscale.jpg"
import driver from '../../images/driverfly.jpg'
import findcode from '../../images/findacode.jpg'

export function Gallery() {
    return (
        <Container className='w-75'>
            <Row>
                <Col lg={4} md={12} className='mb-4'>
                    <a href='https://codeupscale.com/' className='p-5'>
                        <div class="card text-dark mb-2">
                            <img src={codeup} alt=""  style={{ height: '200px', filter:'blur(2.5px)', padding:'20px'}} />
                            <div class="card-img-overlay">
                                <h4 style={{ textdecoration: 'none', cursor: 'pointer' }} className="p-md-5 p-3 m-2 d-flex justify-content-center align-items-center text-center position-relative fs-3 text-" >CodeUpscale</h4>
                            </div>
                        </div>
                    </a>
                    <a href='https://healthifi.app/' className='p-5'>
                        <div class="card text-dark mb-2">
                            <img src={health} alt="" style={{ height: '450px', filter:'blur(2.5px)', padding:'20px'}} />
                            <div class="card-img-overlay">
                                <h4 style={{ textdecoration: 'none', cursor: 'pointer' }} className="p-md-5 p-3 m-2 d-flex justify-content-center align-items-center text-center position-relative fs-3 text-" >Healthifi</h4>
                            </div>
                        </div>
                    </a>
                </Col>
                <Col lg={4} md={12} className='mb-4'>
                    <a href='https://www.coachvantage.com/' className='p-5'>
                        <div class="card text-dark mb-2 ">
                            <img src={coachvan} alt="" style={{ height: '450px', filter:'blur(2.5px)', padding:'20px'}} />
                            <div class="card-img-overlay">
                                <h4 style={{ textdecoration: 'none', cursor: 'pointer' }} className="p-md-5 p-3 m-2 d-flex justify-content-center align-items-center text-center position-relative fs-3 text-" >Coachvantage</h4>
                            </div>
                        </div>
                    </a>
                    <a href='https://www.autoupscale.com/' className='p-5'>
                        <div class="card text-dark  mb-2">
                            <img src={auto} alt="" style={{ height: '200px', filter:'blur(2.5px)', padding:'20px'}}  />
                            <div class="card-img-overlay">
                                <h4 style={{ textdecoration: 'none', cursor: 'pointer' }} className="p-md-5 p-3 m-2 d-flex justify-content-center align-items-center text-center position-relative fs-3 text-" >AutoUpscale</h4>
                            </div>
                        </div>
                    </a>
                </Col>
                <Col lg={4} md={12} className='mb-2'>
                    {/* Image 2 */}
                    <a href='https://driverfly.co/' className='p-5'>
                        <div class="card text-dark mb-2 ">
                            <img src={driver} alt="" style={{ height: '200px', filter:'blur(2.5px)', padding:'20px'}} />
                            <div class="card-img-overlay">
                                <h4 style={{ textdecoration: 'none', cursor: 'pointer' }} className="p-md-5 p-3 m-2 d-flex justify-content-center align-items-center text-center position-relative fs-3 text-" >DriverFly</h4>
                            </div>
                        </div>
                    </a>
                    <a href='https://www.findacode.com/' className='p-5'>
                        <div class="card text-dark mb-2 ">
                            <img src={findcode} alt="" style={{ height: '450px', filter:'blur(2.5px)', padding:'20px'}} />
                            <div class="card-img-overlay">
                                <h4 style={{ textdecoration: 'none', cursor: 'pointer' }} className="p-md-5 p-3 m-2 d-flex justify-content-center align-items-center text-center position-relative fs-3 text-" >FindACode</h4>
                            </div>
                        </div>
                    </a>
                </Col>
            </Row >
        </Container >
    );
};
