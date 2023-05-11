import { NavBar } from "./pages/navbar";
import { Footer } from "./pages/footer";
import { Body } from "./pages/body";
import { ThemeProvider } from "./services/themeContext";

function App() {
  return (
    <ThemeProvider>
      <NavBar /> 
      <Body/>
      <Footer/> 
    </ThemeProvider>
  );
}
export default App; 

