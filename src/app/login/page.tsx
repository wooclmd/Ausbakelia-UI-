import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Ausbakelia || Login",
  description: "Login page",
};

const LoginPage = () => {
  return (
    <div className="p-2 h-screen flex flex-col gap-4 md:flex-row items-center md:h-[calc(100vh-12rem)] md:p-8 md:w-[70%] md:m-auto">
      {/* Image container */}
      <div className="relative w-full h-1/2 md:flex-1 md:h-full">
        <Image src={"/login.jpg"} alt="Login" fill className="object-cover" />
      </div>
      {/* Text container */}
      <div className="flex flex-col gap-4 md:flex-1 text-gray-500">
        <h1 className="font-bold text-[var(--darker-green)] text-xl">
          Welcome
        </h1>
        <p>Log into your account or create a new one using social buttons</p>
        <div className="p-4 flex gap-2 items-center ring-1 ring-[var(--bg-color1)] rounded-md">
          <Image src={"/google.png"} alt="Google" width={20} height={20} />
          <span>Sign in with Google</span>
        </div>
        <div className="p-4 flex gap-2 items-center ring-1 ring-[var(--bg-color1)] rounded-md">
          <Image src={"/facebook.png"} alt="Facebook" width={20} height={20} />
          <span>Sign in with Facebook</span>
        </div>
        <p>
          Have a problem?{" "}
          <span className="underline">
            <a href="https://www.facebook.com/Ausbakelia" target="_blank">
              Contact us
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
