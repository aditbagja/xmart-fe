import QrScanner from "qr-scanner";
import QRFrame from "../assets/qr-frame.svg";
import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateRfid } from "../utils/redux/slice";

const QRBarangReader = () => {
  const dispatch = useDispatch();
  const scanner = useRef();
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);
  const [qrOn, setQrOn] = useState(true);
  const [scannedResult, setScannedResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onScanSuccess = (result) => {
    setScannedResult(result.data);
  };

  const onScanFail = (error) => {
    console.log(error);
  };

  useEffect(() => {
    if (videoEl.current && !scanner.current) {
      scanner.current = new QrScanner(videoEl.current, onScanSuccess, {
        onDecodeError: onScanFail,
        preferredCamera: "environment",
        highlightScanRegion: true,
        overlay: qrBoxEl.current,
      });

      scanner.current
        .start()
        .then(() => setQrOn(true))
        .catch((error) => {
          if (error) setQrOn(false);
        });
    }
  }, []);

  useEffect(() => {
    if (!qrOn)
      alert(
        "Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload."
      );
  }, [qrOn]);

  useEffect(() => {
    if (scannedResult) {
      dispatch(updateRfid(scannedResult));
      scanner.current.stop();
      setLoading(true);

      setTimeout(() => {
        setScannedResult("");
        dispatch(updateRfid(""));
        scanner.current.start();
        setLoading(false);
      }, 3000);
    }
  }, [scannedResult, dispatch]);

  return (
    <div className="w-full">
      {loading && (
        <div className="h-full">
          <b className="text-lg flex justify-center mt-60">
            Menambahkan Barang ke Cart...
          </b>
        </div>
      )}
      <video ref={videoEl}></video>
      <div ref={qrBoxEl} className="w-full flex">
        <img
          src={QRFrame}
          alt="QR Frame"
          width={256}
          height={256}
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default QRBarangReader;
