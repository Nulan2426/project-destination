// Import necessary libraries and frameworks
import React from 'react';
import styled from 'styled-components';

// Define a component for the homepage, which will display a list of destinations
const Homepage = () => {
    return (
        <Container>
            <Title>Explore the world with us!</Title>
            <DestinationList>
                <Destination
                    name="New York City"
                    image="nyc.jpg"
                    description="The city that never sleeps"
                />
                <Destination
                    name="Santorini"
                    image="santorini.jpg"
                    description="A Greek island paradise"
                />
                <Destination
                    name="Serengeti National Park"
                    image="serengeti.jpg"
                    description="Home to the Great Migration"
                />
            </DestinationList>
        </Container>
    );
};

// Define styles for the homepage using the styled-components library
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
   @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const DestinationList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  
`;

const Destination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  width: 300px;
  height: 300px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

// Export the Homepage component to be used in other parts of the app
export default Homepage;
