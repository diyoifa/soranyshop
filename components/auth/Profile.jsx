"use client";

import React, { useContext } from "react";
import UserAddresses from "../user/UserAddresses";
import Link from "next/link";
import AuthContext from "@/context/AuthContext";

const Profile = ({addresses}) => {
  const { user } = useContext(AuthContext);
  console.log("🚀 ~ file: Profile.jsx:10 ~ Profile ~ user:", user)

  return (
    <>
      <figure className="flex items-start sm:items-center">
        <div className="relative">
          <img
            className="w-16 h-16 rounded-full mr-4"
            src={user?.avatar ? user?.avatar?.url : "/images/default.png"}
            alt={user?.name}
          />
        </div>
        <figcaption>
          <h5 className="font-semibold text-lg">{user?.name}</h5>
          <p>
            <b>Correo:</b> {user?.email} | 
            <b>Entro en: </b>
            {user?.createdAt?.substring(0, 10)}
          </p>
        </figcaption>
      </figure>

      <hr className="my-4" />

      <UserAddresses addresses={addresses} />

      <Link href="/address/new">
        <button className="px-4 py-2 inline-block text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100">
          <i className="mr-1 fa fa-plus"></i> Añadir nueva direccion
        </button>
      </Link>

      <hr className="my-4" />
    </>
  );
};

export default Profile;
