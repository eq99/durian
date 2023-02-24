import TopBar from "./TopBar";
import SideBar from "./SideBar";
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
