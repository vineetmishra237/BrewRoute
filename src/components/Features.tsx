
import { Check, Clock, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Authenticity",
    description: "Ensure products are genuine with blockchain-backed verification"
  },
  {
    icon: Globe,
    title: "Supply Chain Transparency",
    description: "Track the complete journey from raw materials to final product"
  },
  {
    icon: Check,
    title: "Ethical Sourcing",
    description: "Verify that products meet fair trade and ethical standards"
  },
  {
    icon: Clock,
    title: "Real-Time Updates",
    description: "See instant verification with immutable blockchain records"
  }
];

export const Features = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gradient">Why Choose SupplyChainGuard</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-morphism rounded-lg p-6 hover:bg-white/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-12 w-12 rounded-full bg-green-400/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
