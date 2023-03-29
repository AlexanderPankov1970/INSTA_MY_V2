import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Header from "src/component/Header";
import Image from "next/image";

export default function signin({ providers }) {
  //console.log(4444, providers);
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-8 mt-20">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/5b4cc5e68f5130170559c4bf/1596631057072-5DRYJ7FZDYT25WNNESWC/apple+device+iphone+instagram+messages+download"
          alt="Instagram Image"
          width={200}
          height={400}
          className="hidden md:inline md:w-48 rotate-6 object-cover"
        />
        <div>
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex flex-col items-center">
              <Image
                src="https://logovector.net/wp-content/uploads/2014/01/Instagram-logo-195x195.png"
                alt="Instagram Image"
                width={200}
                height={100}
                className="object-cover"
              />
              <p className="text-sm italic my-2">
                This app is created for learning purposes{" "}
              </p>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className="bg-red-400 text-white rounded-md hover:bg-red-600 border-ring p-2 mt-4"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  //console.log(5555, providers);
  return {
    props: { providers },
  };
}
