import { postOrder } from "@/api/order";
import { payOrder } from "@/api/payment";
import { updateProductQuantity } from "@/api/product";
import { CartContext } from "@/lib/hook/Context/cartItem";
import { user } from "@/lib/redux/selector/selector";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useSelector } from "react-redux";

const OrderDetails = () => {
  const { cart } = useContext(CartContext);
  const dataUser = useSelector(user);
  const router = useRouter();
  const totalOrder = cart.reduce((total, items) => {
    return total + items.total;
  }, 0);

  const cartOrder = cart.map((item) => ({
    id: item._id,
    quantity: item.quantity,
    total: item.total,
  }));

  const PaymentOrder = async () => {
    const order = {
      username: dataUser.username,
      product: cartOrder,
      totalOrder: totalOrder,
    };
    updateProductQuantity(cartOrder);
    postOrder(order);
    // const res = await payOrder(order);
    // if (res) {
    //   router.push(res.hrefSandbox);
    // }
  };

  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3 h-[800px] overflow-auto">
          {cart.map((items) => (
            <div
              key={items._id}
              className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
            >
              <img
                src={items.urlImage}
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    {items.title}
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      -{" "}
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      value={items.quantity}
                      min="1"
                    />
                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      +{" "}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">{items.total} $</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Price</p>
            <p className="text-gray-700">${totalOrder}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Sale</p>
            <p className="text-gray-700">0%</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold"> {totalOrder} USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button
            className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
            onClick={PaymentOrder}
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};
export default OrderDetails;
