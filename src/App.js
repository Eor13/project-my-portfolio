import { NavBar } from "./pages/navbar";
import { AppRoutes } from "./pages/routes";
import './app.css'
import { Footer } from "./pages/footer";


function App() {
  return (
    < >
      <NavBar/> 
      <main className="toggleColor">
        <AppRoutes/>
      </main>
      <Footer/> 
    </>
  );
}

export default App ;