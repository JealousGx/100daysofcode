import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

import Logo from "./static/logo.png";

interface ILogin {
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
}

const Login: React.FC<ILogin> = (props): JSX.Element => {
  const { data, status } = useSession();
  const { loggedIn, setLoggedIn } = props;

  if (data?.user?.name) {
    setLoggedIn(true);
  }

  return (
    <div className="flex gap-2 pt-8 relative p-6 flex-col items-center bg-[#36393F] backdrop-blur-lg rounded-lg max-w-sm w-full">
      <img src={Logo.src} alt="brand logo" width={48} />
      <h1 className="text-2xl text-info-text font-bold">Brand Assistant</h1>
      {status === "unauthenticated" && (
        <button
          className="w-full px-4 py-2 border border-blurple hover:border-hover-blurple rounded-[0.175rem] text-[#ffffff] font-bold tracking-[0.035em] bg-blurple hover:bg-hover-blurple mt-6 transition-colors duration-250 ease-in"
          onClick={() => signIn("google")}
        >
          Sign In With Google
        </button>
      )}
    </div>
  );
};

export default Login;
