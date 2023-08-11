"use client";

import ProductContext from "@/context/ProductContext";
import React, { useContext, useState } from "react";

const NewProduct = () => {
  const { newProduct } = useContext(ProductContext);

  const [product, setProduct] = useState({
    name: "",
    description: "",
    seller: "",
    price: "",
    stock: "",
    category: "",
    talla: "", 
    color: "", 
  });

  const { name, description, seller, price, stock, category, talla, color } =
    product;

    const onChange = (e) => {
      const { name, value, checked, type } = e.target;
      if (type === "checkbox") {
        if (checked) {
          setProduct((prevState) => ({
            ...prevState,
            [name]: [...prevState[name], value],
          }));
        } else {
          setProduct((prevState) => ({
            ...prevState,
            [name]: prevState[name].filter((item) => item !== value),
          }));
        }
      } else {
        setProduct({ ...product, [name]: value });
      }
    };

  console.log("🚀 ~ file: NewProduct.jsx:19 ~ NewProduct ~ product:", product)

  const categories = [
    "selecciona una categoria",
    "camisas mujer",
    "conjuntos mujer",
    "zapatos mujer",
    "accesorios mujer",
    "belleza",
  ];

  const tallas = [
    "selecciona una talla",
    "S",
    "M", 
    "L", 
    "XL",
    "XS",
    "35",
    "36",
    "37",
    "38",
    "40",
    "41",
    "42",
  ]

  const colores =  [
    "selecciona un color",
    "negro",
    "blanco",
    "morado",
    "rojo",
    "verde",
    "azul",
    "rosado",
  ]

  const submitHandler = (e) => {
    e.preventDefault();

    newProduct(product);
    // console.log("🚀 ~ file: NewProduct.jsx:17 ~ NewProduct ~ product:", product)
  };

  return (
    <section className="container max-w-3xl p-6 mx-auto">
      <h1 className="text-xl md:text-3xl font-semibold text-black mb-8">
        Crear nuevo producto
      </h1>

      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label className="block mb-1"> Nombre </label>
          <input
            type="text"
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            placeholder="Nombre del producto"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-4 mt-5">
          <label className="block mb-1"> Descripcion </label>
          <textarea
            rows="4"
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            placeholder="Descripcion del producto"
            name="description"
            value={description}
            onChange={onChange}
            required
          ></textarea>
        </div>

        <div className="grid md:grid-cols-2 gap-x-2 mt-5">
          <div className="mb-4">
            <label className="block mb-1"> Precio </label>
            <div className="relative">
              <div className="col-span-2">
                <input
                  type="number"
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  placeholder="0.00"
                  name="price"
                  value={price}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1"> Categoria </label>
            <div className="relative">
              <select
                className="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                name="category"
                value={category}
                onChange={onChange}
                required
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <i className="absolute inset-y-0 right-0 p-2 text-gray-400">
                <svg
                  width="22"
                  height="22"
                  className="fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10l5 5 5-5H7z"></path>
                </svg>
              </i>
            </div>
          </div>
          <div className="mb-4">
          <label className="block mb-1"> Talla </label>
            <div className="relative">
              <select
                className="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                name="talla"
                value={talla}
                onChange={onChange}
                required
              >
                {tallas.map((talla) => (
                  <option key={talla} value={talla}>
                    {talla}
                  </option>
                ))}
              </select>
              <i className="absolute inset-y-0 right-0 p-2 text-gray-400">
                <svg
                  width="22"
                  height="22"
                  className="fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10l5 5 5-5H7z"></path>
                </svg>
              </i>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1"> Color </label>
            <div className="relative">
              <select
                className="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                name="color"
                value={color}
                onChange={onChange}
              >
                {colores.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
              <i className="absolute inset-y-0 right-0 p-2 text-gray-400">
                <svg
                  width="22"
                  height="22"
                  className="fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10l5 5 5-5H7z"></path>
                </svg>
              </i>
            </div>
          </div>         
        <div className="grid md:grid-cols-2 gap-x-2 mt-5">
          <div className="mb-4">
            <label className="block mb-1"> Vendedor </label>
            <input
              type="text"
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              placeholder="Vendedor o marca"
              name="seller"
              value={seller}
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1"> Stock(Inventario) </label>
            <div className="relative">
              <div className="col-span-2">
                <input
                  type="number"
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  placeholder="0"
                  name="stock"
                  value={stock}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="my-2 px-4 py-2 text-center inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 w-full"
        >
          Crear producto
        </button>
      </form>
    </section>
  );
};

export default NewProduct;
