import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const NavDetail = ({ title }) => {
  const handleBack = () => {
    window.location.href = "/";
  };
  return (
    <div className="flex items-center gap-4 py-4">
      <ArrowLeftIcon className="h-6 cursor-pointer" onClick={handleBack} />
      <p className="text-lg line-clamp-1">{title}</p>
    </div>
  );
};

export default NavDetail;
