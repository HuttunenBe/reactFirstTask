import "./App.css";
import { Button } from "@mui/material";
import { ThemeProvider } from "./components/ThemeContext"
import ThemeSwitcher from "./components/ThemeSwitch";
import Products from "./components/Products";

function App() {
  return (
    <ThemeProvider>
      <div>
        <p>Hello World</p>
        <Button>Click Me</Button>
        <ThemeSwitcher />
        <Products />
      </div>
    </ThemeProvider>
  );
}

export default App;
