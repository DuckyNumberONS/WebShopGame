import React, { useCallback, useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PopupContext } from "@/lib/hook/Context/popup";
import { Product, ProductPost } from "@/lib/domain/product";
import Input from "../../input";
import Select from "../../select";
import Switcher from "../../switch";
import { postProduct } from "@/api/product";
import Confirm from "@/lib/view/components/confirm";

interface PropsDefaultValue {
  defaultValue?: Product;
  fuctionApi: any;
  className: string;
}

const Formroduct: React.FC<PropsDefaultValue> = ({
  defaultValue,
  fuctionApi,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  const { popup, setPopup } = useContext(PopupContext);
  const [confirm, setConfirm] = useState(false);
  const [product, setProduct] = useState({});

  const onSubmit: SubmitHandler<ProductPost> = (data) => {
    setProduct(data);
    setConfirm(true);
  };

  const handleClose = () => {
    document.body.classList.remove("disable-scroll");
    setPopup(false);
  };

  const options = [
    {
      value: "game",
      text: "Game",
    },
    {
      value: "study",
      text: "Study",
    },
    {
      value: "entertainment",
      text: "Entertainment",
    },
  ];

  return (
    <>
      {popup && (
        <>
          {confirm ? (
            <Confirm
              className="absolute w-full h-full top-0 bg-black-shadow"
              classPositionBox="top-28"
              fuctionApi={fuctionApi}
              setConfirm={setConfirm}
              data={product}
            />
          ) : (
            <div className="absolute w-full h-full top-0 bg-black-shadow">
              <div className="w-full max-w-6xl mx-auto relative top-28">
                <form
                  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                  action="#"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="w-full relative">
                    <button
                      className="flex absolute right-0"
                      onClick={handleClose}
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mb-4">
                    <Input
                      label="Tile"
                      defaultValue={defaultValue ? defaultValue.title : ""}
                      name="title"
                      type="text"
                      register={register}
                      errors={errors}
                      placeholder="Title"
                      errorsOption={{
                        required: { value: true, message: "Title is empty" },
                        maxLength: {
                          value: 50,
                          message: "Title cannot exceed 50 characters",
                        },
                      }}
                      classLabel="block text-gray-700 text-sm font-bold mb-2"
                      classInput="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <Input
                      label="Description"
                      defaultValue={
                        defaultValue ? defaultValue.description : ""
                      }
                      name="description"
                      type="text"
                      register={register}
                      errors={errors}
                      placeholder="Description"
                      errorsOption={{
                        required: {
                          value: true,
                          message: "Description is empty",
                        },
                        maxLength: {
                          value: 500,
                          message: "Description cannot exceed 500 characters",
                        },
                      }}
                      classLabel="block text-gray-700 text-sm font-bold mb-2"
                      classInput="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <Input
                      label="Price"
                      defaultValue={defaultValue ? defaultValue.price : 0}
                      name="price"
                      type="number"
                      register={register}
                      errors={errors}
                      placeholder="Price"
                      errorsOption={{
                        required: { value: true, message: "Price is empty" },
                      }}
                      classLabel="block text-gray-700 text-sm font-bold mb-2"
                      classInput="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <Input
                      label="Quantity"
                      defaultValue={defaultValue ? defaultValue.quantity : 0}
                      name="quantity"
                      type="number"
                      register={register}
                      errors={errors}
                      placeholder="Quantity"
                      errorsOption={{
                        required: { value: true, message: "Quantity is empty" },
                      }}
                      classLabel="block text-gray-700 text-sm font-bold mb-2"
                      classInput="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <Input
                      label="UrlImage"
                      defaultValue={defaultValue ? defaultValue.urlImage : ""}
                      name="urlImage"
                      type="text"
                      register={register}
                      errors={errors}
                      placeholder="UrlImage"
                      errorsOption={{
                        required: { value: true, message: "UrlImage is empty" },
                      }}
                      classLabel="block text-gray-700 text-sm font-bold mb-2"
                      classInput="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <Select
                      label="Category"
                      defaultValue={
                        defaultValue ? defaultValue.category : "game"
                      }
                      name="category"
                      register={register}
                      errors={errors}
                      textSelect="Choose category"
                      errorsOption={{
                        required: { value: true, message: "Category is empty" },
                      }}
                      classLabel="block text-gray-700 text-sm font-bold mb-2"
                      classSelect="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      options={options}
                    />
                  </div>
                  <div className="mb-4">
                    <Switcher
                      defaultValue={defaultValue ? defaultValue.isHot : false}
                      name="isHot"
                      register={register}
                      errors={errors}
                      label="Best seller"
                      classLabel="block text-gray-700 text-sm font-bold mb-2"
                    />
                  </div>
                  <button
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
export default Formroduct;
