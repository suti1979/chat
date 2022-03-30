import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import "./assets/custom.scss"
import "./assets/style.css"

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
)
