import React, { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PopupContext } from "@/lib/hook/Context/popup";
import { Product, ProductPost } from "@/lib/domain/product";
import Confirm from "@/lib/view/components/confirm";
import { User } from "@/lib/domain/user";

interface PropsDefaultValue {
  fuctionApi: (data: any) => Promise<Product[] | User[]>;
  className: string;
  children: (props: any) => React.JSX.Element;
}

const Form: React.FC<PropsDefaultValue> = ({ fuctionApi, children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product | User>();

  const { popup, setPopup } = useContext(PopupContext);
  const [confirm, setConfirm] = useState(false);
  const [datas, setData] = useState({});

  const onSubmit: SubmitHandler<ProductPost | User> = (data) => {
    setData(data);
    setConfirm(true);
  };

  const handleClose = () => {
    setPopup(false);
  };

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
              data={datas}
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
                  {children({ registers: register, error: errors })}
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
export default Form;
