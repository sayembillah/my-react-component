import React from "react";

const Title = ({ children }) => {
  return (
    <>
      <h1 class="text-balance text-2xl font-semibold tracking-tight text-white sm:text-[length:clamp(2rem,3.75vw,3rem)]/tight text-center">
        {children}
      </h1>
    </>
  );
};

export default Title;
