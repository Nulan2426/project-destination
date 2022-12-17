import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

// Define a MapView component that displays a Google Map with markers for each destination
const MapView = ({ destinations }) => {
    const [selectedDestination, setSelectedDestination] = useState(null);

    return (
        <Container>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'YOUR_GOOGLE_MAPS_API_KEY',
                }}
                defaultZoom={8}
                center={selectedDestination ? selectedDestination.coordinates : undefined}
            >
                {destinations.map((destination) => (
                    <Marker
                        key={destination.id}
                        lat={destination.coordinates.lat}
                        lng={destination.coordinates.lng}
                        onClick={() => setSelectedDestination(destination)}
                        selected={destination === selectedDestination}
                    />
                ))}
            </GoogleMapReact>
            {selectedDestination && (
                <DestinationInfo>
                    <Title>{selectedDestination.name}</Title>
                    <Description>{selectedDestination.description}</Description>
                </DestinationInfo>
            )}
        </Container>
    );
};

// Define styles for the MapView using the styled-components library
// import React from 'react';
// import { useState } from 'react';
// import styled from 'styled-components';
// import GoogleMapReact from 'google-map-react';

// Define styles for the MapView using the styled-components library
const Container = styled.div`
  width: 100%;
  height: 400px;
  margin: 20px auto;
`;

const Marker = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #333;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  ${(props) =>
        props.selected &&
        `
    background-color: #fff;
    color: #333;
  `}
`;

const DestinationInfo = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 0 0 10px 0;
`;

const Description = styled.p`
  font-size: 16px;
  color: #333;
`;

// Export the MapView component to be used in other parts of the app
export default MapView;
