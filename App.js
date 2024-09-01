import Routes from "./src/routes/routes";

import {ThemeProvider} from 'styled-components/native';

 const App = () => {
  return (
    <ThemeProvider theme={{background: '#FFF'}}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
