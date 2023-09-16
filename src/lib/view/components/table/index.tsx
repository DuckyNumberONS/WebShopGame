import React from "react";

interface Props {
  key?: string;
  name?: string;
  email?: string;
  phonenumber?: string;
  birday?: string;
  address?: string;
  role?: string;
  class?: string;
}

const Table = ({
  key = "Loading....",
  name = "Loading....",
  email = "Loading....",
  phonenumber = "Loading....",
  birday = "Loading....",
  address = "Loading....",
  role = "Loading....,",
}: Props) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Products
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Product Name</p>
        </div>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-2 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              {/* <img src={ProductOne} alt="Product" /> */}
            </div>
            <p className="text-sm text-black dark:text-white">
              Apple Watch Series 7
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
