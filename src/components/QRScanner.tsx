
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

interface ScanResult {
  hashId: string;
  scannedData: string;
  timestamp: string;
}

export const QRScanner = () => {
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      /* verbose= */ false
    );

    const success = (decodedText: string) => {
      scanner.clear();
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
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 p-4 max-w-2xl mx-auto">
      <div className="w-full text-center space-y-4">
        <h2 className="text-2xl font-bold text-primary">SupplyChainGuard Scanner</h2>
        <p className="text-muted-foreground">
          Scan a product's QR code to view its supply chain journey
        </p>
      </div>

      {!scanResult && (
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <div id="qr-reader" className="w-full"></div>
          {error && (
            <p className="mt-4 text-sm text-destructive text-center">{error}</p>
          )}
        </div>
      )}

      {scanResult && (
        <div className="w-full max-w-md bg-card text-card-foreground rounded-lg shadow-md p-6 space-y-4">
          <h3 className="font-semibold text-lg">Scan Results</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Hash ID:</span>
              <span className="font-mono bg-muted px-2 py-1 rounded text-sm">
                {scanResult.hashId}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Product Data:</span>
              <span className="text-sm truncate max-w-[200px]">
                {scanResult.scannedData}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Timestamp:</span>
              <span className="text-sm">
                {new Date(scanResult.timestamp).toLocaleString()}
              </span>
            </div>
          </div>
          <button
            onClick={() => setScanResult(null)}
            className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
          >
            Scan Another Product
          </button>
        </div>
      )}
    </div>
  );
};
