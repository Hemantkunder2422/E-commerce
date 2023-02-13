import React, { useState } from "react";
import Announcement from "../../components/annoucement/Announcement";
import Categories from "../../components/categories/Categories";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Products from "../../components/Products/Products";
import Slider from "../../components/slider/Slider";

const Home = () => {
  const [showAccouncement, setShowAccouncement] = useState(true);
  return (
    <div>
      {showAccouncement && (
        <Announcement showAccouncement={setShowAccouncement} />
      )}
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
