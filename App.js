import Routes from "./src/routes/routes";

import { ThemeProvider } from "./src/theme/Theme";


 const App = () => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
