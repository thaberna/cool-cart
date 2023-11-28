import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();

      if (data.length > 0) {
        setProducts(data);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="grid md:grid-cols-3 grid-cols-1 gap-8">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  );
}
