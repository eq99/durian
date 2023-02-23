import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import Content from "./Content";

function App() {
  return (
    <div>
      <header><TopBar></TopBar></header>
      <div className="flex">
        <aside className="w-240px flex-shrink-0"><SideBar></SideBar></aside>
        <main className="px-4 flex-grow"><Content></Content></main>
      </div>
    </div>
  )
}

export default App;
