import React from "react";

interface IGeneratedBrand {
  data: any;
  userInput: String;
}

const GeneratedBrand: React.FC<IGeneratedBrand> = ({ data, userInput }) => {
  const [snippet, setSnippet] = React.useState("");
  const [keywords, setKeywords] = React.useState([] as String[]);

  React.useEffect(() => {
    if (data) {
      setSnippet(data[0]); // Extract the snippet from the array at index 0
      setKeywords(data[1]); // Extract the keywords from the array at index 1
    }
  }, [data]);

  return (
    <div>
      <p className="text-center text-[1rem] flex-wrap-reverse text-info-text">
        Your input: {userInput}
      </p>
      <div className="mt-4">
        <p className="bg-[#303339] py-[0.5rem] px-[0.75rem] w-full text-info-text rounded-[0.175rem] outline-none border-[1.75px] border-solid border-[#000000] border-opacity-40 hover:border-opacity-100 transition-all duration-250 ease-linear">
          {snippet}
        </p>
        <div className="mt-4 flex flex-row gap-2 flex-wrap overflow-hidden">
          {keywords.map((keyword, index) => {
            return (
              <div
                key={index}
                className="bg-[#303339] focus:border-[#00b0f4] py-[0.25rem] text-sm px-[0.5rem] text-info-text placeholder-gray-500 rounded-[0.175rem] outline-none border-[1.75px] border-solid border-[#000000] border-opacity-40 hover:border-opacity-100 transition-all duration-250 ease-linear"
              >
                {keyword}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GeneratedBrand;
