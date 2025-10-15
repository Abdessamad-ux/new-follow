import { Globe, MessageCircle, Zap, Shield, Target } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Globe,
      title: "Global & Real Engagement",
      description: "Connect with authentic users from around the world",
    },
    {
      icon: MessageCircle,
      title: "24/7 Customer Support",
      description: "Our team is always here to help you succeed",
    },
    {
      icon: Zap,
      title: "Instant Delivery System",
      description: "See results immediately after your order",
    },
    {
      icon: Shield,
      title: "100% Secure Payment",
      description: "Your transactions are protected and encrypted",
    },
    {
      icon: Target,
      title: "Guaranteed Satisfaction",
      description: "Money-back guarantee if you're not satisfied",
    },
  ];

  return (
    <section className="py-20 px-4 gradient-hero">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Thousands Choose Our Service
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the community of successful creators and businesses who trust us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card shadow-soft hover:shadow-elevated transition-smooth group"
            >
              <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth shadow-soft">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
