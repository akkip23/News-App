import React from "react";
import {
  ListViewCardDetails,
  Avatar,
  Headline,
  NewsDescription,
  PostDate,
  Wishlist,
  AuthorDetails,
} from "../css/ListViewCss";

const ListViewCards = ({
  avatar,
  newsName,
  description,
  author,
  publishedAt,
  viewNews,
}) => {
  const datePart = publishedAt.substring(0, 10);

  return (
    <ListViewCardDetails>
      <Avatar src={avatar} alt={newsName}></Avatar>

      <div style={{ width: "65%" }}>
        <Headline>{newsName}</Headline>
        <NewsDescription>{description}</NewsDescription>
        <p style={{ fontWeight: "bold" }}>{author}</p>
      </div>

      <AuthorDetails>
        <Wishlist>
          <img src="https://cdn-icons-png.flaticon.com/128/707/707680.png" />
        </Wishlist>
        <PostDate>{datePart}</PostDate>
      </AuthorDetails>
    </ListViewCardDetails>
  );
};

export default ListViewCards;
