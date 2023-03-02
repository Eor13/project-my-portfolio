import { Outlet } from "react-router-dom";
import { NavBar } from "./pages/navbar";


function App() {
  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  );
}

export default App;