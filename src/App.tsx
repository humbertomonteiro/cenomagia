import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./infra/routes/RoutesApp";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
