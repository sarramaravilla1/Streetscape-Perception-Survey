import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Survey from "./Survey";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Survey />
  </StrictMode>
);
