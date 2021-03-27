import React, { useState } from "react";

export const Input = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      {inputValue && <h3>{inputValue.length}</h3>}
      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          if (!event.target.value.includes("a")) {
            console.log(event);
            setInputValue(event.target.value);
          }
        }}
      />
    </div>
  );
};
