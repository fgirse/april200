"use client";

import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { data } from "autoprefixer";
import Image from "next/image";
import { defaultOrder } from "ol/renderer/vector";

const GetSCF = () => {
  const [tabelleBL, setTabelleBL] = useState([]);
  const [dataSCF, setDataSCF] = useState([]);

  const Token = "41c4813ea4f746fbbdd2bdb9c5250aa4";
  const Url = "https://api.football-data.org/v2/competitions/2002/standings?";
  const url2 = (Url, { headers: { "X-Auth-Token": Token } });
  const url3 = "https://api.randomuser.me/";
  const url4 =
    "https://api.football-data.org/v2/competitions/2002/standings?X-Auth-Token=41c4813ea4f746fbbdd2bdb9c5250aa4";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios(Url, { headers: { "X-Auth-Token": Token } });
    setTabelleBL(response.data.standings[0].table);
    console.log(data)
  };
  const Emblem = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === "SC Freiburg")
    .map((data) => data.team.crestUrl);


      const Rang = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === "SC Freiburg")
    .map((data) => data.position);
  const Spieltag = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === "SC Freiburg")
    .map((data) => data.playedGames);
  const ToreErzielt = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === "SC Freiburg")
    .map((data) => data.goalsFor);
  const ToreErhalten = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === "SC Freiburg")
    .map((data) => data.goalsAgainst);
  const Siege = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === "SC Freiburg")
    .map((data) => data.won);
  const Niederlagen = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === "SC Freiburg")
    .map((data) => data.lost);
  const Remis = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === "SC Freiburg")
    .map((data) => data.draw);
  const Punkte = tabelleBL
    .filter((Tabelle) => Tabelle.team.name === "SC Freiburg")
    .map((data) => data.points);
  return (
    <>
      <div className="w-[100vw] h-full rounded-2xl text-center font-mono font-black text-white lg:px-3 lg:text-[2.33rem] xl:right-36 2xl:left-[23vw] 2xl:top-[20vh]">
        
          
          <div className="grid-sportarena w-[100vw]">
          
              <div className="mt-5 mb-12 flex flex-col items-center leading-8">
              <img src={Emblem} height="166" width="133" alt="Emblem" />
              </div>

            
            
            <p id="spieltag" lassName="text-3xl leading-8 lg:text-[7rem]">
              Spieltag: <span className="ml-1 text-amber-200 text-3xl lg:text-[7rem]">{Spieltag}</span>
            </p>
            
            <p id="rang">
              {" "}
              Rang: <span className="ml-1 text-amber-200">{Rang}</span>
            </p>
         
            <p id="torverhältnis">
              Torverhältnis:{" "}
              <span className="ml-1 text-amber-200">
                {ToreErzielt} : {ToreErhalten}
              </span>
            </p>
          
            <p id="gewonnen" className="">
              Siege:<span className="ml-1 text-amber-200">{Siege}</span>
            </p>
         
            <p id="verloren" className="">
              Niederlagen:
              <span className="ml-1 text-amber-200">{Niederlagen}</span>
            </p>
      
            <p id="remis" className="">
              Unentschieden:<span className="ml-1 text-amber-200">{Remis}</span>
            </p>
           
            <p id="punkte" className="bg-red-600">
              Punkte:<span className="ml-1 text-amber-200">{Punkte}</span>
  </p>
          </div>
        
      </div>
    </>
  );
};

export default GetSCF;
