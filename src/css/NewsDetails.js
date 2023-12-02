import styled from "styled-components";

// Dummy data object (Replace this with your fetched data)

export const BigCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full viewport height */
  padding: 20px;
  padding-top: 150px;
  background-color: #f7f7f7;
`;

export const Card = styled.div`
  max-width: 800px;
  width: 90%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Author = styled.p`
  font-style: italic;
  margin-bottom: 10px;
`;

export const PublishedDate = styled.p`
  font-size: 12px;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    color: #fff;
    background-color: #ffcc00; /* Yellowish shade */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ffdb4d; /* Lighter shade on hover */
    }
  }
`;
