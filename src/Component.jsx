import { useState } from "react";
import { BsChevronDoubleLeft } from "react-icons/bs";

function Component({ children, imgUrl, title, dni ,flexbasis}) {
  const [active, setActive] = useState(false);

  function clickHandler() {
    setActive(!active);
    console.log(active);
  }

  return (
    <>
      <div
        className={
          active
            ? "anime bg-center bg-fill hero min-h-screen open z-40"
            : "btn btn-secondary h-24 m-1 space-around rounded-md anime relative overflow-hidden hover:scale-105 hover:shadow-2xl p-0.5 " +
              flexbasis
        }
        style={
          active
            ? { backgroundImage: 'url("' + imgUrl + '")' }
            : { backgroundImage: "" }
        }
        id={dni}
        onClick={active ? "" : clickHandler}
      >
        {active ? (
          <>
            <button
              className="btn btn-warning mask mask-squircle fixed top-5 right-5 anime z-50"
              onClick={clickHandler}
            >
              <BsChevronDoubleLeft size={"24px"}></BsChevronDoubleLeft>
            </button>
            <div
              className={
                active
                  ? "anime hero-overlay bg-opacity-20 blur-sm"
                  : "anime closed"
              }
            ></div>
            <div
              className={
                active
                  ? "anime hero-content text-center text-neutral-content"
                  : "anime closed"
              }
            >
              <div className="gap-10">
                <h1
                  className={
                    active ? "anime mb-5 text-5xl font-bold" : "anime closed"
                  }
                >
                  {title}
                </h1>
                <div
                  className={
                    active
                      ? "anime py-6 bg-white rounded-xl text-left w-full px-5 text-primary"
                      : "anime closed hidden"
                  }
                >
                  {children}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <img
              alt={title}
              src={imgUrl}
              className="absolute -left-6 object-center object-cover mask mask-hexagon-2 w-36 h-36 "
            ></img>
            <span className=" text-lg text-secondary ml-32  hyphens-auto  ">
              {title}
            </span>
          </>
        )}
      </div>
    </>
  );
}
export default Component;
