"use client";

import CartContext from "@/context/CartContext";
import axios from "axios";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import BreadCrumbs from "../layouts/BreadCrumbs";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/navigation";
// import {updateStock} from "@/context/ProductContext"
const Shipping = ({ addresses }) => {
  const { cart, clearCart } = useContext(CartContext);
  // console.log("🚀 ~ file: Shipping.jsx:14 ~ Shipping ~ cart:", cart)
  // console.log("🚀 ~ file: Shipping.jsx:12 ~ Shipping ~ cart?.cartItems:", cart?.cartItems)
  const {user} = useContext(AuthContext)
  // console.log("🚀 ~ file: Shipping.jsx:15 ~ Shipping ~ user:", user)
  const router = useRouter()
  const [shippingInfo, setShippinInfo] = useState("");

  const setShippingAddress = (address) => {
    setShippinInfo(address._id);
  };
  // console.log("🚀 ~ file: Shipping.jsx:15 ~ Shipping ~ shippingInfo:", shippingInfo)
  
  const checkoutHandler = async () => {
    if (!shippingInfo) {
      return toast.error("Por favor selecciona una direccion de envio");
    }
    // move to stripe checkoutpage
    try {
      // const { data } = 
      await axios.post(
        `${process.env.API_URL}/api/orders/checkout_session`,
        {
          shippingInfo,
          user: user._id,
          orderItems: cart?.cartItems,
        }
      );
      // console.log("🚀 ~ file: Shipping.jsx:32 ~ checkoutHandler ~ data:", data)
      //por cada item del carrito restar del stock la cantidad
      console.log("cart?.cartItems: ",cart?.cartItems)
      for (const cartItem of cart?.cartItems) {
        const { data } = await axios.put(
          `${process.env.API_URL}/api/products/update_stock`,
          {
            id:cartItem.product,
            quantity: cartItem.quantity,
          }
        );
        console.log(`Stock updated for product ${cartItem.product}:`, data.message);
      }

        // updateStock(cart)
        clearCart()
        router.replace("/me/orders")
        // updateStock(cart)
      // window.location.href = data.url;
    } catch (error) {
      console.log(error.response);
    }
  };

  const breadCrumbs = [
    { name: "Inicio", url: "/" },
    { name: "Carrito", url: "/cart" },
    { name: "Orden", url: "" },
  ];

  return (
    <div>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <section className="py-10 bg-gray-50">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
            <main className="md:w-2/3">
              <article className="border border-gray-200 bg-white shadow-sm rounded p-4 lg:p-6 mb-5">
                <h2 class="text-xl font-semibold mb-5"> Datos de envio🚀</h2>

                <div class="grid sm:grid-cols-2 gap-4 mb-6">
                  {addresses?.map((address) => (
                    <label
                      class="flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer"
                      onClick={() => setShippingAddress(address)}
                    >
                      <span>
                        <input
                          name="shipping"
                          type="radio"
                          class="h-4 w-4 mt-1"
                        />
                      </span>
                      <p class="ml-2">
                        <span>{address.street}</span>
                        <small class="block text-sm text-gray-400">
                          {address.city}, {address.state}, {address.zipCode}
                          <br />
                          {address.country}
                          <br />
                          {address.phoneNo}
                        </small>
                      </p>
                    </label>
                  ))}
                </div>

                <Link
                  href="/address/new"
                  className="px-4 py-2 inline-block text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100"
                >
                  <i className="mr-1 fa fa-plus"></i> Añadir una nueva direccion
                </Link>

                <div className="flex justify-end space-x-2 mt-10">
                  <Link
                    href="/cart"
                    className="px-5 py-2 inline-block text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
                  >
                    Volver
                  </Link>
                  {/* <a
                    className="px-5 py-2 inline-block text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 cursor-pointer"
                    onClick={checkoutHandler}
                  >
                    Pagar
                  </a> */}
                  <a
                    className="px-5 py-2 inline-block text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 cursor-pointer"
                    onClick={checkoutHandler}
                  >
                    Pagar contra entrega
                  </a>
                </div>
              </article>
            </main>
            <aside className="md:w-1/3">
              <article className="text-gray-600" style={{ maxWidth: "350px" }}>
                <h2 className="text-lg font-semibold mb-3">Resumen de la compra</h2>
                <ul>
                  <li className="flex justify-between mb-1">
                    <span>Valor de la compra:</span>
                    <span>${cart?.checkoutInfo?.amount}</span>
                  </li>
                  <li className="flex justify-between mb-1">
                    <span>Impuestos:</span>
                    <span>${cart?.checkoutInfo?.tax}</span>
                  </li>
                  <li className="border-t flex justify-between mt-3 pt-3">
                    <span>Total a pagar:</span>
                    <span className="text-gray-900 font-bold">
                      ${cart?.checkoutInfo?.totalAmount}
                    </span>
                  </li>
                </ul>

                <hr className="my-4" />

                <h2 class="text-lg font-semibold mb-3">Productos en el carrito</h2>

                {cart?.cartItems?.map((item) => (
                  <figure class="flex items-center mb-4 leading-5">
                    <div>
                      <div class="block relative w-20 h-20 rounded p-1 border border-gray-200">
                        <img
                          width="50"
                          height="50"
                          src={item.image}
                          alt="Title"
                        />
                        <span class="absolute -top-2 -right-2 w-6 h-6 text-sm text-center flex items-center justify-center text-white bg-gray-400 rounded-full">
                          {item.quantity}
                        </span>
                      </div>
                    </div>
                    <figcaption class="ml-3">
                      <p>{item.name.substring(0, 50)}</p>
                      <p class="mt-1 text-gray-400">
                        Total: ${item.quantity * item.price}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </article>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shipping;
