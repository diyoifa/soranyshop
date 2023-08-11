"use client";
import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { parseCallbackUrl } from "@/helpers/helpers";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const params = useSearchParams();
  const callBackUrl = params.get("callbackUrl");

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = await signIn("credentials", {
      email,
      password,
      callbackUrl: callBackUrl ? parseCallbackUrl(callBackUrl) : "/",
    });
    // console.log("🚀 ~ file: Login.jsx:26 ~ submitHandler ~ data:", data)

    if (data?.error) {
      console.log("🚀 ~ file: Login.jsx:29 ~ submitHandler ~ data:", data)
      toast.error(data?.error);
      
    }

    if (data?.ok) {
      console.log("🚀 ~ file: Login.jsx:34 ~ submitHandler ~ data:", data)
      router.push("/");
    }
  };

  return (
    <div
      style={{ maxWidth: "480px" }}
      className="mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
    >
      <form onSubmit={submitHandler}>
        <h2 className="mb-5 text-2xl font-semibold text-center">Entrar</h2>

        <div className="mb-4">
          <label className="block mb-1"> Correo </label>
          <input
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            type="text"
            placeholder="Escribe tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1"> Contraseña </label>
          <input
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            type="password"
            placeholder="Escribe tu contraseña"
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
        >
          Login
        </button>

        <hr className="mt-4" />

        <p className="text-center mt-5">
          ¿No tienes una cuenta?{" "}
          <Link href="/register" className="text-blue-500">
            Registrarse
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
