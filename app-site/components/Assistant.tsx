import React, { useState } from "react";
import axios from "axios";

import Logo from "./static/logo.png";

const API_URL: String =
  "https://zcljs5sw4a.execute-api.us-east-1.amazonaws.com/prod/";

const Assistant: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [snippet, setSnippet] = useState("");
  const [keywords, setKeywords] = useState([] as string[]);

  const submitHandler = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/generate-keywords-snippets-api?user_input=${userInput}`
      );
      setSnippet(response.data[0]); // Extract the snippet from the array at index 0
      setKeywords(response.data[1]); // Extract the keywords from the array at index 1
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-2 p-6 flex-col items-center bg-gray-600 rounded-lg max-w-sm h-96 w-full">
      <img src={Logo.src} alt="brand logo" width={48} />
      <h1 className="text-2xl font-bold">Brand Assistant</h1>
      <p className="text-center text-lg">
        Type your brand and I will generate some keywords as well as some
        awesome description for you.
      </p>
      <input
        type="text"
        placeholder="Laptop"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
        className="rounded-md my-6 w-full text-gray-700 bg-white px-4 py-2 transition duration-200 border focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-opacity-60"
      />
      <button
        type="submit"
        onClick={submitHandler}
        className="w-full px-4 py-2 border focus:border-blue-500 rounded-md focus:ring-4"
      >
        Generate
      </button>
    </div>
  );
};

export default Assistant;
