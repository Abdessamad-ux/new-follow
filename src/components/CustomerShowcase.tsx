import customerAtelier from "@/assets/customer-atelier.webp";
import customerSteven from "@/assets/customer-steven.webp";
import customerBanana from "@/assets/customer-banana.webp";
import customerBid from "@/assets/customer-bid.webp";

const CustomerShowcase = () => {
  const customers = [
    { image: customerAtelier, alt: "Happy customer showcase" },
    { image: customerSteven, alt: "Successful creator testimonial" },
    { image: customerBanana, alt: "Business growth success" },
    { image: customerBid, alt: "Influencer partnership" },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The Smart New Way to Grow Your Instagram Account
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Grow your audience effortlessly with authentic engagement. Our customers trust us to deliver results that truly make an impact. Join the movement and take your social media game to the next level.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-smooth group"
            >
              <img
                src={customer.image}
                alt={customer.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerShowcase;
