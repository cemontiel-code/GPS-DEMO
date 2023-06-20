import { useState } from "react";
import { BsChevronDoubleLeft } from "react-icons/bs";

function Component({ children, imgUrl, title }) {
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
            : "btn btn-secondary h-20 space-around rounded-md anime relative overflow-hidden hover:scale-105 hover:shadow-2xl p-4"
        }
        style={
          active
            ? { backgroundImage: 'url("' + imgUrl + '")' }
            : { backgroundImage: "" }
        }
        
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
                  ? "anime hero-overlay bg-opacity-60 blur-sm"
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
              className="absolute -left-5 object-left-top object-cover mask mask-hexagon-2 w-32 h-32 shadow-lg"
            ></img>
            <span className="text-lg text-secondary text-center ml-24">
              {title}
            </span>
          </>
        )}
      </div>
    </>
  );
}
export default Component;
