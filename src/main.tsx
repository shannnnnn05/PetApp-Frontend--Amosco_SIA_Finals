import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const ugat = document.getElementById("ugat");

if (!ugat) {
  throw new Error("Hindi mahanap ang ugat");
}

createRoot(ugat).render(
  <StrictMode>
    <App />
  </StrictMode>
);
