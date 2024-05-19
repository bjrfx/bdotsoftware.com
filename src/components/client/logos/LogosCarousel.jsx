import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo2 from '../../../images/Logos/logo-2.png'
import kritunga from '../../../images/Logos/logo-kritunga.png'
import masakali from '../../../images/Logos/logo-masakali.png'
import { Typography } from '@mui/material';

const LogosCarousel = () => {
    return (
        <section style={{marginTop: '10rem'}} className="about_section layout_padding">
        <div className="container  ">
            <Typography textAlign='center' mb={3} fontWeight={100} variant='h4' component='p'>We've Helped These Brands Shape Their <br />Business & Future</Typography>
        <Carousel>
            <Carousel.Item className=" flex-column justify-content-center">
                <img
                    className="d-block w-30 mx-auto"
                    src={logo2}
                    alt="Logo 1"
                />
            </Carousel.Item>
            <Carousel.Item className=" flex-column justify-content-center">
                <img
                    style={{width: "50%"}}
                    className="d-block w-30 mx-auto"
                    src={kritunga}
                    alt="Logo 2"
                />
            </Carousel.Item>
            <Carousel.Item className=" flex-column justify-content-center">
                <img
                    style={{width: "50%"}}
                    className="d-block w-30 mx-auto"
                    src={logo2}
                    alt="Logo 3"
                />
            </Carousel.Item>
            <Carousel.Item className=" flex-column justify-content-center">
                <img
                    style={{width: "50%"}}
                    className="d-block w-30 mx-auto"
                    src={masakali}
                    alt="Logo 3"
                />
            </Carousel.Item>
        </Carousel>
        </div>
        </section>
    );
};

export default LogosCarousel;