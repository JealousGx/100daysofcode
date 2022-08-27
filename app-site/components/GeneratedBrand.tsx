import React from "react";
import Clipboard from "./static/Clipboard";

interface IGeneratedBrand {
  data: any;
  userInput: string;
}

const GeneratedBrand: React.FC<IGeneratedBrand> = ({ data, userInput }) => {
  const [snippet, setSnippet] = React.useState("");
  const [keywords, setKeywords] = React.useState([] as string[]);

  React.useEffect(() => {
    if (data) {
      setSnippet(data[0]); // Extract the snippet from the array at index 0
      setKeywords(data[1]); // Extract the keywords from the array at index 1
    }
  }, [data]);

  return (
    <div>
      <p className="text-[1rem] flex-wrap-reverse text-info-text">
        <span className="font-bold">Your input:</span> {userInput}
      </p>
      <div className="flex items-center justify-center">
        <hr className="border border-gray-600 w-2/3 mt-4 rounded-lg" />
      </div>
      <div className="mt-2">
        <div className="flex flex-col gap-2 mb-2">
          <h3 className="text-[1rem] font-bold text-info-text">Snippet:</h3>
          <p className="bg-[#303339] relative group py-[0.5rem] px-[0.75rem] w-full text-info-text rounded-[0.175rem] outline-none border-[1.75px] border-solid border-[#000000] border-opacity-40 hover:border-opacity-100 transition-all duration-250 ease-linear">
            <div
              onClick={() => navigator.clipboard.writeText(snippet)}
              className={`bg-[#292c31] absolute right-2 w-8 h-8 hidden transition cursor-pointer items-center justify-center rounded-[0.175rem] z-10 group-hover:flex`}
            >
              <Clipboard />
            </div>
            {snippet}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <hr className="border border-gray-600 w-2/3 mt-2 rounded-lg" />
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <h3 className="text-[1rem] font-bold text-info-text">Keywords:</h3>
          <div className=" flex flex-row gap-[0.4rem] flex-wrap overflow-hidden">
            {keywords.map((keyword, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#00468b] bg-opacity-40 hover:bg-opacity-80 py-[0.25rem] text-sm px-[0.5rem] text-info-text rounded-2xl outline-none border-[1.75px] border-solid border-[#00468b] border-opacity-40 hover:border-opacity-100 transition-all duration-250 ease-linear"
                >
                  {keyword}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratedBrand;
