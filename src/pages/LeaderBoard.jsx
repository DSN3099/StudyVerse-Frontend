import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import you from "../assets/leaderboardimages/you.png";
import abram from "../assets/leaderboardimages/abram.png";
import philip from "../assets/leaderboardimages/philip.png";
import randy from "../assets/leaderboardimages/randy.png";
import skylar from "../assets/leaderboardimages/skylar.png";
import erin from "../assets/leaderboardimages/erin.png";
import terry from "../assets/leaderboardimages/terry.png";
import davis from "../assets/leaderboardimages/davis.png";
<link rel="stylesheet" href="App.css" />;

const LeaderBoard = () => {
  return (
    <>
      <div className="background">
        <Navbar />
        <div className="leaderboard absolute my-3 right-8 font-bold">
          <h3>LEADERRBOARD</h3>
        </div>
        <div className="flex justify-between mx-10 my-14 list-none font-bold text-xl">
          <div className="order-last">
            Name
            <div className="namelist font-normal my-6 font-serif">
              <div className="you flex flex-row">
                <img className="border-4 rounded-md w-8 h-8" src={you} />
                <li className="my-1 mx-3">You</li>
              </div>
              <hr />
              <br />
              <div className="you flex flex-row">
                <img className="border-4 rounded-md w-8 h-8" src={abram} />
                <li className="my-1 mx-3">Abram Bator</li>
              </div>
              <hr />
              <br />
              <div className="you flex flex-row">
                <img className="border-4 rounded-md w-8 h-8" src={philip} />
                <li className="my-1 mx-3">Philip Stanton</li>
              </div>
              <hr />
              <br />
              <div className="you flex flex-row">
                <img className="border-4 rounded-md w-8 h-8" src={randy} />
                <li className="my-1 mx-3">Randy Rosser</li>
              </div>
              <hr />
              <br />
              <div className="you flex flex-row">
                <img className="border-4 rounded-md w-8 h-8" src={skylar} />
                <li className="my-1 mx-3">Skylar Geidt</li>
              </div>
              <hr />
              <br />
              <div className="you flex flex-row">
                <img className="border-4 rounded-md w-8 h-8" src={erin} />
                <li className="my-1 mx-3">Erin Carder</li>
              </div>
              <hr />
              <br />
              <div className="you flex flex-row">
                <img className="border-4 rounded-md w-8 h-8" src={terry} />
                <li className="my-1 mx-3">Terry Geidt</li>
              </div>
              <hr />
              <br />
              <div className="you flex flex-row">
                <img className="border-4 rounded-md w-8 h-8" src={davis} />
                <li className="my-1 mx-3">Davis Curtis</li>
              </div>
              <hr />
              <br />
            </div>
          </div>
          <div className="order-last">
            Rank
            <div className="ranklist font-normal my-6 font-serif ">
              <li className="my-1">#8</li>
              <hr />
              <br />
              <li className="my-1">#1</li>
              <hr />
              <br />
              <li className="my-1">#2</li>
              <hr />
              <br />
              <li className="my-1">#3</li>
              <hr />
              <br />
              <li className="my-1">#4</li>
              <hr />
              <br />
              <li className="my-1">#5</li>
              <hr />
              <br />
              <li className="my-1">#6</li>
              <hr />
              <br />
              <li className="my-1">#7</li>
              <hr />
              <br />
            </div>
          </div>
          <div className="order-last">
            Score
            <div className="scorelist font-normal my-6 font-serif ">
              <li className="my-1">4500</li>
              <hr />
              <br />

              <li className="my-1">4500</li>
              <hr />
              <br />

              <li className="my-1">4500</li>
              <hr />
              <br />

              <li className="my-1">4500</li>
              <hr />
              <br />

              <li className="my-1">4500</li>
              <hr />
              <br />

              <li className="my-1">4500</li>
              <hr />
              <br />

              <li className="my-1">4500</li>
              <hr />
              <br />

              <li className="my-1">4500</li>
              <hr />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
