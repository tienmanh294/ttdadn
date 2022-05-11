import {
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/Layout"
import DevicesPage from "./pages/Devices";
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import AuthPage from "./pages/Auth";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/devices" element={<DevicesPage />} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
    </Layout>
      
  );
}

export default App;
