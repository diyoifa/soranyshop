"use client";

import React, { useContext, useEffect } from "react";
import Link from "next/link";
import CustomPagination from "../layouts/CustomPagination";
import ProductContext from "@/context/ProductContext";
import { toast } from "react-toastify";
import { FaTrash } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import { FaImage } from 'react-icons/fa';

const Products = ({ data }) => {
  const { 
    deleteProduct, 
    error, 
    clearErrors } = useContext(ProductContext);

  useEffect(() => {
    if (error) {
      toast.error(error);
      clearErrors();
    }
  }, [error]);

  const deleteHandler = (id) => {
    deleteProduct(id);
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-3xl my-5 ml-4 font-bold">
        {data?.productsCount} Productos
      </h1>
      <table className="w-full text-sm text-left">
        <thead className="text-l text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Stock
            </th>
            <th scope="col" className="px-6 py-3">
              Precio
            </th>
            <th scope="col" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.products?.map((product) => (
            <tr className="bg-white">
              <td className="px-6 py-2">{product?.name}</td>
              <td className="px-6 py-2">{product?.stock}</td>
              <td className="px-6 py-2">${product?.price}</td>
              <td className="px-6 py-2">
                <div>
                  <Link
                    href={`/admin/products/${product?._id}/upload_images`}
                    className="px-2 py-2 inline-block text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                  >
                    <i className="fa fa-image" aria-hidden="true">
                      <FaImage/>
                    </i>
                  </Link>

                  <Link
                    href={`/admin/products/${product?._id}`}
                    className="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                  >
                    <i className="fa fa-pencil" aria-hidden="true">
                      <FaPencilAlt/>
                    </i>
                  </Link>
                  <a
                    className="px-2 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer"
                    onClick={() => deleteHandler(product?._id)}
                  >
                    <i className="fa fa-trash" aria-hidden="true">
                      <FaTrash/>
                    </i>
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mb-6">
        <CustomPagination
          resPerPage={data?.resPerPage}
          productsCount={data?.filteredProductsCount}
        />
      </div>
    </div>
  );
};

export default Products;
