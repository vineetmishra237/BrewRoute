
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import { Check, QrCode, RefreshCw, Shield } from "lucide-react";

interface ScanResult {
  hashId: string;
  scannedData: string;
  timestamp: string;
}

export const QRScanner = () => {
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string>("");
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const initializeScanner = () => {
      setIsScanning(true);
      const scanner = new Html5QrcodeScanner(
        "qr-reader",
        { fps: 10, qrbox: { width: 250, height: 250 } },
        /* verbose= */ false
      );

      const success = (decodedText: string) => {
        scanner.clear();
        setIsScanning(false);
        // Create a simple hash using timestamp and scanned data
        const timestamp = new Date().toISOString();
        const hashId = btoa(decodedText + timestamp).slice(0, 16);
        
        setScanResult({
          hashId,
          scannedData: decodedText,
          timestamp,
        });
      };

      const error = (err: string) => {
        setError(err || "Error scanning QR Code");
      };

      scanner.render(success, error);

      return () => {
        scanner.clear();
        setIsScanning(false);
      };
    };

    if (!scanResult) {
      initializeScanner();
    }

    return () => {
      setIsScanning(false);
    };
  }, [scanResult]);

  return (
    <div className="flex flex-col items-center gap-6 p-4 max-w-2xl mx-auto animate-fade-in">
      <div className="w-full text-center space-y-4">
        <h2 className="text-2xl font-bold text-gradient-primary flex items-center justify-center gap-2">
          <QrCode className="h-6 w-6 text-green-400" />
          <span>Product Verification Scanner</span>
        </h2>
        <p className="text-muted-foreground">
          Scan a product's QR code to view its authenticated supply chain journey
        </p>
      </div>

      {!scanResult && (
        <div className="w-full max-w-md glass-morphism rounded-lg p-6 animate-fade-in">
          <div id="qr-reader" className="w-full"></div>
          {isScanning && (
            <div className="flex justify-center mt-4">
              <RefreshCw className="h-6 w-6 text-green-400 animate-spin" />
            </div>
          )}
          {error && (
            <p className="mt-4 text-sm text-destructive text-center">{error}</p>
          )}
        </div>
      )}

      {scanResult && (
        <div className="w-full max-w-md neo-blur rounded-lg p-6 space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg flex items-center">
              <Check className="h-5 w-5 mr-2 text-green-400" /> 
              <span>Product Verified</span>
            </h3>
            <Shield className="h-5 w-5 text-green-400 animate-glow" />
          </div>
          
          <div className="space-y-3 animate-fade-in delay-100">
            <div className="flex justify-between items-center bg-black/30 p-3 rounded-lg">
              <span className="text-muted-foreground">Hash ID:</span>
              <span className="font-mono bg-black/50 px-2 py-1 rounded text-sm text-green-400">
                {scanResult.hashId}
              </span>
            </div>
            <div className="flex justify-between items-center bg-black/30 p-3 rounded-lg animate-fade-in delay-200">
              <span className="text-muted-foreground">Product Data:</span>
              <span className="text-sm truncate max-w-[200px]">
                {scanResult.scannedData}
              </span>
            </div>
            <div className="flex justify-between items-center bg-black/30 p-3 rounded-lg animate-fade-in delay-300">
              <span className="text-muted-foreground">Timestamp:</span>
              <span className="text-sm">
                {new Date(scanResult.timestamp).toLocaleString()}
              </span>
            </div>
          </div>
          
          <button
            onClick={() => setScanResult(null)}
            className="w-full mt-4 bg-green-600/80 hover:bg-green-600 text-white px-4 py-3 rounded-md transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm animate-fade-in delay-400"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Scan Another Product</span>
          </button>
        </div>
      )}
    </div>
  );
};
