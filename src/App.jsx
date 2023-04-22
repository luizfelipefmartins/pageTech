import { AuthProviders } from "./providers/providers";
import { RouteMain } from "./routes";

function App() {
  return (
    <div>
      <AuthProviders>
        <RouteMain />
      </AuthProviders>
    </div>
  );
}

export default App;
