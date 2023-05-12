import { ThemeProvider, themes } from "./services/themeContext";
import { NavBar } from "./components/navbar";
import { Body } from "./components/body";
import { Footer } from "./components/footer"
import { GlobalStyle } from "./globalStyles";



function App() {
  console.log(themes)
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyle/>
      <NavBar/>
      <Body/>
      <Footer/>
    </ThemeProvider>
  );
}
export default App; 

