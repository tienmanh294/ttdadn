import {
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/Layout"
import DevicesPage from "./pages/devices";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/devices" element={<DevicesPage />} />
      </Routes>
    </Layout>
      
  );
}

export default App;
