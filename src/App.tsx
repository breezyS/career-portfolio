import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./util/theme-provider";

import "./App.css";
import Introduction from "./pages/Introduction";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
              <Introduction />
            </ThemeProvider>
          }
        />
      </Routes>
    </>
  );
}

export default App;
