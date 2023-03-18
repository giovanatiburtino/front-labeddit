import { GlobalContext } from "./contexts/GlobalContext";
import Router from "./routes/Router";

function App() {
  return (
    <GlobalContext.Provider>
      <Router/>
    </GlobalContext.Provider>
  );
}

export default App;
