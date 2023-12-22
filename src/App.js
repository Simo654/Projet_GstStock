import { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Login from "./scenes/auth/Login";
import Forgot from './scenes/auth/Forgot';
import NotFound from "./scenes/Erreur/index";
import Club from "./scenes/Club"
import Users from "./scenes/Users";
import Produit from "./scenes/Produit";
import Calendrier from "./scenes/Calendrier/calendar";
import Discussion from "./scenes/Discussion";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const location = useLocation();

  // Liste des chemins où le Sidebar ne doit pas être affiché
  const excludedPaths = ["/login", "/forgot-pass", "/NotFound"];

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {!excludedPaths.includes(location.pathname) && (
            <Sidebar isSidebar={isSidebarVisible} />
          )}
          <main
            className={location.pathname === "/login" ? "full-content" : "content"}
          >
            {!excludedPaths.includes(location.pathname) && (
              <Topbar setIsSidebar={setIsSidebarVisible} />
            )}
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-pass" element={<Forgot />} />
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/Users" element={<Users />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/Club" element={<Club />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/Produit" element={<Produit />} />
              <Route path="/line" element={<Line />} />
              <Route path="/Discussion" element={<Discussion />} />
              <Route path="/NotFound" element={<NotFound />} />
              <Route path="/Calendrier" element={<Calendrier />} />
              
              <Route path="*" element={<Navigate to="/NotFound" />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
