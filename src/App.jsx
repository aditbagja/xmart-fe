import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Shop from "./pages/Shop";
import Layout from "./Layout";
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shop" element={<Layout />}>
          <Route index element={<Shop />} />
          <Route path="/shop/test" element={<Test />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
