import { createGlobalStyle } from 'styled-components'

import fontRoboto from './fonts/Roboto/Roboto-Regular.ttf'

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}

@font-face {
  font-family: 'Roboto';
  src: url(${fontRoboto});
  font-style: normal;
}

body, html {
  background: #F5F5F5;
  font-family: 'Roboto', sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}
`

export default GlobalStyle
