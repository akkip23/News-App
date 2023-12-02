import { styled } from "styled-components";

export const MainBody = styled.main`
  padding: 150px 10px 20px 10px;
`;

export const GridCardBody = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  transition: -webkit-backdrop-filter 0.3s ease-in-out,
    backdrop-filter 0.5s ease-in-out;

  @media (max-width: 940px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 570px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ToggleButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 15px 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049; /* Darker green on hover */
  }
`;
