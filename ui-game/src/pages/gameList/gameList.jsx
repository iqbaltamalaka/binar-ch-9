import axios from "../../utility/axios";
import React, { useEffect, useState } from "react";
import * as Components from "./styledGameList";


export default function Gamelist() {
  const [game,setGame]=useState([])
  useEffect(()=>{
  async function fetchData(){
      const {data} = await axios.get('/game/find')
      setGame(data.data)
    }
    fetchData()
  },[])
  return (
    <>
      <Components.Root>
        <Components.Text>
          Choose Game
        </Components.Text>
        <Components.LogoGame>
          {game.map((res,i)=>{
            return (
              <Components.Move to={`${res?.path}/${res?._id}`} key={i}>
                <Components.H1>{res?.name}</Components.H1>
                <Components.LogoRps>
                  <img src={res?.icon} alt="LogoRps" name="LogoRps" width={180} />
                </Components.LogoRps>
              </Components.Move>
            )
          })}
        </Components.LogoGame>
      </Components.Root>
    </>
  );
}
