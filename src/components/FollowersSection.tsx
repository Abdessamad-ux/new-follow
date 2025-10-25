 import PricingCard from "./PricingCard";
import { Instagram } from "lucide-react";

const FollowersSection = () => {
  const packages = [
    { quantity: "500 Followers", price: "£2.99", url: "https://www.paypal.com/ncp/payment/EW2NDVRHDSLKY" },
    { quantity: "1k Followers", price: "£4.99", url: "https://www.paypal.com/ncp/payment/YXZ7ZE73WSCJJ" },
    { quantity: "2K Followers", price: "£7.99", popular: true, url: "https://www.paypal.com/ncp/payment/HPXGEXFUPSST6" },
    { quantity: "5K Followers", price: "£19.99", url: "https://www.paypal.com/ncp/payment/AZVPH6J32PHXS" },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-primary" />
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Instagram Followers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Grow your audience with authentic, engaged followers.
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

export default FollowersSection;
