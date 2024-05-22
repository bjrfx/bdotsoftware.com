import React, { Fragment } from 'react'
import servicesData from './servicesData'
import ModalFull from './ModalFull'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container } from 'react-bootstrap';
import SearchBar from '../Searchbar/SearchBar';
import Card from 'react-bootstrap/Card';

const AllServices = () => {
    const [key, setKey] = useState('services');
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchTermChange = (newSearchTerm) => {
        setSearchTerm(newSearchTerm);
        console.log(searchTerm)
    }
    const handleSearch = (term) => {
        console.log(term)
    }
    const filteredServices = servicesData.filter(data => {
        const searchData = [
            data.title,
            data.description,
            ...(data.content && data.content.list ? data.content.list.map(item => item.title) : []),
            ...(data.content && data.content.list ? data.content.list.map(item => item.subsection && item.subsection.description) : [])
        ].join(' ').toLowerCase();

        return searchData.includes(searchTerm.toLowerCase());
    });

    // Test-------
    // const filteredServicesSub = servicesData.filter(data => {
    //     const searchData = [
    //       ...(data.content && data.content.list ? data.content.list.map(item => item.title) : []),
    //       ...(data.content && data.content.list ? data.content.list.map(item => item.subsection && item.subsection.description) : [])
    //     ].join(' ').toLowerCase();
      
    //     return searchData.includes(searchTerm.toLowerCase());
    //   });


    return (
        <Fragment>
            <Tabs
                id='controlled-tab-example'
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="services" title="Services">
                    <div className="row"> {/* Wrap the rows here */}
                        {servicesData.map((data) => {
                            return (
                                <div className="col-md-4" key={data.id}>
                                    <div className="box">
                                        <div className="img-box d-flex flex-column align-items-center">
                                            <img src={data.image} alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                {data.id}. {data.title}
                                            </h5>
                                            <p>
                                                {data.description}
                                            </p>
                                            <ModalFull data={data} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Tab>

                <Tab eventKey="all services" title="All Services">
                    <Container>
                        <SearchBar onSearch={handleSearch} onSearchTermChange={handleSearchTermChange} />

                        {filteredServices.map((data) => {
                            return (
                                <>
                                    <Card className='mt-4'>
                                        <Card.Body>
                                            <Card.Title>{data.title}</Card.Title>
                                            {/* <Card.Text>{data.description}</Card.Text> */}
                                            {data.content && data.content.list.map((item) => {
                                        return (
                                            <Card className='mt-4'>
                                                <Card.Body>
                                                    <Card.Title>{item.title}</Card.Title>
                                                    <Card.Text>{item.subsection && item.subsection.description}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })}
                                        </Card.Body>
                                    </Card>
                                    {/* <Card>
                                        <Card.Body><Card.Text>{data.content && data.content.description}</Card.Text></Card.Body>

                                    </Card> */}
                                </>
                            )
                        })}
                    </Container>
                </Tab>
            </Tabs>
        </Fragment>
    )
}

export default AllServices
