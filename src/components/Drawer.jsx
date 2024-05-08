/* eslint-disable react/prop-types */
import { clsx } from "clsx";
import { Link } from "react-router-dom";

const openClassNames = {
  right: "translate-x-0",
  left: "translate-x-0",
  top: "translate-y-0",
  bottom: "translate-y-0",
};

const closeClassNames = {
  right: "translate-x-full",
  left: "-translate-x-full",
  top: "-translate-y-full",
  bottom: "translate-y-full",
};

const classNames = {
  right: "inset-y-0 right-0",
  left: "inset-y-0 left-0",
  top: "inset-x-0 top-0",
  bottom: "inset-x-0 bottom-0",
};

const Drawer = ({ open, setOpen, side = "right", handleLogout }) => {
  return (
    <div
      id={`dialog-${side}`}
      className="relative z-10"
      aria-labelledby="slide-over"
      role="dialog"
      aria-modal="true"
      onClick={() => setOpen(!open)}>
      <div
        className={clsx(
          "fixed inset-0 bg-gray-400 bg-opacity-75 transition-all",
          {
            "opacity-100 duration-400 ease-in-out visible": open,
          },
          { "opacity-0 duration-400 ease-in-out invisible": !open }
        )}></div>
      <div className={clsx({ "fixed inset-0 overflow-hidden": open })}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={clsx(
              "pointer-events-none fixed max-w-full",
              classNames[side]
            )}>
            <div
              className={clsx(
                "pointer-events-auto relative w-full h-full transform transition ease-in-out duration-500",
                { [closeClassNames[side]]: !open },
                { [openClassNames[side]]: open }
              )}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
              }}>
              <div
                className={clsx(
                  "flex flex-col justify-between h-full overflow-y-auto bg-sky-500 p-20 shadow-xl"
                )}>
                <button
                  className="flex justify-end"
                  onClick={() => setOpen(false)}>
                  <img src="/close.svg" alt="close" width={30} />
                </button>
                <div className="flex flex-col gap-8">
                  <Link
                    to="/shop"
                    className="text-white text-lg font-bold"
                    onClick={() => {
                      setOpen(false);
                    }}>
                    Shop
                  </Link>
                  <Link
                    to="/shop/transaksi"
                    className="text-white text-lg font-bold"
                    onClick={() => {
                      setOpen(false);
                    }}>
                    Histori Transaksi
                  </Link>
                  <Link
                    to="/shop/data"
                    className="text-white text-lg font-bold"
                    onClick={() => {
                      setOpen(false);
                    }}>
                    Master Data
                  </Link>
                </div>
                <button
                  className="text-white text-lg font-bold text-left"
                  onClick={() => {
                    setOpen(false);
                    handleLogout();
                  }}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
