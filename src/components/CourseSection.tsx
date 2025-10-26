import { Button } from "./ui/button";
import { Check, Shield, CreditCard, Star, Users, Download, Lock, Award, Clock, DollarSign } from "lucide-react";
import { Card } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const CourseSection = () => {
  const pricingPlans = [
    {
      name: "Free",
      price: "Free",
      subtitle: "Perfect for beginners",
      popular: false,
      features: ["Free Version of the eBook: Check out all the content of the eBook for free."],
      cta: "Get for Free"
    },
    {
      name: "Premium",
      price: "$14.99",
      subtitle: "Most popular choice",
      popular: true,
      features: ["Access the Premium eBook: Unlock all content and get full access to everything."],
      cta: "Get Premium"
    },
    {
      name: "VIP",
      price: "$49.99",
      subtitle: "Complete done-for-you service",
      popular: false,
      features: [
        "Access to the full video tutorial that explains everything from start to finish, including all the steps.",
        "Access the Premium eBook."
      ],
      cta: "Get VIP"
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Set up your website to showcase your social media services and start making sales to real customers."
    },
    {
      number: 2,
      title: "Launch your first ads with a low budget to start getting your first sales."
    },
    {
      number: 3,
      title: "After your ads are published and have run for some time, you'll start receiving your sales."
    },
    {
      number: 4,
      title: "How to deliver services to your clients after a sale and transfer your money to your bank account."
    },
    {
      number: 5,
      title: "Generate free traffic effectively and scale your sales and your business."
    }
  ];

  const benefits = [
    {
      icon: Download,
      title: "Free access to view the content",
      description: "Download your eBook for free instantly — no waiting time!"
    },
    {
      icon: Shield,
      title: "100% safe",
      description: "Our methods are completely safe and will not result in your account being suspended."
    },
    {
      icon: Award,
      title: "High quality Content",
      description: "We deliver a real, high-quality eBook case study with proven results."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our customer support is available 24/7 to help you."
    },
    {
      icon: Lock,
      title: "Secure payment",
      description: "All payments are processed securely encryption."
    },
    {
      icon: DollarSign,
      title: "Money-back guarantee",
      description: "Not satisfied? We offer a 30-day money-back guarantee."
    }
  ];

  // ✅ UPDATED EBOOK IMAGES
  const ebookPages = [
    {
      id: 1,
      src: "https://i.postimg.cc/vZLPPmFt/demo-2.png",
      alt: "Ebook cover preview"
    },
    {
      id: 2,
      src: "https://i.postimg.cc/mDqVczMp/Screenshot-2025-10-25-142728.png",
      alt: "Ebook content preview"
    }
  ];

  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(262,83%,58%)] via-[hsl(320,85%,60%)] to-[hsl(25,95%,65%)]">
              Start your online business today
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Want to make $100 a day reselling followers, just like I do? Learn how to build a profitable social media reselling business from the ground up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="xl" variant="gradient">
              Get Started Now
            </Button>
            <Button size="xl" variant="outline">
              Learn More
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border">
              <Shield className="w-8 h-8 text-primary" />
              <h3 className="font-semibold text-sm">SSL Secure</h3>
              <p className="text-xs text-muted-foreground">256-bit encryption</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border">
              <CreditCard className="w-8 h-8 text-primary" />
              <h3 className="font-semibold text-sm">Protected Payments</h3>
              <p className="text-xs text-muted-foreground">Secure payments</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border">
              <Star className="w-8 h-8 text-primary" />
              <h3 className="font-semibold text-sm">4.9/5 Stars</h3>
              <p className="text-xs text-muted-foreground">Customer rating</p>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border">
              <Users className="w-8 h-8 text-primary" />
              <h3 className="font-semibold text-sm">200+ Customers</h3>
              <p className="text-xs text-muted-foreground">Satisfied clients</p>
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Make <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(262,83%,58%)] via-[hsl(320,85%,60%)] to-[hsl(25,95%,65%)]">$100 a Day</span> from Reselling Social Services
          </h2>
          <p className="text-lg text-muted-foreground mb-4">Live case study for the Reselling Online Business</p>
        </div>

        {/* ✅ Carousel Section (Updated to show images) */}
        <div className="mb-16 max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Swipe → to see what's inside the eBook
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            Take a look inside the ebook and see what you'll learn
          </p>
          
          <Carousel className="w-full">
            <CarouselContent>
              {ebookPages.map((page) => (
                <CarouselItem key={page.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="aspect-[3/4] flex items-center justify-center bg-muted overflow-hidden">
                      <img
                        src={page.src}
                        alt={page.alt}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Course Content Overview */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Social Media Services Reselling Masterclass (eBook)
          </h3>
          <p className="text-center text-muted-foreground mb-12">
            Finding reliable and cheap suppliers (friendly guide)
          </p>

          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4 items-start p-6 rounded-xl bg-card border border-border hover:shadow-elevated transition-smooth">
                <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {step.number}
                </div>
                <div className="flex-1">
                  <p className="text-foreground">{step.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Choose your plan
          </h3>
          <p className="text-center text-muted-foreground mb-12">
            Choose the package that suits your needs and start your reseller business today
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-xl bg-card border-2 transition-smooth hover:scale-105 ${
                  plan.popular
                    ? "border-primary shadow-glow"
                    : "border-border shadow-soft hover:shadow-elevated"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="gradient-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full shadow-elevated">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>
                  <div className="text-4xl font-bold mb-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(262,83%,58%)] via-[hsl(320,85%,60%)] to-[hsl(25,95%,65%)]">
                      {plan.price}
                    </span>
                  </div>
                  {plan.price !== "Free" && (
                    <p className="text-sm text-muted-foreground">one-time payment</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "gradient" : "default"}
                  size="lg"
                  className="w-full font-semibold"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Why choose us?
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust us for the social media reselling online business
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:shadow-elevated transition-smooth"
              >
                <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center py-16 px-4 rounded-2xl gradient-primary shadow-glow">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Success Story?
          </h3>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful entrepreneurs who have transformed their lives with our proven system.
          </p>
          <Button size="xl" variant="secondary" className="shadow-elevated">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
