import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

import "./App.css";
import Introduction from "./pages/Introduction";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<Introduction />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
