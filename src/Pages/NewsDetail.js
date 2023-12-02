import React from "react";
import {
  BigCardContainer,
  Card,
  Image,
  Title,
  Author,
  PublishedDate,
} from "../css/NewsDetails";

const NewsDetailsCard = (props) => {
  return (
    <BigCardContainer>
      <Card>
        <Image src={props.NewsCardDetail?.urlToImage} alt="News" />
        <Title>{props.NewsCardDetail?.title}</Title>
        <p>{props.NewsCardDetail?.description}</p>
        <Author>By {props.NewsCardDetail?.author}</Author>
        <PublishedDate>
          Published At: {props.NewsCardDetail?.publishedAt}
          <a href={props.NewsCardDetail.url} target="_blank">
            <button>View Article</button>
          </a>
        </PublishedDate>
        {/* Add more content here if needed */}
      </Card>
    </BigCardContainer>
  );
};

export default NewsDetailsCard;
