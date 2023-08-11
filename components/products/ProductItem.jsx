import React, { useContext } from "react";
import Link from "next/link";
import StarRatings from "react-star-ratings";
import Image from "next/image";
import CartContext from "@/context/CartContext";
import defaulProductImage from '../../public/images/default_product.png'
import swal from "sweetalert";
const ProductItem = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const addToCartHandler = () => {
    if(product.stock === 0){
      swal ( "Oops" ,  "Producto Agotado!" ,  "error" )
    }else{
      swal("Buen trabajo!", "Producto añadido al carrito!", "success");
      addItemToCart({
        product: product._id,
        name: product.name,
        price: product.price,
        image: product.images[0]?.url,
        stock: product.stock,
        seller: product.seller,
        talla: product.talla,
        color: product.color
      });
    }
  };

  return (
    <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 flex p-3">
          <div
            style={{
              width: "80%",
              height: "70%",
              position: "relative",
            }}
          >
            <Image
              src={
                product?.images[0]
                  ? product?.images[0].url
                  : defaulProductImage
              }
              alt="product anme"
              height="240"
              width="240"
            />
          </div>
        </div>
        <div className="md:w-2/4">
          <div className="p-4">
            <Link
              href={`/product/${product._id}`}
              className="hover:text-blue-600"
            >
              {product.name}
            </Link>
            <div className="flex flex-wrap items-center space-x-2 mb-2">
              <div className="ratings">
                <div className="my-1">
                  <StarRatings
                    rating={product?.ratings}
                    starRatedColor="#ffb829"
                    numberOfStars={5}
                    starDimension="18px"
                    starSpacing="1px"
                    name="rating"
                  />
                </div>
              </div>
              <b className="text-gray-300">•</b>
              <span className="ml-1 text-yellow-500">{product?.ratings}</span>
            </div>
            <p className="text-gray-500 mb-2">
              {product?.description.substring(0, 150)}...
            </p>
            {
              product?.stock === 0
              ?(
              <p className="text-red-500 mb-2 font-semibold">
                
                Agotado!¡: <span className="ml-1 text-yellow-500 font-bold">{product?.stock}</span> 
              </p>
              )
              :(<p className="text-green-500 mb-2 font-semibold">
              
              Productos disponibles: <span className="ml-1 text-yellow-500 font-bold">{product?.stock}</span> 
            </p>)
            }
            <p className="text-gray-600 mb-2 font-bold">
             Talla: {product?.talla}
            </p>
            <p className="text-gray-600 mb-2 font-bold">
             Color: {product?.color}
            </p>
          </div>
        </div>
        <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
          <div className="p-5">
            <span className="text-xl font-semibold text-black">
              ${product?.price}
            </span>

            <p className="text-green-500">Envio gratis</p>
            <div className="my-3">
              <a
                className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer"
                onClick={addToCartHandler}
              >
                {" "}
                Agregar al carrito{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
