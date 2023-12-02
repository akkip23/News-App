import { styled } from "styled-components";

export const ListViewCardDetails = styled.div`
  width: 100%;
  background: white;
  position: relative;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 0px;
  max-width: 100%;
  display: flex;
  /* flex-direction: column; */
  padding: 15px;
  box-sizing: border-box;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.img`
  width: 20%;
  height: 40%;
  border-radius: 10%;
  border: solid 10px transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(90deg, #ff606026 40%, #8860ff26 100%);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-size: 100% 100%, 100% 100%;
  background-position: center center, center bottom;
  background-repeat: no-repeat;
  transition: 1s;
`;

export const Headline = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  /* Limit headline to 3 lines */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const NewsDescription = styled.p`
  margin-bottom: 8px;
  /* Limit headline to 2 lines */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PostDate = styled.div`
  text-align: end;
  width: 100%;
  font-family: cursive;
  font-size: 1.1rem;
  color: indianred;
`;

export const AuthorDetails = styled.div`
  width: 10%;
  height: 23vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Wishlist = styled.div`
  width: 100%;
  text-align: end;
  img {
    width: 25%;
  }
`;
