import React, { useState, useEffect } from "react";
import axios from "axios";
import GridViewCards from "../Components/GridViewCards";
import ListViewCards from "../Components/ListViewCards";
import { GridCardBody, MainBody, ToggleButton } from "../css/HomeCss";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const [News, setNews] = useState([]);
  const [isGridView, setIsGridView] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=374f63e5a86a48f1be5af4ffdfd2ffc1`
        );
        console.log(response.data.articles); // Access the data property of the response

        // Handle the fetched data - set it to state or perform other operations
        setNews(response.data.articles);
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
      }
    };
    fetchData(); // Call the async function
  }, []);

  const toggleView = () => {
    setIsGridView((prevState) => !prevState);
  };

  const HandleCardClickHandler = (newsData) => {
    props.cardDetails(News[newsData]);
    navigate("/details");
  };

  return (
    <>
      <MainBody>
        <div style={{ textAlign: "end" }}>
          <ToggleButton onClick={toggleView}>
            {isGridView ? "Grid View" : "List View"}
          </ToggleButton>
        </div>
        {isGridView ? (
          <GridCardBody>
            {News.map((news, index) => (
              <GridViewCards
                id={index}
                avatar={news.urlToImage}
                newsName={news.title}
                description={news.description}
                author={news.source.name}
                publishedAt={news.publishedAt}
                viewNews={news.url}
                HandleCardDetail={HandleCardClickHandler}
              />
            ))}
          </GridCardBody>
        ) : (
          <div>
            {News.map((news, index) => (
              <ListViewCards
                key={index}
                avatar={news.urlToImage}
                newsName={news.title}
                description={news.description}
                author={news.source.name}
                publishedAt={news.publishedAt}
                viewNews={news.url}
                HandleCardDetail={HandleCardClickHandler}
              />
            ))}
          </div>
        )}
      </MainBody>
    </>
  );
};

export default Home;
