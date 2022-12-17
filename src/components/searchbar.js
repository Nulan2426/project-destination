import React from 'react';
import styled from 'styled-components';

// Define a SearchBar component that displays a search input and a button
const SearchBar = () => {
    return (
        <Container>
            <Input type="text" placeholder="Search destinations" />
            <Button>Search</Button>
        </Container>
    );
};

// Define styles for the SearchBar using the styled-components library
const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

const Button = styled.button`
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

// Export the SearchBar component to be used in other parts of the app
export default SearchBar;
