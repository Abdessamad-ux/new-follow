import { Button } from "./ui/button";
import { Heart, Check } from "lucide-react";

const LikesSection = () => {
  const packages = [
    { quantity: "1K Likes", price: "$3.99", url: "https://www.paypal.com/ncp/payment/VUMG9BUX7UX8E" },
    { quantity: "2K Likes", price: "$5.99", url: "https://www.paypal.com/ncp/payment/BGKLHF8GAPM4N" },
  ];

  return (
    <section className="py-20 px-4 gradient-hero">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Instagram Likes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Boost your engagement rate instantly with real, high-quality likes!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-card border-2 border-border shadow-soft hover:shadow-elevated transition-smooth hover:scale-105"
            >
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-foreground mb-2">{pkg.quantity}</div>
                <div className="text-4xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(262,83%,58%)] via-[hsl(320,85%,60%)] to-[hsl(25,95%,65%)]">
                    {pkg.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>100% High Quality Likes</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Instant Delivery</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Boost Engagement</span>
                </li>
              </ul>

              <Button variant="accent" size="lg" className="w-full font-semibold" onClick={() => window.open(pkg.url, "_blank") }>
                Buy Likes
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LikesSection;
