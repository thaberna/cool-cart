import React, { useContext, useEffect, useState } from "react";
import { Store } from "../context/Store";

export default function CartButton({ setOpen }) {
  const [items, setItems] = useState(0);

  const { state } = useContext(Store);
  const { cart } = state;

  useEffect(() => {
    setItems(cart.cartItems.length);
  }, [cart.cartItems]);

  return (
    <div className="relative">
      <span className="absolute top-[-10px] right-[-10px] bg-[#F5C768] px-2 py-1 inline-flex items-center rounded-full text-xs font-bold">
        {items}
      </span>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center gap-2 bg-[#6F757D] text-white text-sm font-bold rounded-lg px-4 py-2 transition ease duration-300 hover:bg-[#121415]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#ffffff"
        >
          <path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"></path>
          <circle cx="10.5" cy="19.5" r="1.5"></circle>
          <circle cx="16.5" cy="19.5" r="1.5"></circle>
        </svg>
        <span>Ver carrito</span>
      </button>
    </div>
  );
}
