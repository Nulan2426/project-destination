import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

// Define a Review component that displays a form for users to submit their reviews and ratings
const SiteReview = ({ destination, onSubmit }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate the form
        if (rating === 0) {
            alert('Please select a rating');
            return;
        }

        // Call the onSubmit callback with the review data
        onSubmit({
            destinationId: destination.id,
            rating,
            comment,
        });

        // Rating label and Rating buttons need to be defined
        
    };

    return (
        <Container>
            <Title>Leave a review for {destination.name}</Title>
            <Form onSubmit={handleSubmit}>
                <RatingLabel>Rating:</RatingLabel>
                <RatingButtons>
                    {[1, 2, 3, 4, 5].map((value) => (
                        <RatingButton
                            key={value}
                            active={value === rating}
                            onClick={() => setRating(value)}
                        >
                            {value}
                        </RatingButton>
                    ))}
                </RatingButtons>
                <CommentLabel>Comment:</CommentLabel>
                <CommentInput>
                    type="text"
                    placeholder="Enter your comment"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                </CommentInput>
                <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
        </Container>
    );
};

// Define styles for the Review using the styled-components library
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 0 0 20px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

const RatingLabel = styled.label`
  font-size: 16px;
  color: #333;
  margin: 0 0 10px 0;
`;

const RatingButtons = styled.div`
  display: flex;
`;

const RatingButton = styled.button`
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
`;

const CommentLabel = styled.label`
  font-size: 16px;
  color: #333;
  margin: 0 0 10px 0;
`;

const CommentInput = styled.div`
  display: flex;
`;

const SubmitButton = styled.button`
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
`;

export default SiteReview