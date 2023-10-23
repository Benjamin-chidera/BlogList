/* eslint-disable react/prop-types */
import React, { useState } from "react";

export const Btn = ({ post }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
    <div>
        {show ? post.content : `${post.content.substring(0, 40)}`}{" "}
        <p
          onClick={() => {
            setShow(!show);
          }}
          className=" underline"
        >
          see more
        </p>
      </div>
    </div>
  );
};
