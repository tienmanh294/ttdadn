import {
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/Layout"
import DevicesPage from "./pages/Devices";
import HomePage from "./pages/Home";
import HelpPage from "./pages/Help";
import ProfilePage from "./pages/Profile";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/devices" element={<DevicesPage />} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/help" element={<HelpPage/>} />
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
    </Layout>
      
  );
}

export default App;
