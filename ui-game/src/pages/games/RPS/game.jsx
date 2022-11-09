import { ArrowBackIos, Refresh } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import * as Components from "./styled";
import Batu from "../../../assets/Batu.png";
import Gunting from "../../../assets/Gunting.png";
import Kertas from "../../../assets/Kertas.png";
import { useParams } from "react-router-dom";
import axios from '../../../utility/axios'

export default function Game() {
  const {id} = useParams()
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("Batu");
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Let's see who wins");
  const [gameOver, setGameOver] = useState(false);
  const choices = ["Batu", "Kertas", "Gunting"];

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  console.log(computerChoice);
  const reset = () => {
    window.location.reload();
  };

  useEffect(() => {
    async function fetchData(){
      const comboMoves = userChoice + computerChoice;
    if (userPoints <= 4 && computerPoints <= 4) {
      if (
        comboMoves === "GuntingKertas" ||
        comboMoves === "BatuGunting" ||
        comboMoves === "KertasBatu"
      ) {
        const updatedUserPoints = userPoints + 1;
        setUserPoints(updatedUserPoints);
        setTurnResult("User Win!");
        await axios.post(`/score/create/${id}`, {
          score: "WIN"
        })
        if (updatedUserPoints === 1) {
          setResult("User Wins");
          const gameOff = true;
          setGameOver(gameOff);
        }
      } else if (
        comboMoves === "KertasGunting" ||
        comboMoves === "GuntingBatu" ||
        comboMoves === "KertasBatu"
      ) {
        const updatedComputerPoints = computerPoints + 1;
        setComputerPoints(updatedComputerPoints);
        setTurnResult("Computer Win!");
        await axios.post(`/score/create/${id}`, {
          score: "LOSE",
        });
        if (updatedComputerPoints === 1) {
          setResult("Computer Wins");
          const gameOff = true;
          setGameOver(gameOff);
        }
      } else {
        setTurnResult("Draw");
        await axios.post(`/score/create/${id}`, {
          score: "DRAW",
        });
      }
    }}
    fetchData();}, [computerChoice, userChoice]);
  return (
    <>
      <Components.Root>
        <Components.Navbar>
          <Components.NavbarContents1 to="/apps/home">
            <ArrowBackIos fontSize="large" />
          </Components.NavbarContents1>
          <Components.NavbarContents2>Home Page</Components.NavbarContents2>
        </Components.Navbar>
        <Components.PlayerResult>Player: {userPoints} </Components.PlayerResult>
        {choices.map((choice, index) => (
          <Components.PlayerChoice
            key={index}
            onClick={() => handleClick(choice)}
            disabled={gameOver}
          >
            <Components.PlayerChoices>
              <img src={Gunting} alt="Gunting" name="Gunting" />
            </Components.PlayerChoices>
            <Components.PlayerChoices>
              <img src={Batu} alt="Batu" name="Batu" />
            </Components.PlayerChoices>
            <Components.PlayerChoices>
              <img src={Kertas} alt="Kertas" name="Kertas" />
            </Components.PlayerChoices>
          </Components.PlayerChoice>
        ))}
        <Components.MiddleContent>{turnResult}</Components.MiddleContent>
        <Components.MiddleContent2>{result}</Components.MiddleContent2>
        <Components.ComResult>Computer: {computerPoints} </Components.ComResult>
        <Components.ComChoice>
          <Components.ComChoices> {computerChoice} </Components.ComChoices>
        </Components.ComChoice>
        {gameOver && (
          <Components.Refresh onClick={() => reset()}>
            <Refresh fontSize="large" />
          </Components.Refresh>
        )}
      </Components.Root>
    </>
  );
}
