import React from "react";

export default function Button({ name }) {
  return (
    <div>
      <button className="btn" onClick={console.log("clicked")}>
        {name}
      </button>
    </div>
  );
}
