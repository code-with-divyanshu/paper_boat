import { useState } from "react";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./contexts/AuthContext";
import MainRoute from "./routes/MainRoute";
import Loading from "./components/Loding";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loading onComplete={() => setLoading(false)} />}

      {!loading && (
        <div className="w-full overflow-x-hidden bg-cream text-brown font-body">
          <AuthProvider>
            <Navbar />
            <MainRoute />
            <Footer />
          </AuthProvider>
        </div>
      )}
    </>
  );
}

export default App;
