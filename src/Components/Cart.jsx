import { useState } from "react";

function Cart(props) {
  const text = "Fall Limited Edition Sneakers";
  const [prepairProducts, setPrepairProducts] = useState(true);

  function handleDelete() {
    setPrepairProducts(false);
    props.setAmount(0);
  }

  function Buy() {
    return (
      <>
        <div className="flex justify-between items-center text-slate-400 px-8 py-6 font-semibold">
          <img
            src="/images/image-product-1-thumbnail.jpg"
            alt=""
            className="w-14 rounded-lg"
          />
          <ul>
            <li>{`${text.substring(0, 23)}...`}</li>
            <li>
              $125.00 x {props.amount} =
              <span className="font-bold"> {`$ ${props.amount * 125}`}</span>
            </li>
          </ul>
          <img
            src="/images/icon-delete.svg"
            alt=""
            className="cursor-pointer"
            onClick={handleDelete}
          />
        </div>
        <div className="mx-8 mb-6">
          <button className="w-full mt-4 cursor-pointer p-4 rounded-lg bg-orange-500 text-white font-bold shadow-lg shadow-orange-300">
            Checkout
          </button>
        </div>
      </>
    );
  }
  function DeleteAll() {
    return (
      <h2 className="flex justify-center items-center text-gray-500 font-bold h-52 ">
        Your Cart Is Empty.
      </h2>
    );
  }
  return (
    <>
      <article className="bg-white rounded-2xl shadow-2xl p-0 absolute z-50 right-3 left-3 top-24 md:left-auto md:right-[100px] md:w-96 md:top-[75px]">
        <h2 className="font-bold border-b-[1px] border-slate-300 pb-4 mb-4 p-8 ">
          Cart
        </h2>
        {prepairProducts === false || props.amount === 0 ? (
          <DeleteAll />
        ) : (
          <Buy />
        )}
      </article>
    </>
  );
}

export default Cart;
