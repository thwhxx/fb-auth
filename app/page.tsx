"use client";

import { signIn } from "next-auth/react";
import React from "react";

const page = () => {
  return (
    <>
      <button onClick={() => signIn("facebook")}>Login with Facebook</button>
      <div className="mb-4 my-4">
        <button
          onClick={() => signIn("facebook")}
          className="border rounded-lg bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          <div className="flex items-center justify-center space-x-5">
            <span>Đăng nhập bằng Facebook</span>
          </div>
        </button>
      </div>
    </>
  );
};

export default page;
