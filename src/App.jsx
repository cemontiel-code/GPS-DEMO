import "./App.css";
import Component from "./Component";
import Hero from "./Hero";
import React, { useState, useEffect } from "react";
import { FadeIn } from "react-slide-fade-in";

import Records from "./data/Us.json";
import ServiceList from "./data/servcices.json";
import TechList from "./data/tech.json";

import { IoMdBusiness } from "react-icons/io";
import { MdMiscellaneousServices as Techno } from "react-icons/md";
import { BsWater as Hidrografia } from "react-icons/bs";
import { RiGpsLine as Topografia } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  });

  return (
    <div id="appBody" className=" p-0 m-0">
      <div
        className={
          "anime hero-overlay bg-cover blur-sm bg-blend-darken absolute top-0 -z-20 "
        }
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1433840496881-cbd845929862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=50")',
        }}
      ></div>

      <Hero></Hero>

      <svg
        viewBox="0 0 1320 300"
        className="w-full h-full sm:h-4/5 fixed bottom-0 -z-50  "
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="sineWave"
            fillOpacity="0.3"
            d="	M0,192	C220,100,440,100,660,192	C880,290,1100,290,1320,192	"
          />
          <path
            id="sineWave1"
            fillOpacity="0.3"
            d="	M0,192	C220,290,440,290,660,192 C880,100,1100,100,1320,192"
          />
          <path
            id="sineWave2"
            fillOpacity="0.2"
            d="	M0,192	C220,100,440,100,660,192	C880,290,1100,290,1320,192	L1320 500	L0 500"
          />
        </defs>
        <use x="" fill="#00AFEF" href="#sineWave" />
        <use x="" fill="#006FC0" href="#sineWave1" />
        <use x="" fill="#0DC58D" href="#sineWave2" />
      </svg>

      <div className="container sm:w-3/4 mx-auto h-full content-center shadow-2xl my-auto bg-white sm:bg-base-400 sm:bg-opacity-30 ">
        <section
          id="AboutUs"
          aria-label="nosotros"
          className="container gap-15 min-h-screen flex flex-col items-center p-4 sm:p-10 mx-auto h-full justify-around"
        >
          {Records &&
            Records.map((record) => {
              if (record.id == 1) {
                return (
                  <FadeIn
                    from="bottom"
                    positionOffset={500}
                    triggerOffset={350}
                    delayInMilliseconds={380}
                  >
                    <div
                      id={"polt-" + record.id}
                      className="mx-auto my-auto flex flex-col container z-10"
                      key={record.id}
                    >
                      <CgProfile
                        size={96}
                        className="mx-auto mt-12 bg-white rounded-full "
                      ></CgProfile>
                      <h2
                        className="text-center font-bold capitalize  mt-2 sm:mt-6 underline-offset-4 underline my-auto text-xl sm:text-5xl"
                        id={"Us-" + record.id}
                      >
                        {record.title}{" "}
                      </h2>
                      <div className="gap-5 my-3 sm:my-16 w-full sm:w-5/6 mx-auto">
                        {record.Content &&
                          record.Content.map((data) => {
                            return (
                              <FadeIn
                                from="left"
                                positionOffset={300}
                                triggerOffset={350}
                                delayInMilliseconds={380}
                              >
                                <div
                                  key={data.id}
                                  className="text-center w-11/12 mx-auto sm:mb-10"
                                >
                                  <h3 className="text-center text-xl sm:text-4xl font-bold  mb-5 ">
                                    {data.title}
                                  </h3>

                                  <p className="text-center text-lg mx-auto p-3 rounded-lg bg-white">
                                    {data.Content}
                                  </p>
                                  <div className="divider"> .</div>
                                </div>
                              </FadeIn>
                            );
                          })}
                      </div>
                    </div>
                  </FadeIn>
                );
              } else {
                return (
                  <div
                    className="mx-auto gap-10 container w-11/12"
                    key={record.id}
                  >
                    <></>
                    <CgProfile size={98} className="mx-auto mt-15"></CgProfile>
                    <h2
                      className="text-center font-bold capitalize  mt-2 sm:mt-6 underline-offset-4 underline my-auto text-lg sm:text-5xl"
                      id={"Us-" + record.id}
                    >
                      {record.title}{" "}
                    </h2>
                    <p className="text-center mt-3 sm:my-16 sm:w-5/6 mx-auto  text-lg sm:text-2xl">
                      {record.Content}
                    </p>
                    <div className="divider"> .</div>
                  </div>
                );
              }
            })}
        </section>
        <section
          id="services"
          aria-label="servicios"
          className="container gap-15 min-h-screen flex flex-col items-center p-4 sm:p-10 mx-auto h-full justify-around"
        >
          <h3 className="text-center text-ellipsis underline text-3xl sm:text-5xl font-bold  mx-auto">
            Lista de Servicios.
          </h3>

          <div>
            <div className="mx-auto my-auto  grid  sm:grid-cols-2 gap-4">
              {ServiceList &&
                ServiceList.map((data, x) => {
                  return (
                    <Component
                      icon={<Hidrografia size={"48px"} />}
                      color={"accent"}
                      key={data.id}
                      title={data.title}
                      imgUrl={data.imgURL}
                    >
                      <ul className="list-disc list-inside">
                        {data.Content.map((x, i) => {
                          return (
                            <li className="text-xl " key={x.id}>
                              {x.desc}
                            </li>
                          );
                        })}
                      </ul>
                    </Component>
                  );
                })}
            </div>
          </div>
        </section>
        <div className="divider mt-10"> .</div>
        <section
          id="proyects"
          aria-label="lista de projectos"
          className="container gap-15 min-h-screen flex flex-col items-center p-4 sm:p-10 mx-auto h-full justify-around"
        >
          <h3 className="text-center text-ellipsis underline text-3xl sm:text-5xl font-bold  mx-auto">
            tecnologias a nuestra disposicion
          </h3>

          <div className="mx-auto my-10 text-center grid sm:grid-cols-3 gap-4">
            {TechList &&
              TechList.map((data, x) => {
                return (
                  <Component
                    icon={<Techno />}
                    size={"48"}
                    color={"primary"}
                    key={x}
                    title={data.name}
                    imgUrl={data.imgURL}
                  >
                    <p className="text-xl text-center ">{data.desc}</p>
                  </Component>
                );
              })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
/*
Foto de <a href="https://unsplash.com/es/@valerief?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Valerie V</a> en <a href="https://unsplash.com/es/s/fotos/Herramienta-de-topograf%C3%ADa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

*/
