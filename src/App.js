import { NavBar } from "./pages/navbar";
import { AppRoutes } from "./pages/routes";
import './app.css'


function App() {
  return (
    < >
      <NavBar/> 
      <main className="toggleColor">
        <AppRoutes/>
      </main>    
    </>
  );
}

export default App ;