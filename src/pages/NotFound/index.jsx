import React from "react";

const NotFound = () => {
  return (
    <div className="bg-tp-dark min-h-screen min-w-screen grid place-content-center text-center">
      <h3 className="text-tp-secondary text-2xl mb-3">Ooops.....</h3>
      <h1 className="text-tp-secondary font-bold text-9xl mb-3">
        4<span className="text-tp-secondary">0</span>4
      </h1>
      <p className="text-tp-secondary text-4xl font-semibold mb-3">
        PAGE NOT FOUND
      </p>
    </div>
  );
};

export default NotFound;
