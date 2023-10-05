import { getOrder } from "@/api/order";
import React, { useEffect, useState } from "react";
import { Order } from "@/lib/domain/order";
import Table from "@/lib/view/components/table";
import { Columns } from "@/lib/view/components/table/table";

const Order = () => {
  const [data, setData] = useState<Order[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await getOrder();
      setData(res);
    };
    fetch();
  }, []);

  const columns: Columns[] = [
    {
      title: "Order Id",
      span: 2,
      render: (items) => (
        <p className="text-sm text-black dark:text-white">
          {items._id.substring(10)}
        </p>
      ),
    },
    {
      title: "User Id",
      span: 1,
      render: (items) => (
        <p className="text-sm text-black dark:text-white">
          {items.username.substring(12)}
        </p>
      ),
    },
    {
      title: "Status",
      span: 1,
      render: (items) => (
        <p className="text-sm text-black dark:text-white">pending</p>
      ),
    },
    {
      title: "Quantity",
      span: 1,
      render: (items) => (
        <p className="text-sm text-black dark:text-white">
          {items.product.length}
        </p>
      ),
    },
    {
      title: "Total Price",
      span: 1,
      render: (items) => (
        <p className="text-sm text-meta-3">${items.totalOrder}</p>
      ),
    },
    {
      title: "Time Create",
      span: 1,
      render: (items) => (
        <p className="text-sm text-black dark:text-white">
          <p className="text-sm text-black dark:text-white">
            {items.createdAt.substring(12, 19)}
            <br />
            {items.createdAt.substring(0, 10)}
          </p>
        </p>
      ),
    },
  ];

  return (
    <>
      {/* <Formroduct fuctionApi={postProduct} /> */}
      <Table
        title="Order"
        columns={columns}
        data={data}
        linkDetails="/admin/order/"
      />
    </>
  );
};
export default Order;
