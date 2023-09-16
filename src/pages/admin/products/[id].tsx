import { getItemProduct } from "@/api/product";
import { Product } from "@/lib/domain/product";
import EditButton from "@/lib/view/components/edit-button";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Details = () => {
  const [items, setItems] = useState<Product>();
  const [loading, setLoading] = useState(true);
  const { query } = useRouter();
  const id = query.id;

  useEffect(() => {
    const fetch = async () => {
      const res = await getItemProduct(id);
      setItems(res);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <section className="text-gray-700 body-font overflow-hidden dark:bg-boxdark bg-white">
      <div className="container px-5 pt-5 pb-15 mx-auto">
        <button className="pb-4">
          <Link href="/admin/products">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#FFFF"
              id="arrow-back"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
            </svg>
          </Link>
        </button>
        <div className="mx-auto flex flex-wrap">
          {loading ? (
            <img
              alt="ecommerce"
              className="h-[505px] w-full"
              src={"/images/icons/no-images.svg"}
            />
          ) : (
            <img
              alt="ecommerce"
              className="w-full object-cover object-center rounded border border-gray-200"
              src={items?.urlImage}
            />
          )}

          <div className="w-full lg:py-6 mt-6 lg:mt-0">
            <EditButton
              text={items?.title}
              classInput={
                "text-gray-900 dark:text-gray-50 text-3xl title-font font-medium"
              }
            >
              <h1 className="text-gray-900 dark:text-gray-50 text-3xl title-font font-medium mb-1">
                {items?.title}
              </h1>
            </EditButton>
            <h2 className="text-sm title-font text-gray-500 dark:text-white tracking-widest">
              Category : {items?.category}
            </h2>
            <h2 className="text-sm title-font text-gray-500 dark:text-white tracking-widest">
              Status :{" "}
              {items?.quantity == 0 ? (
                <span className="text-red-600"> SOLD</span>
              ) : (
                <span className="text-green-500">
                  Stocking ({items?.quantity})
                </span>
              )}
            </h2>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3 dark:text-gray-400">
                  4 Reviews
                </span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed dark:text-gray-200">
              {items?.description}
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                {/* <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button> */}
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900 dark:text-gray-300">
                ${items?.quantity}
              </span>
              <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Details;
