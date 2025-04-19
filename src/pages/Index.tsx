
import { QRScanner } from "@/components/QRScanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-primary">SupplyChainGuard</h1>
          <p className="text-muted-foreground mt-2">
            Transparent & Ethical Product Tracking
          </p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <QRScanner />
      </main>
    </div>
  );
};

export default Index;
