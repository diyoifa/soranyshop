// 'use client'

import React from "react";
import StarRatings from "react-star-ratings";
// import axios from "axios";
// import { cookies } from "next/headers";
// import { useState, useEffect } from "react";
//crear una funcion para obtener el usuario por id

// const getUser = async (id) => {
//   const nextCookies = cookies();

//   const nextAuthSessionToken = nextCookies.get("next-auth.session-token");

//   const { data } = await axios.get(
//     `${process.env.API_URL}/api/admin/users/${id}`,
//     {
//       headers: {
//         Cookie: `next-auth.session-token=${nextAuthSessionToken?.value}`,
//       },
//     }
//   );
//   console.log("🚀 ~ file: Reviews.jsx:20 ~ getUser ~ data:", data)

//   return data;
// };


const Reviews = ({ reviews }) => {
  // console.log("🚀 ~ file: Reviews.jsx:5 ~ Reviews ~ reviews:", reviews)
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const userArray = await Promise.all(
  //       reviews.map((review) => getUser(review.user))
  //     );
  //     setUsers(userArray);
  //   };

  //   fetchUsers();
  // }, [reviews]);
  
  // console.log("🚀 ~ file: Reviews.jsx:27 ~ Reviews ~ users:", users)
  
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {reviews?.map((review) => (

        <article className="block p-6 bg-white max-w-sm rounded-lg border border-gray-200 shadow-md mb-5">
          <div className="flex items-center mb-4 space-x-4">
            <img
              className="w-10 h-10 rounded-full"
              src={
                review?.user?.avatar
                  ? review?.user?.avatar?.url
                  : "/images/default.png"
              }
              alt="user"
            />
            <div className="space-y-1 font-medium">
              <p>
                {review?.user?.name}
                <time className="block text-sm text-gray-500 dark:text-gray-400">
                  Publicado el:  {review?.createdAt.substring(0, 10)}
                </time>
              </p>
            </div>
            <div className="space-y-1 font-medium">
              <p>{review?.user?.name}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center space-x-2 mb-2">
            <div className="ratings">
              <StarRatings
                rating={review?.rating}
                starRatedColor="#ffb829"
                numberOfStars={5}
                starDimension="18px"
                starSpacing="1px"
                name="rating"
              />
            </div>
            <span className="text-yellow-500">{review?.rating}</span>
          </div>

          <p className="mb-2 font-light text-gray-500 dark:text-gray-400 text-xl">
            {review?.comment}
          </p>
        </article>
      ))}
    </div>
  );
};

export default Reviews;
