import PricingCard from "./PricingCard";
import { Eye } from "lucide-react";

const ViewsSection = () => {
  const packages = [
    { quantity: "1K Views", price: "$5.99", url: "https://www.paypal.com/ncp/payment/FP7SNWF4BGMDE" },
    { quantity: "3K Views", price: "$13.99", popular: true, url: "https://www.paypal.com/ncp/payment/4JFQ59PEWQCLY" },
    { quantity: "5K Views", price: "$19.99", url: "https://www.paypal.com/ncp/payment/JMDL6WF497VPS" },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Views for Instagram & TikTok
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Fast results, real impressions, boost visibility & reach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <PricingCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ViewsSection;
