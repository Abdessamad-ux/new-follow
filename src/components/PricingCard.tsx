import { Button } from "./ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  quantity: string;
  price: string;
  popular?: boolean;
  url?: string;
}

const PricingCard = ({ quantity, price, popular = false, url }: PricingCardProps & { url?: string }) => {
  const handleClick = () => {
    if (url) {
      window.location.href = url;
    }
  };
  return (
    <div
      className={`relative p-6 rounded-xl bg-card border-2 transition-smooth hover:scale-105 ${
        popular
          ? "border-primary shadow-glow"
          : "border-border shadow-soft hover:shadow-elevated"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="gradient-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full shadow-elevated">
            MOST POPULAR
          </span>
        </div>
      )}

      <div className="text-center mb-4">
        <div className="text-4xl font-bold text-foreground mb-2">{quantity}</div>
        <div className="text-3xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(262,83%,58%)] via-[hsl(320,85%,60%)] to-[hsl(25,95%,65%)]">
            {price}
          </span>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        <li className="flex items-center gap-2 text-sm text-muted-foreground">
          <Check className="w-5 h-5 text-primary flex-shrink-0" />
          <span>High Quality Services</span>
        </li>
        <li className="flex items-center gap-2 text-sm text-muted-foreground">
          <Check className="w-5 h-5 text-primary flex-shrink-0" />
          <span>Instant Delivery</span>
        </li>
        <li className="flex items-center gap-2 text-sm text-muted-foreground">
          <Check className="w-5 h-5 text-primary flex-shrink-0" />
          <span>Make your account Public</span>
        </li>
      </ul>

      <Button
        variant={popular ? "gradient" : "default"}
        size="lg"
        className="w-full font-semibold"
        onClick={() => {
          if (url) {
            window.location.href = url;
          }
        }}
      >
        Buy Now
      </Button>
    </div>
  );
};

export default PricingCard;
