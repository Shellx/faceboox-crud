import React from "react";

const InputField = ({ handleChange, value }) => {
  return (
    <div className="w-full  rounded-full">
      <textarea
        placeholder="Whats on your mind, Aziz?"
        className="border shadow-lg w-full py-2 px-4 h-40 rounded-md resize-none"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default InputField;
