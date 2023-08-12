"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [updated, setUpdated] = useState(false);

  const router = useRouter();

  const updateProduct = async (product, id) => {
    try {
      const { data } = await axios.put(
        `${process.env.API_URL}/api/admin/products/${id}`,
        product
      );

      if (data) {
        setUpdated(true);
        router.replace(`/admin/products/${id}`);
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  const newProduct = async (product) => {
    try {
      const { data } = await axios.post(
        `${process.env.API_URL}/api/admin/products`,
        product, {
          headers: {
            'Access-Control-Allow-Origin': 'https://soranyshop.vercel.app',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        }
      );

      if (data) {
        router.replace("/admin/products");
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  const uploadProductImages = async (formData, id) => {
    try {
      setLoading(true);

      const { data } = await axios.post(
        `${process.env.API_URL}/api/admin/products/upload_images/${id}`,
        formData,
        {
          headers: {
            'Access-Control-Allow-Origin': 'https://soranyshop.vercel.app',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data?.data) {
        setLoading(false);
        router.replace("/admin/products");
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const { data } = await axios.delete(
        `${process.env.API_URL}/api/admin/products/${id}`
      );

      if (data?.success) {
        router.replace(`/admin/products`);
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  const postReview = async (reviewData) => {
    try {
      const { data } = await axios.put(
        `${process.env.API_URL}/api/products/review`,
        reviewData
      );

      if (data?.success) {
        router.replace(`/product/${reviewData?.productId}`);
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  // const updateStock = async (cart) =>{
  //   try {
  //     console.log("entreee")
  //     for (const cartItem of cart?.cartItems) {
  //       const { data } = await axios.put(
  //         `${process.env.API_URL}/api/products/update_stock`,
  //         {
  //           id:cartItem.product,
  //           quantity: cartItem.quantity,
  //         }
  //       );
  
  //       console.log(`Stock updated for product ${cartItem.productId}:`, data.message);
  //     }
  //   } catch (error) {
  //     console.error('Error updating stock:', error.message);
  //   }
  // }

  const clearErrors = () => {
    setError(null);
  };

  return (
    <ProductContext.Provider
      value={{
        error,
        loading,
        updated,
        setUpdated,
        newProduct,
        uploadProductImages,
        updateProduct,
        deleteProduct,
        postReview,
        clearErrors,
        // updateStock
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
