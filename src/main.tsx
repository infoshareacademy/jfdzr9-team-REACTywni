import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/auth.context";
import { NightModeProvider } from "./context/darkTheme.context";
//import { FreelancersContextProvider } from "./context/freelancer.context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthContextProvider>
    <NightModeProvider>
      <App />
    </NightModeProvider>
  </AuthContextProvider>,
);
