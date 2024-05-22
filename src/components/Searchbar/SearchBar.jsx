import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <Form inline onSubmit={handleSearchSubmit} className="d-flex justify-content-center">
            <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                style={{ width: "15rem" }} // Adjust width as needed
                value={searchTerm}
                onChange={handleSearchChange}
            />
            {/* <Button variant="outline-success" type="submit">Search</Button> */}
        </Form>
    );
};

export default SearchBar;
