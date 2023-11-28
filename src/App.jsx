import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import StoreProvider from "./context/Store";
import CartButton from "./components/CartButton";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <StoreProvider>
      <main className="bg-[#121415] flex items-center justify-center min-h-screen p-5 md:p-10 font-arimo">
        <div className="relative bg-[#1B1D1E] flex items-center justify-center flex-col p-5 md:p-10 w-full md:max-w-screen-xl rounded-lg">
          <header className="flex items-center justify-center flex-col gap-2 mb-20">
            <h1 className="text-white md:text-4xl text-2xl my-4 font-bold">
              Nuestra colección
            </h1>
            <p className="text-[#585C63] text-center mb-4">
              Aquí tienes todos nuestros productos, una selección de
              <span className="md:block"></span>productos únicos desde
              diferentes orígenes.
            </p>
            <CartButton setOpen={setOpen} />
          </header>
          <ProductList />
          <Cart open={open} setOpen={setOpen} />
        </div>
      </main>
    </StoreProvider>
  );
}

export default App;
