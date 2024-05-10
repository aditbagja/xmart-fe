import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Shop from "./pages/Shop";
import Layout from "./Layout";
import TransaksiDetail from "./pages/TransaksiDetail";
import HistoriTransaksi from "./pages/HistoriTransaksi";
import MasterData from "./pages/MasterData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shop" element={<Layout />}>
          <Route index element={<Shop />} />
          <Route path="/shop/save-transaction" element={<TransaksiDetail />} />
          <Route path="/shop/transaksi" element={<HistoriTransaksi />} />
          <Route path="/shop/data" element={<MasterData />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
