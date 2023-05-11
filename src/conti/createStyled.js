const GlobalStyle  = () =>{
  const {theme} = useContext(ThemeContext)
    console.log("contact ", theme)
  createGlobalStyle`
    html{
      font-size: 62.5%;
    }

    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: ${function (props) {  return props.theme.dark.fontPrincipal } };
      color: ${function (props) {  return props.theme.dark.colorPrincipal}};
      /* color: ${function (props) {  return props.theme.dark.colorDetails}}; */
      font-size: 1.5rem;
    }

    a{
      text-decoration: none;
      cursor: pointer;
    }
  `
}