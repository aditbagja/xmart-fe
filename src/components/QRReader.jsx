import { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import QRFrame from "../assets/qr-frame.svg";
import { useNavigate } from "react-router-dom";

const QRReader = () => {
  const navigate = useNavigate();

  const scanner = useRef();
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);
  const [qrOn, setQrOn] = useState(true);

  const [scannedResult, setScannedResult] = useState("");

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
        highlightCodeOutline: true,
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
      sessionStorage.setItem("qrcode", scannedResult);

      setTimeout(() => {
        navigate("/dashboard");
        setQrOn(false);
        scanner.current.stop();
      }, 2000);
    }
  }, [navigate, scannedResult]);

  return (
    <div className="w-full lg:w-1/2">
      <video ref={videoEl}></video>
      <div ref={qrBoxEl} className="w-full">
        <img
          src={QRFrame}
          alt="QR Frame"
          width={256}
          height={256}
          className="mx-auto fill-none"
        />
      </div>
    </div>
  );
};

export default QRReader;
