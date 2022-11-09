import { useParams } from "react-router-dom";
import axios from '../../../utility/axios'
import React, { useState } from "react";
import * as Components from "./styledDiceGame";

export default function DiceGame() {
  const {id} = useParams()
  const [img, setImg] = useState({
    rand1: require("./../../../images/dice6.png"),
    rand2: require("./../../../images/dice6.png"),
  });
  const [win, setWin] = useState("Roll the dice!");
  const [score, setScore] = useState(0);
  const [score2, setScore2] = useState(0);
  const clickButton = async () => {
    const randomNumber1 = Math.floor(Math.random() * 6 + 1);
    const randomNumber2 = Math.floor(Math.random() * 6 + 1);

    setImg({
      rand1: require(`./../../../images/dice${randomNumber1}.png`),
      rand2: require(`./../../../images/dice${randomNumber2}.png`),
    });

    const updateScore = score + 1;
    const updateScore2 = score2 + 1;
    if (randomNumber1 > randomNumber2) {
      if (score && score2) setWin("🚩Player 1 menang");
      setScore(updateScore);
      setScore2(updateScore2 - 1);
       await axios.post(`/score/create/${id}`, {
        score: "WIN"
      })
    } else if (randomNumber1 < randomNumber2) {
      setWin("Player 2 menang🚩");
      setScore(updateScore - 1);
      setScore2(updateScore2);
      await axios.post(`/score/create/${id}`, {
        score: "LOSE",
      });
    } else {
      setWin("Seri");
      await axios.post(`/score/create/${id}`, {
        score: "DRAW",
      });
    }
  };
  return (
      <Components.Root>
        <Components.Container>
        <Components.Win>
          <h1>{win}</h1>
        </Components.Win>
        <Components.Player>
          <Components.Div>
            <Components.Text>
              <h1>Player 1</h1>
            </Components.Text>
            <Components.TextScore>
              <h1>Score : {score}</h1>
            </Components.TextScore>
            <Components.Dice1>
              <img width={100} src={img.rand1} alt="dice1" name="dice1" />
            </Components.Dice1>
          </Components.Div>
          <Components.Div>
            <Components.Text>
              <h1>Player 2</h1>
            </Components.Text>
            <Components.TextScore>
              <h1>Score : {score2}</h1>
            </Components.TextScore>
            <Components.Dice2>
              <img width={100} src={img.rand2} alt="dice2" />
            </Components.Dice2>
          </Components.Div>
        </Components.Player>
        <Components.Button onClick={() => clickButton()}>
          <Components.Btn>
                <Components.Button5>
                <Components.Button82pushable>
                  <Components.Button82shadow>
                    <span></span>
                  </Components.Button82shadow>
                  <Components.Button82edge>
                    <span></span>
                  </Components.Button82edge>
                  <Components.Button82front>
                    <span> Roll The Dice </span>
                  </Components.Button82front>
              </Components.Button82pushable>
                </Components.Button5>
          </Components.Btn>
        </Components.Button>
        <Components.Footer>www 🎲 App Binar 🎲 com</Components.Footer>
        </Components.Container>
      </Components.Root>
  );
}
