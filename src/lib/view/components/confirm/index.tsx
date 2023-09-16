import { postProduct } from "@/api/product";
import { PopupContext } from "@/lib/hook/Context/popup";
import Image from "next/image";
import React, { useContext } from "react";

interface DataObject {
  [key: string]: any;
}
interface Props {
  setConfirm: (value: boolean) => void;
  data: DataObject;
}

const Confirm: React.FC<Props> = ({ setConfirm, data }) => {
  const { setPopup } = useContext(PopupContext);
  const keys = data ? Object.keys(data) : [];

  const handleClose = () => {
    document.body.classList.remove("disable-scroll");
    setPopup(false);
  };

  const handleBack = () => {
    setConfirm(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConfirm(false);
    setPopup(false);
    postProduct(data);
  };
  return (
    <div className="absolute w-full h-full top-0 bg-black-shadow">
      <div className="w-full max-w-6xl mx-auto relative top-28 ">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          action="#"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex justify-between mb-4">
            <button onClick={handleBack}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                id="arrow-back"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
              </svg>
            </button>
            <button className="flex" onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                id="close"
              >
                <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
              </svg>
            </button>
          </div>
          {keys.map((items: string) => (
            <div className="mb-4" key={items}>
              {items.toLowerCase().includes("url") ? (
                <>
                  <h2 className="block text-gray-700 text-sm font-bold mb-2">
                    {items[0].toLocaleUpperCase() + items.slice(1)}:
                  </h2>
                  <img src={data[items]} alt={items} width={300} height={200} />
                </>
              ) : (
                <h2 className="block text-gray-700 text-sm font-bold mb-2">
                  {items[0].toLocaleUpperCase() + items.slice(1)}: {data[items]}
                </h2>
              )}
            </div>
          ))}
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};
export default Confirm;
