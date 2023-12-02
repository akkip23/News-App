import React, { useState } from "react";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import NewsDetails from "./Pages/NewsDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store"; // Import the Redux store;

function App() {
  const [Details, setDetails] = useState({});
  const HandleCardDetails = (data) => {
    console.log("data in app", data);
    setDetails(data);
  };

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home cardDetails={HandleCardDetails} />} />
            <Route
              path="details"
              element={<NewsDetails NewsCardDetail={Details} />}
            />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* Add more routes for other pages */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
