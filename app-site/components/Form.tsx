import React from "react";

interface IForm {
  userInput: string;
  setUserInput: (userInput: string) => void;
  submitHandler: () => void;
  submitBtnText: string;
}

const Form: React.FC<IForm> = ({
  setUserInput,
  userInput,
  submitHandler,
  submitBtnText,
}) => {
  return (
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
        disabled={submitBtnText === "Generating..."}
        className={`${
          submitBtnText === "Generating..." &&
          "bg-hover-blurple border-hover-blurple cursor-wait"
        } w-full px-4 py-2 border border-blurple hover:border-hover-blurple rounded-[0.175rem] text-[#ffffff] font-bold tracking-[0.035em] bg-blurple hover:bg-hover-blurple mt-6 transition-colors duration-250 ease-in`}
      >
        {submitBtnText}
      </button>
    </>
  );
};

export default Form;
