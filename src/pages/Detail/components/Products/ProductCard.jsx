import React from "react";
import IdrFormat from "../../../../utils/IdrFormat";

const ProductCard = ({ title, price, product_url, img_url }) => {
  return (
    <a
      href={product_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-md text-tp-dark w-28">
      <img
        src={img_url}
        alt={title}
        className="w-32 h-32 object-cover rounded-t-md"
      />
      <div className="block p-2">
        <p className="line-clamp-1 text-[10px] mb-1">{title}</p>
        <p className="text-[10px] ">Rp {IdrFormat(price)}</p>
      </div>
    </a>
  );
};

export default ProductCard;
