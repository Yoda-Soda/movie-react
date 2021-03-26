import React, { useState } from "react";

export const Accordion = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div>
      {isToggled ? <h3>Show me</h3> : null}
      {/* {isToggled && <h3>Show Me</h3>} */}
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
    </div>
  );
};
