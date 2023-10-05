import { getListProduct, postProduct } from "@/api/product";
import React, { useContext, useEffect, useState } from "react";
import { Product } from "@/lib/domain/product";
import { useRouter } from "next/router";
import { PopupContext } from "@/lib/hook/Context/popup";
import Formroduct from "@/lib/view/components/form/form-product";
import Table from "@/lib/view/components/table";
import { Columns } from "@/lib/view/components/table/table";

const Product = () => {
  const { push } = useRouter();
  const [data, setData] = useState<Product[]>([]);
  const { popup, setPopup } = useContext(PopupContext);

  useEffect(() => {
    const fetch = async () => {
      const res = await getListProduct();
      setData(res);
    };
    fetch();
  }, []);

  const handleAddProduct = () => {
    setPopup(true);
  };

  const columns: Columns[] = [
    {
      title: "Product Name",
      span: 2,
      render: (items) => (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="h-full w-15 rounded-md">
            <img src={`${items.urlImage}`} alt="Product" />
          </div>
          <p className="text-sm text-black dark:text-white">
            {items.title.substring(0, 20) + "...."}
          </p>
        </div>
      ),
    },
    {
      title: "Category",
      span: 1,
      render: (items) => (
        <p className="text-sm text-black dark:text-white">{items.category}</p>
      ),
    },
    {
      title: "Price",
      span: 1,
      render: (items) => (
        <p className="text-sm text-black dark:text-white">${items.price}</p>
      ),
    },
    {
      title: "Quantity",
      span: 1,
      render: (items) => (
        <p
          className={`text-sm ${
            items.quantity == 0 ? "text-red-600" : "text-black dark:text-white"
          }  `}
        >
          {items.quantity == 0 ? "Solds" : items.quantity}
        </p>
      ),
    },
    {
      title: "Profit",
      span: 1,
      render: (items) => <p className="text-sm text-meta-3">${items.price}</p>,
    },
    {
      title: "Time Create",
      span: 1,
      render: (items) => (
        <p className="text-sm text-black dark:text-white">
          {items.createdAt.substring(12, 19)}
          <br />
          {items.createdAt.substring(0, 10)}
        </p>
      ),
    },
  ];

  return (
    <>
      {/* <Formroduct fuctionApi={postProduct} /> */}
      <Table
        title="Products"
        columns={columns}
        data={data}
        linkDetails="/admin/products/"
      />
    </>
  );
};
export default Product;
