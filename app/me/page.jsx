import Profile from "@/components/auth/Profile";
import axios from "axios";
import React from "react";

import { cookies } from "next/headers";
import { getCookieName } from "@/helpers/helpers";

const getAddresses = async () => {
  const nextCookies = cookies();
  const cookieName = getCookieName();
  const nextAuthSessionToken = nextCookies.get(cookieName);
  // console.log("🚀 ~ file: page.jsx:12 ~ getAddresses ~ nextAuthSessionToken:", nextAuthSessionToken)
  
  const { data } = await axios.get(`${process.env.API_URL}/api/address`, {
    headers: {
    Cookie: `${nextAuthSessionToken?.name}=${nextAuthSessionToken?.value}`,
    },
  });
  // const { data } = await axios.get(`${process.env.API_URL}/api/address`)

  return data?.addresses;
};

const ProfilePage = async() => {
  const addresses = await getAddresses();

  return <Profile addresses={addresses} />;
// return <Profile/>
};

export default ProfilePage;