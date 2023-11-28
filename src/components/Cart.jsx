import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Store } from "../context/Store";

export default function Cart({ open, setOpen }) {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const handleRemoveToCart = (id) => {
    dispatch({ type: "CART_REMOVE", payload: { id } });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll md:overflow-hidden bg-[#1B1D1E] shadow-xl">
                    <div className="flex-1 overflow- md:overflow-hidden px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-semibold text-white">
                          Carrito de la compra
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="#ffffff"
                            >
                              <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div>
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-[#6F757D]"
                          >
                            {cartItems.length === 0 ? (
                              <div className="flex items-center justify-center h-screen">
                                <div className="flex items-center flex-col gap-6">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="96"
                                    height="96"
                                    viewBox="0 0 24 24"
                                    fill="#ffffff"
                                  >
                                    <path d="M12 2c-4.963 0-9 4.038-9 9v8h.051c.245 1.691 1.69 3 3.449 3 1.174 0 2.074-.417 2.672-1.174a3.99 3.99 0 0 0 5.668-.014c.601.762 1.504 1.188 2.66 1.188 1.93 0 3.5-1.57 3.5-3.5V11c0-4.962-4.037-9-9-9zm7 16.5c0 .827-.673 1.5-1.5 1.5-.449 0-1.5 0-1.5-2v-1h-2v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1H8v1c0 1.845-.774 2-1.5 2-.827 0-1.5-.673-1.5-1.5V11c0-3.86 3.141-7 7-7s7 3.14 7 7v7.5z"></path>
                                    <circle cx="9" cy="10" r="1.5"></circle>
                                    <circle cx="15" cy="10" r="1.5"></circle>
                                  </svg>
                                  <span className="text-white font-semibold">
                                    No hay productos en el carro.
                                  </span>
                                </div>
                              </div>
                            ) : (
                              cartItems.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                                    <img
                                      src={product.images[0]}
                                      alt={product.title}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>
                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-white">
                                        <h3>
                                          <a href="#">{product.title}</a>
                                        </h3>
                                        <p className="ml-4">
                                          {product.price} &euro;
                                        </p>
                                      </div>
                                      <p className="mt-1 text-sm text-[#6F757D]">
                                        {product.category["name"]}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-[#6F757D]">
                                        Cantidad: x1
                                      </p>

                                      <div className="flex">
                                        <button
                                          onClick={() =>
                                            handleRemoveToCart(product.id)
                                          }
                                          type="button"
                                          className="text-[#D06756] transition ease duration-300 hover:text-[#C15241]"
                                        >
                                          Eliminar
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-[#6F757D] px-4 py-6 sm:px-6">
                      <div className="flex justify-between font-semibold text-white">
                        <p>Subtotal</p>
                        <p>
                          {cartItems.reduce(
                            (accumulator, currentValue) =>
                              accumulator + currentValue.price,
                            0
                          )}
                          &euro;
                        </p>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-lg bg-[#6F757D] text-white px-6 py-3 text-base font-semibold transition ease duration-300"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          <button
                            type="button"
                            className="font-medium text-[#6F757D]"
                            onClick={() => setOpen(false)}
                          >
                            Seguir comprando
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
