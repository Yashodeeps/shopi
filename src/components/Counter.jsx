import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div id="counter">
      <button onClick={() => setCount(count + 1)}>
        Increase count {count}
      </button>
    </div>
  );
};

export default Counter;
