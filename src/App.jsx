import React, { useEffect, useState } from "react";
import { FadeIn } from "react-slide-fade-in";
import "./App.css";
import Component from "./Component";
import Hero from "./Hero";

import Records from "./data/Us.json";
import ProyectList from "./data/data.json";
import ServiceList from "./data/servcices.json";
import SoftList from "./data/software.json";
import TechList from "./data/tech.json";
import allies from "./data/allies.json";

import { CgProfile } from "react-icons/cg";
import { data } from "autoprefixer";

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

      <Hero />

      <svg
        viewBox="0 0 1320 300"
        className="hidden sm:block w-full h-full sm:h-4/5 fixed bottom-0 -z-50  "
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
            <div className="mx-auto my-auto grid sm:flex sm:grid-cols-2 gap-4">
              {ServiceList &&
                ServiceList.map((data) => {
                  return (
                    <Component
                      key={data.id}
                      title={data.title}
                      imgUrl={data.imgURL}
                    >
                      <ul className="list-disc list-inside">
                        {data.Content.map((x, int)  => {
                          return (
                            <li className="text-xl " key={int}>
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
          id="equip"
          aria-label="lista de equipos "
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
                  
                    size={"48"}
                    
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

      <section
        id="software"
        aria-label="lista de softwares"
        className="container-flex gap-15 min-h-screen sm:relative  min-w-screen bg-slate-50 shadow-2xl "
      >
        {/*this video is the background */}
        <div
          className="hidden sm:block min-h-screen w-[55vw] bg-cover absolute top-0 left-0"
          style={{ backgroundImage: "url(/assets/bg-software.gif)" }}
        />

        <div className=" container min-h-screen sm:w-[45vw] sm:absolute sm:top-0 sm:right-0 mx-auto sm:p-10">
          <div className="container-flex mx-auto my-auto  min-h-96">
            <h3 className="font-bold text-4xl sm:text-7xl text-center ">
              SOFTWARE
            </h3>

            <div className="p-4 sm:p-5">
              <ul className="list-disc max-w-[95%] mx-auto">
                {SoftList &&
                  SoftList.map((data, int) => {
                    return (
                      <FadeIn
                        from="bottom"
                        positionOffset={50}
                        triggerOffset={150}
                        delayInMilliseconds={60 * int}
                      >
                        <li
                          key={data.id}
                          className="text-xl 2xl:mb-1 mb-0.5 p-0.5"
                        >
                          {" "}
                          {data.name}
                        </li>
                      </FadeIn>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="proyects"
        aria-label="listado de projectos"
        className="container-flex gap-15 min-h-screen sm:relative  min-w-screen bg-zinc-900 bg-opacity-20  box-border "
      >
        <h3 className="font-bold text-4xl sm:text-7xl text-center py-5  ">
          PROJECTOS
        </h3>

        <div className="carousel w-[95%] sm:w-5/6 bg-secondary-focus mx-auto h-[75vh] shadow-2xl ">
          {ProyectList &&
            ProyectList.map((data, int) => {
              return (
                <div
                  id={"slide" + int}
                  className="carousel-item anime relative w-full"
                >
                  <img
                    src={data.imgUrl}
                    class=" w-[70%] h-[30%] top-[12%] left-[15%] absolute mask  sm:w-full sm:min-h-full sm:static sm:blur-sm"
                  />

                  <div className="absolute bottom-6 max-h-[60%] flex flex-col p-5 text-white">
                    <h4 className="font-extrabold text-2xl sm:text-5xl box-decoration-clone sm:mb-1.5">
                      {data.name + " "}
                      <span className="sm:text-xl sm:font-semibold">
                        ({data.date})
                      </span>
                    </h4>
                    <div className="text-lg sm:text-3xl font-bold">
                      <span className="text-md sm:text-lg font-bold">para</span>
                      {" " + data.client}.
                    </div>
                    <div className=" text-lg md:text-xl font-semibold">
                      {data.desc}
                    </div>
                    <div className="md:text-lg font-semibold">
                      Zona : {data.area}
                    </div>
                  </div>
                  <div className="absolute anime flex justify-between left-0 right-0 sm:left-5 sm:right-5 sm:top-5">
                    <a
                      href={"#slide" + (int - 1)}
                      className="btn sm:btn-circle "
                    >
                      ❮
                    </a>
                    <a
                      href={"#slide" + (1 + int)}
                      className="btn sm:btn-circle"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      <section
        id="allies"
        aria-label="listado de aliados"
        className="container-flex min-h-screen min-w-screen bg-white    box-border "
      >
        <h3 className="font-bold text-4xl sm:text-4xl text-center py-10 mb-5 bg-accent ">
          EMPRESAS QUE CERTIFICAN NUESTRA CALIDAD
        </h3>

        <div className="flex flex-wrap max-w-[95%] max-h-[80%] mx-auto justify-center items-center">
          {allies &&
            allies.map((x) => {
              return <img src={x.imgurl} className="m-4" />;
            })}
        </div>
      </section>
    </div>
  );
}

export default App;
/*
Foto de <a href="https://unsplash.com/es/@valerief?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Valerie V</a> en <a href="https://unsplash.com/es/s/fotos/Herramienta-de-topograf%C3%ADa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

*/
