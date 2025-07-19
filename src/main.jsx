import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// use App.jsx for leaerning state, user arrays, 



// import App2 from "./App2.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App2 />
//   </StrictMode>
// );
// use app2.jsx for props, controlled components, checkboxes, onChange, loop in jsx with map function, reuse react compo, nesting loop
import App3 from "./App3.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App3 />
  </StrictMode>
);