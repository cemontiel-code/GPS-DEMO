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
import bgVideo from "/assets/bg-software.webp";

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
            Records.map((record, x) => {
              if (record.id == 1) {
                return (
                  <FadeIn
                    from="bottom"
                    positionOffset={500}
                    triggerOffset={350}
                    delayInMilliseconds={380}
                    key={x}
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
                          record.Content.map((data, y) => {
                            return (
                              <FadeIn
                                from="left"
                                positionOffset={300}
                                triggerOffset={350}
                                delayInMilliseconds={380}
                                key={y}
                              >
                                <div
                                  key={data.id}
                                  className="text-center w-11/12 mx-auto sm:mb-10"
                                >
                                  <h3 className="text-center text-xl sm:text-4xl font-bold  mb-5 ">
                                    {data.title}
                                  </h3>

                                  <p className="text-center text-lg mx-auto p-3 rounded-lg">
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
          <h3 className="text-center text-ellipsis underline text-3xl sm:text-5xl font-bold  mx-auto uppercase">
            Lista de Servicios.
          </h3>

          <div>
            <div className="mx-auto my-auto grid sm:flex flex-wrap justify-around sm:grid-cols-2 gap-3 w-[95%]">
              {ServiceList &&
                ServiceList.map((data, int) => {
                  if (int == 0) {
                    return (
                      <Component
                        dni={int}
                        title={data.title}
                        imgUrl={data.imgURL}
                        flexbasis={"flex-initial sm:w-[54%]"}
                        key={int}
                      >
                        <ul className="list-disc list-inside">
                          {data.Content.map((x, int) => {
                            return (
                              <li className="text-xl " key={int}>
                                {x.desc}
                              </li>
                            );
                          })}
                        </ul>
                      </Component>
                    );
                  } else {
                    return (
                      <Component
                        key={int}
                        dni={int}
                        title={data.title}
                        imgUrl={data.imgURL}
                        flexbasis={"flex-initial sm:w-[48%]"}
                      >
                        <ul className="list-disc list-inside">
                          {data.Content.map((x, int) => {
                            return (
                              <li className="text-xl " key={int}>
                                {x.desc}
                              </li>
                            );
                          })}
                        </ul>
                      </Component>
                    );
                  }
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
          <h3 className="text-center text-ellipsis underline text-3xl sm:text-5xl font-bold  mx-auto capitalize">
            tecnologías a nuestra disposición
          </h3>

          <div className="mx-auto my-10 grid sm:flex flex-wrap justify-around sm:grid-cols-3  w-[95%]">
            {TechList &&
              TechList.map((data, x) => {
                return (
                  <Component
                    key={x}
                    title={data.name}
                    imgUrl={data.imgURL}
                    flexbasis={"flex-initial sm:w-[32%]"}
                  >
                    <p className="text-xl text-center lowercase">{data.desc}</p>
                  </Component>
                );
              })}
          </div>
        </section>
      </div>

      <section
        id="software"
        aria-label="lista de softwares"
        className="container-flex min-h-screen sm:relative shadow-2xl"
      >
        {/*this video is the background */}
        <div
          className="hidden min-h-screen w-full bg-cover absolute top-0 left-0"
          style={{ backgroundImage: "url("+bgVideo+")" }}
        >
          
        </div>

            <video src={bgVideo} ></video>
       
      </section>

      <section
        id="proyects"
        aria-label="listado de projectos"
        className="container-flex min-h-screen sm:relative  min-w-screen box-border "
      >
        <h3 className="font-bold text-4xl sm:text-7xl text-center py-10  ">
          PROYECTOS
        </h3>

        <div className="carousel w-[95%] sm:w-5/6 bg-secondary-focus mx-auto h-[95vh] shadow-2xl mb-14">
          {ProyectList &&
            ProyectList.map((data, int) => {
              return (
                <div
                  id={"slide" + int}
                  className="carousel-item anime relative w-full"
                >
                  <img
                    src={data.imgUrl}
                    className=" w-[70%] h-[30%] top-[12%] left-[15%] absolute mask  sm:w-full sm:min-h-full sm:static sm:blur-sm"
                  />

                  <div className="absolute bottom-6 max-h-[60%] flex flex-col p-5 text-white">
                    <h4 className="font-extrabold text-2xl sm:text-5xl box-decoration-clone sm:mb-1.5 capitalize">
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
        className="container-flex min-h-screen min-w-screen bg-white box-border "
      >
        <h3 className="font-bold text-4xl sm:text-6xl text-center py-10 mb-5 bg-accent uppercase ">
          nuestros clientes
        </h3>

        <div className="flex flex-wrap max-w-[92%] max-h-[80%] mx-auto justify-center items-center">
          {allies &&
            allies.map((x) => {
              return <img src={x.imgurl} className="m-8 h-18" />;
            })}
        </div>
      </section>

      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <span className="footer-title">Servicios</span>
          {ServiceList &&
            ServiceList.map((data, x) => {
              return (
                <a key={x} className="link link-hover">
                  {data.title}
                </a>
              );
            })}
        </div>
        <div>
          <span className="footer-title">Compañia</span>
          <a className="link link-hover">Acerca de nosotros</a>
          <a className="link link-hover">Contáctanos</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clip-rule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            ACME Industries Ltd. <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
/*
Foto de <a href="https://unsplash.com/es/@valerief?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Valerie V</a> en <a href="https://unsplash.com/es/s/fotos/Herramienta-de-topograf%C3%ADa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

*/
