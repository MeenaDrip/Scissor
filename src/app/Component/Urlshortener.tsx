'use client';

import { useState } from 'react';
import styled from 'styled-components';

// Styled components
const FormContainer = styled.div`
  background-color: #f8faf9; // Background color as seen in the screenshot
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    margin: 0 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 15px;
  border: none;
  color: aliceblue;
  border-radius: 5px 0 0 5px;
  font-size: 16px;
  outline: none;

  @media (max-width: 768px) {
    border-radius: 5px;
    margin-bottom: 10px;
    width: 100%;
  }
`;

const Button = styled.button`
  background-color: #2b4e3f;
  color: #fff;
  padding: 15px 30px;
  border: none;
  border-radius: 0 5px 5px 0;
  font-size: 18px;
  cursor: pointer;

  @media (max-width: 768px) {
    border-radius: 5px;
    width: 100%;
  }
`;

const UrlShortenerForm = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle URL shortening logic here
    console.log('URL to shorten:', url);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Shorten a link here..."
          required
        />
        <Button type="submit">Shorten It!</Button>
      </Form>
    </FormContainer>
  );
};

export default UrlShortenerForm;
