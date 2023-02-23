import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import Content from "./Create";
import Settings from "./Settings";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Outlet } from "react-router-dom";




function App() {
  return (
    <div>
      <header><TopBar></TopBar></header>
      <div className="flex">
        {/* <aside className="w-180px flex-shrink-0"><SideBar></SideBar></aside> */}
        <main className="px-4 py-2 flex-grow">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App;
