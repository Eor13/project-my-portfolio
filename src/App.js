import { ThemeeProvider, themes } from "./services/themeContext";
import { NavBar } from "./components/navbar";
import { Body } from "./components/body";
import { Footer } from "./components/footer"
import { GlobalStyle } from "./globalStyles";



function App() {
  return (
    <ThemeeProvider theme={themes}>
      <GlobalStyle/>
      <NavBar/>
      <Body/>
      <Footer/>
    </ThemeeProvider>
  );
}
export default App; 

