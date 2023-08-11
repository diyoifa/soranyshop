import React from "react";
import axios from "axios";
import ListProducts from "@/components/products/ListProducts";
import Banner from "@/components/layouts/Banner";
import queryString from "query-string";
import Footer from "@/components/layouts/Footer";
import ScrollToTop from "@/components/layouts/Scroll";
// import Head from "next/head";

export const metadata = {
  title: "Sorany Shop",
};



const getProducts = async (searchParams) => {
  const urlParams = {
    keyword: searchParams.keyword,
    page: searchParams.page,
    category: searchParams.category,
    "price[gte]": searchParams.min,
    "price[lte]": searchParams.max,
    "ratings[gte]": searchParams.ratings,
  };

  const searchQuery = queryString.stringify(urlParams);

  const { data } = await axios.get(
    `${process.env.API_URL}/api/products?${searchQuery}`
  );
  return data;
};

const HomePage = async ({ searchParams }) => {
  const productsData = await getProducts(searchParams);

  return(
    <>
    
     {/* <main className="font-bodyFont"> */}
      <Banner/>
      <ListProducts data={productsData} />
      <ScrollToTop/>
      <Footer/>
     {/* </main> */}
     
   </> 

  )
};

export default HomePage;



