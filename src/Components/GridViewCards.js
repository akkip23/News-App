import React from "react";
import {
  GridViewCardDetails,
  Avatar,
  Headline,
  NewsDescription,
  PostDate,
  Wishlist,
  AuthorDetails,
} from "../css/GridViewCss";

const GridViewCards = ({
  avatar,
  newsName,
  description,
  author,
  publishedAt,
  viewNews,
  HandleCardDetail,
  id,
}) => {
  const datePart = publishedAt.substring(0, 10);

  const addNewsToWishList = () => {};

  return (
    <GridViewCardDetails onClick={() => HandleCardDetail(id)}>
      <Wishlist>
        <img
          src="https://cdn-icons-png.flaticon.com/128/707/707680.png"
          onClick={addNewsToWishList}
        />
      </Wishlist>
      <Avatar src={avatar} alt={newsName}></Avatar>
      <div>
        <Headline>{newsName}</Headline>
        <NewsDescription>{description}</NewsDescription>
        <AuthorDetails>
          <p>{author}</p>
          <PostDate>{datePart}</PostDate>
        </AuthorDetails>
      </div>
    </GridViewCardDetails>
  );
};

export default GridViewCards;
