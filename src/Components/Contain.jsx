import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import minus from "/images/icon-minus.svg";
import plus from "/images/icon-plus.svg";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Contain(props) {
  const data = [
    {
      id: 1,
      mainImage: "./images/image-product-1.jpg",
      thumbNail: "./images/image-product-1-thumbnail.jpg",
    },
    {
      id: 2,
      mainImage: "./images/image-product-2.jpg",
      thumbNail: "./images/image-product-2-thumbnail.jpg",
    },
    {
      id: 3,
      mainImage: "./images/image-product-3.jpg",
      thumbNail: "./images/image-product-3-thumbnail.jpg",
    },
    {
      id: 4,
      mainImage: "./images/image-product-4.jpg",
      thumbNail: "./images/image-product-4-thumbnail.jpg",
    },
  ];
  // const [amount, setAmount] = useState(0);

  const [products] = useState(data);

  const [value, setValue] = useState(0);

  const [slideIndex, setSlideIndex] = useState(1);

  const [showLightBox, setShowLightBox] = useState(false);

  const { mainImage } = data[value];

  //   Hanlders

  function handleMinus() {
    if (props.amount > 0) {
      props.setAmount(props.amount - 1);
    }
  }

  function nextSlide() {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === products.length) {
      setSlideIndex(1);
    }
  }
  function previuosSlide() {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(products.length);
    }
  }

  function LightBox({
    products,
    previuosSlide,
    nextSlide,
    slideIndex,
    setShowLightBox,
  }) {
    return (
      <>
        <article className="bg-black fixed top-0 bottom-0 left-0 right-0 z-20 bg-opacity-70">
          <div className="flex justify-center items-center h-screen ">
            {products.map((item, index) => (
              <div
                key={index}
                className={slideIndex === index + 1 ? "relative" : "hidden"}
              >
                <img
                  src="./images/icon-close.svg"
                  alt=""
                  className="absolute top-[-40px] right-0 w-5 cursor-pointer"
                  onClick={() => setShowLightBox(false)}
                />

                <img
                  className="h-[450px] lg:w-full md:rounded-2xl m-w-full"
                  src={item.mainImage}
                  alt=""
                />

                <ul>
                  <li>
                    <button
                      onClick={previuosSlide}
                      className="rounded-full cursor-pointer w-10 h-10 shadow absolute left-[-20px] -translate-y-1/2 top-1/2 bg-white"
                    >
                      <KeyboardArrowLeftIcon />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={nextSlide}
                      className="rounded-full cursor-pointer w-10 h-10 shadow absolute right-[-20px] -translate-y-1/2 top-1/2 bg-white"
                    >
                      <KeyboardArrowRightIcon />
                    </button>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </article>
      </>
    );
  }

  return (
    <>
      {showLightBox && (
        <LightBox
          products={products}
          previuosSlide={previuosSlide}
          nextSlide={nextSlide}
          slideIndex={slideIndex}
          setShowLightBox={setShowLightBox}
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:place-items-center mx-auto max-w-7xl">
        <div className="flex justify-center gap-6 flex-col md:mt-[30px] md:mx-10">
          <section className=" mx-auto">
            <article>
              <div className="md:hidden">
                {products.map((item, index) => (
                  <div
                    key={index}
                    className={slideIndex === index + 1 ? "relative" : "hidden"}
                  >
                    <img
                      className="md:rounded-2xl w-full md:max-w-[350px] object-contain"
                      src={item.mainImage}
                      alt=""
                    />
                    <ul className="md:hidden">
                      <li>
                        <button
                          onClick={previuosSlide}
                          className="rounded-full cursor-pointer w-10 h-10 shadow absolute left-4 -translate-y-1/2 top-1/2 bg-white"
                        >
                          <KeyboardArrowLeftIcon />
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={nextSlide}
                          className="rounded-full cursor-pointer w-10 h-10 shadow absolute right-4 -translate-y-1/2 top-1/2 bg-white"
                        >
                          <KeyboardArrowRightIcon />
                        </button>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>

              <div className="hidden md:block">
                <img
                  className="md:rounded-2xl w-full md:max-w-[350px] object-contain cursor-pointer"
                  src={mainImage}
                  alt=""
                  onClick={() => setShowLightBox(true)}
                />
              </div>

              <ul className="flex items-center justify-between mt-5 ">
                {products.map((item, index) => (
                  <li
                    key={item.id}
                    onClick={() => setValue(index)}
                    className={`${
                      index === value && "border-4 border-orange-600"
                    } rounded-xl overflow-hidden hidden md:block`}
                  >
                    <img
                      className={`${
                        index === value && "opacity-40"
                      } w-16 cursor-pointer hover:opacity-60 `}
                      src={item.thumbNail}
                      alt=""
                    />
                  </li>
                ))}
              </ul>
            </article>
          </section>
        </div>

        <div className="m-w-full md:max-w-md mx-7">
          <p className="text-orange-400 font-semibold my-3">SNEAKER COMPANY</p>
          <h3 className="text-[30px] md:text-[45px] font-bold leading-10 mb-10">
            Fall Limited Edition <span className="block">Sneakers</span>
          </h3>
          <p className="w-full md:max-w-md text-gray-500 mb-10 font-semibold">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex items-center justify-between md:flex-col md:items-start">
            <p className="text-[30px] font-bold">
              $125.00
              <span className="text-[16px] px-4 font-bold rounded-md inline-block mx-8 bg-orange-100 text-orange-500">
                50%
              </span>
            </p>

            <p className="text-gray-400 line-through block font-bold">
              $250.00
            </p>
          </div>
          <div className="flex items-center flex-col md:flex-row justify-center gap-5">
            <div className="flex items-center w-full justify-around my-5 rounded-xl md:w-3/5 bg-neutral-100 h-full py-4">
              <button className="p-2" onClick={handleMinus}>
                <img src={minus} alt="" />
              </button>
              <button>{props.amount}</button>
              <button
                className="p-2"
                onClick={() => props.setAmount(props.amount + 1)}
              >
                <img src={plus} alt="" />
              </button>
            </div>
            <div className="flex w-full justify-center hover:opacity-70 cursor-pointer items-center lg:gap-5 py-4 rounded-lg bg-orange-500 text-white font-bold shadow-lg shadow-orange-300">
              <ShoppingCartOutlinedIcon />
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contain;
