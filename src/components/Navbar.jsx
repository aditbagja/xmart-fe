import { useState } from "react";
import Drawer from "./Drawer";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setTimeout(() => {
      navigate("/");
      sessionStorage.clear();
    }, 1000);
  };

  return (
    <section className="w-full h-full bg-sky-500">
      <div className="container mx-auto">
        <div className="px-5 xl:px-0 py-2">
          <div className="flex lg:hidden justify-between">
            <img src="/logo.png" alt="logo" width={50} height={50} />
            <button
              onClick={() => {
                setOpenDrawer(!openDrawer);
              }}>
              <img src="/menu-bar.svg" alt="menu" width={35} />
            </button>
          </div>
          <div className="hidden lg:grid grid-cols-3 gap-3">
            <div className="flex gap-5 text-white my-auto font-bold">
              <Link to="/shop/transaksi">Histori Transaksi</Link>
              <a href="/shop/data">Master Data</a>
            </div>
            <Link to="/shop">
              <img
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
                className="mx-auto"
              />
            </Link>
            <div className="flex justify-end my-auto">
              <button className="text-white font-bold" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        open={openDrawer}
        side="right"
        setOpen={setOpenDrawer}
        handleLogout={handleLogout}
      />
    </section>
  );
};

export default Navbar;
