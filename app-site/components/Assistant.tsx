import React, { useState } from "react";
import axios from "axios";

import Logo from "./static/logo.png";
import GeneratedBrand from "./GeneratedBrand";

const API_URL: String =
  "https://zcljs5sw4a.execute-api.us-east-1.amazonaws.com/prod/";

const Assistant: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState([]);

  const submitHandler = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/generate-keywords-snippets-api?user_input=${userInput}`
      );
      setData(response.data); // Extract the snippet from the array at index 0
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`flex gap-2 pt-8 p-6 flex-col items-center bg-[#36393F] backdrop-blur-lg rounded-lg max-w-sm ${
        data ? "h-[28rem]" : "h-96"
      } w-full`}
    >
      <img src={Logo.src} alt="brand logo" width={48} />
      <h1 className="text-2xl text-info-text font-bold">Brand Assistant</h1>
      {data ? (
        <GeneratedBrand data={data} userInput={userInput} />
      ) : (
        <>
          <p className="text-center text-[1rem] flex-wrap-reverse text-info-text">
            Type your brand and I will generate some keywords as well as some
            awesome description for you.
          </p>
          <input
            type="text"
            placeholder="Laptop"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
            className="mt-4 bg-[#303339] focus:border-[#00b0f4] py-[0.5rem] px-[0.75rem] w-full text-info-text placeholder-gray-500 rounded-[0.175rem] outline-none border-[1.75px] border-solid border-[#000000] border-opacity-40 hover:border-opacity-100 transition-all duration-250 ease-linear"
          />
          <button
            type="submit"
            onClick={submitHandler}
            className="w-full px-4 py-2 border border-blurple hover:border-hover-blurple rounded-[0.175rem] text-[#ffffff] font-bold tracking-[0.035em] bg-blurple hover:bg-hover-blurple mt-6 transition-colors duration-250 ease-in"
          >
            Generate
          </button>
        </>
      )}
    </div>
  );
};

export default Assistant;
