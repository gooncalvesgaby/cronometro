import React from "react"
import { createGlobalStyle } from "styled-components"
import Header from "./Components/Cronometro/Header.jsx"
const GlobalStyle = createGlobalStyle`
 *{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 }
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    </>
  )
}

export default App
