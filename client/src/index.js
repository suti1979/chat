import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/custom.scss"

console.log(process.env)

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
)
