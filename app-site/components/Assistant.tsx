import React, { useState } from "react";
import axios from "axios";

import Logo from "./static/logo.png";
import LeftArrow from "./static/LeftArrow";

import GeneratedBrand from "./GeneratedBrand";
import Form from "./Form";

const API_URL: String =
  "https://zcljs5sw4a.execute-api.us-east-1.amazonaws.com/prod/";

const Assistant: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [submitBtnText, setSubmitBtnText] = useState("Generate");
  const [data, setData] = useState([]);

  const submitHandler = async () => {
    setSubmitBtnText("Generating...");
    try {
      const response = await axios.get(
        `${API_URL}/generate-keywords-snippets-api?user_input=${userInput}`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLeftArrowClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setData([]);
    setUserInput("");
    setSubmitBtnText("Generate");
  };

  return (
    <div
      className={`flex gap-2 pt-8 relative p-6 flex-col items-center bg-[#36393F] backdrop-blur-lg rounded-lg max-w-sm w-full`}
    >
      {data.length > 0 && (
        <button onClick={handleLeftArrowClick}>
          <LeftArrow className="text-info-text absolute left-6 top-6 cursor-pointer hover:text-gray-200 transition" />
        </button>
      )}
      <img src={Logo.src} alt="brand logo" width={48} />
      <h1 className="text-2xl text-info-text font-bold">Brand Assistant</h1>
      {data.length ? (
        <GeneratedBrand data={data} userInput={userInput} />
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
