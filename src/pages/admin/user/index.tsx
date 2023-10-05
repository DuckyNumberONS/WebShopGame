import { postProduct } from "@/api/product";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PopupContext } from "@/lib/hook/Context/popup";
import Formroduct from "@/lib/view/components/form/form-product";
import { getUser } from "@/api/user";
import { User } from "@/lib/domain/user";
import Table from "@/lib/view/components/table";
import { Columns } from "@/lib/view/components/table/table";

const User = () => {
  const [data, setData] = useState<User[]>([]);
  const { popup, setPopup } = useContext(PopupContext);

  useEffect(() => {
    const fetch = async () => {
      const res = await getUser();
      setData(res);
    };
    fetch();
  }, []);

  const handleAddProduct = () => {
    setPopup(true);
  };

  const columns: Columns[] = [
    {
      title: "ID",
      span: 2,
      render: (items) => (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-black dark:text-white">{items._id}</p>
        </div>
      ),
    },
    {
      title: "User Name",
      span: 1,
      render: (items) => (
        <p className="text-sm text-black dark:text-white">
          {items.username.length > 16
            ? items.username.substring(0, 16) + "..."
            : items.username}
        </p>
      ),
    },
    {
      title: "Email",
      span: 2,
      render: (items) => (
        <p className="text-sm text-black dark:text-white">{items.email}</p>
      ),
    },
    {
      title: "Role",
      span: 1,
      render: (items) => (
        <>
          {items.admin ? (
            <p className="text-sm text-black dark:text-red-600">Admin</p>
          ) : (
            <p className="text-sm text-black dark:text-green-400">Member</p>
          )}
        </>
      ),
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
        title="User"
        columns={columns}
        data={data}
        linkDetails="/admin/user/"
      />
    </>
  );
};
export default User;
