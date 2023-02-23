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
        <aside className="w-200px"><SideBar></SideBar></aside>
        <main className="px-4"><Content></Content></main>
      </div>
    </div>
  )
}

export default App;
