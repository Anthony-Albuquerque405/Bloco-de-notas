import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import BlocContextProvide from "./context/BlocContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BlocContextProvide>
      <App />
    </BlocContextProvide>
  </StrictMode>
);
