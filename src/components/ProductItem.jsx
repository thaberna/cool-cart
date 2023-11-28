import { useContext } from "react";
import { Store } from "../context/Store";

export default function ProductItem({ product }) {
  const { dispatch } = useContext(Store);
  const { images, title, category, price } = product;

  const addToCart = (product) => {
    dispatch({ type: "CART_ADD", payload: { ...product } });
  };

  return (
    <article>
      <div className="relative">
        <img
          className="rounded-lg w-full h-48 object-cover object-center"
          src={images[0]}
          alt={title}
        />
        <span className="absolute top-2 left-2 rounded-xl bg-[#F5C768] text-xs font-bold px-2 py-1">
          {category["name"]}
        </span>
        <button
          className="absolute bottom-2 right-2 bg-[#6F757D] rounded-full p-2 transition ease duration-300 hover:bg-[#121415]"
          onClick={() => addToCart(product)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#ffffff"
          >
            <path d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z"></path>
          </svg>
        </button>
      </div>
      <div className="flex items-center justify-between gap-2">
        <h2 className="my-3 truncate text-white">{title}</h2>
        <span className="bg-[#BFE2CC] px-2 py-1 text-xs font-bold rounded-md">
          {price}&euro;
        </span>
      </div>
    </article>
  );
}
