import React from "react";
import * as Components from './styled'
import Sidebar from "../../components/sidebar/Sidebar";
import Home from "../../components/home/home";

export default function Page1(){
  return(
    <Components.Root>
      <Sidebar />
      <Components.MainContent>
      <Home />
      </Components.MainContent>
    </Components.Root>
  )
}