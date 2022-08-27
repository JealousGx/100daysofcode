import React, { useState } from "react";
import axios from "axios";

import { signOut } from "next-auth/react";

import Logo from "./static/logo.png";
import LeftArrow from "./static/LeftArrow";
import LogoutIcon from "./static/LogoutIcon";

import GeneratedBrand from "./GeneratedBrand";
import Form from "./Form";

const API_URL: String =
  "https://zcljs5sw4a.execute-api.us-east-1.amazonaws.com/prod/";

const Assistant: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [submitBtnText, setSubmitBtnText] = useState("Generate");
  const [responseData, setResponseData] = useState([]);

  // Fetch data from API
  const submitHandler = async () => {
    setSubmitBtnText("Generating...");

    try {
      const response = await axios.get(
        `${API_URL}/generate-keywords-snippets-api?user_input=${userInput}`
      );
      setResponseData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // button to sign out
  const logoutHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signOut();
  };

  // Button to go back to the form
  const handleLeftArrowClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setResponseData([]);
    setUserInput("");
    setSubmitBtnText("Generate");
  };

  return (
    <div className="flex gap-2 pt-8 relative p-6 flex-col items-center bg-[#36393F] xs:h-screen xs:justify-center sm:rounded-lg sm:max-w-sm sm:w-full">
      {responseData.length > 0 && (
        <button onClick={handleLeftArrowClick}>
          <LeftArrow className="text-info-text absolute left-6 top-6 cursor-pointer hover:text-gray-200 transition" />
        </button>
      )}
      <button onClick={logoutHandler}>
        <LogoutIcon className="text-info-text absolute right-6 top-6 cursor-pointer hover:text-gray-200 transition" />
      </button>
      <img src={Logo.src} alt="brand logo" width={48} />
      <h1 className="text-2xl text-info-text font-bold">Brand Assistant</h1>
      {responseData.length ? (
        <GeneratedBrand data={responseData} userInput={userInput} />
      ) : (
        <Form
          userInput={userInput}
          setUserInput={setUserInput}
          submitHandler={submitHandler}
          submitBtnText={submitBtnText}
        />
      )}
    </div>
  );
};

export default Assistant;
