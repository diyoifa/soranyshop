import React from "react";
import Image from "next/image";

const OrderItem = ({ order }) => {
  console.log("🚀 ~ file: OrderItem.jsx:5 ~ OrderItem ~ order:", order)
  return (
    <article className="p-3 lg:p-5 mb-5 bg-white border border-blue-600 rounded-md">
      <header className="lg:flex justify-between mb-4">
        <div className="mb-4 lg:mb-0">
          <p className="font-semibold">
            <span>Orden ID: {order?._id} </span>
            {order?.orderStatus == "Procesando" ? (
              <span className="text-red-500">
                • {order?.orderStatus.toUpperCase()}
              </span>
            ) : (
              <span className="text-green-500">
                • {order?.orderStatus.toUpperCase()}
              </span>
            )}
          </p>
          <p className="text-gray-500">{order?.createAt?.substring(0, 10)} </p>
        </div>
      </header>
      <div className="grid md:grid-cols-3 gap-2">
        <div>
          <p className="text-gray-400 mb-1">Cliente</p>
          <ul className="text-gray-600">
            <li>{order?.user?.name}</li>
            <li>Telfono: {order?.shippingInfo?.phoneNo}</li>
            <li>Correo: {order?.user?.email}</li>
          </ul>
        </div>
        <div>
          <p className="text-gray-400 mb-1">Direccion de envio</p>
          <ul className="text-gray-600">
            <li>{order?.shippingInfo?.street}</li>
            <li>
              {order?.shippingInfo?.city}, {order?.shippingInfo?.state},{" "}
              {order?.shippingInfo?.zipCode}
            </li>
            <li>{order?.shippingInfo?.country}</li>
          </ul>
        </div>
        <div>
          <p className="text-gray-400 mb-1">Informacion del Pago</p>
          <ul className="text-gray-600">
            {/* <li className="text-green-400">
              {order?.paymentInfo?.status?.toUpperCase()}
            </li> */}
            <li>IVA: ${0}</li>
            <li>Total a Pagar: ${
              order?.orderItems?.reduce((total, item)=>{
                return total + item.price * item.quantity;
              }, 0)
            }</li>
            {/* <li>
              Cuentas:
              <ul>
                <li>Nequi: 3143725774</li>
                <li>Daviplata: 3143725774</li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
      <hr className="my-4" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {order?.orderItems?.map((item) => (
          <figure className="flex flex-row mb-4">
            <div>
              <div className="block w-20 h-20 rounded border border-gray-200 overflow-hidden p-3">
                <Image
                  src={item?.image}
                  height="90"
                  width="90"
                  alt={item.name}
                />
              </div>
            </div>
            <figcaption className="ml-3">
              <p>{item?.name.substring(0, 35)}</p>
              <p>TALLA: {item?.talla}</p>
              <p>COLOR: {item?.color}</p>
              <p className="mt-1 font-semibold">
                {item.quantity} x = ${item.price * item.quantity}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
      <hr className="my-4" />
        {
          order?.orderStatus === "Enviado"
          ?(<div className="flex flex-col gap-4"> 
              <div>
                <label form="shippingAgency" className="mr-4 mt-4 mb-1 font-semibold  text-base">Agencia de envio</label>
                <a href={`https://www.${order?.shippingAgency}.com/`} target="_blank" className="font-bold text-base text-green-400">
                  {order?.shippingAgency}
                </a>
              </div>
              <div>
                <label form="shippingGuide" className="mr-4 mt-4 mb-1 font-semibold text-base">Numero de Guia</label>
                <span target="_blank" className="font-bold text-base text-green-400">
                  {order?.shippingGuide}
                </span>
              </div>
          </div>)
          :(<div>

          </div>)
        }
    </article>
  );
};

export default OrderItem;
