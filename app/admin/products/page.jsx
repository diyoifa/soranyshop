import React from "react";
import axios from "axios";
import queryString from "query-string";
import Products from "@/components/admin/Products";

const getProducts = async (searchParams) => {
  const urlParams = {
    page: searchParams.page,
  };
  const searchQuery = queryString.stringify(urlParams);
  const { data } = await axios.get(
    `${process.env.API_URL}/api/products?${searchQuery}`
  );
//   console.log("🚀 ~ file: page.jsx:16 ~ getProducts ~ data:", data)
  return data;
};

const HomePage = async ({ searchParams }) => {
  const data = await getProducts(searchParams);
//   console.log("🚀 ~ file: page.jsx:22 ~ HomePage ~ data:", data)

  return <Products data={data} />;
};

export default HomePage;