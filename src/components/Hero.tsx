import { Shield, Zap, Users, Star } from "lucide-react";

const Hero = () => {
  const trustBadges = [
    { icon: Shield, text: "100% Safe & Secure" },
    { icon: Zap, text: "Instant Delivery" },
    { icon: Users, text: "50,000+ Happy Customers" },
    { icon: Star, text: "4.9/5 Rating" },
  ];

  return (
    <section className="relative py-20 px-4 gradient-hero overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 gradient-primary rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 gradient-accent rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 p-4 bg-card rounded-lg shadow-soft transition-smooth hover:shadow-elevated"
            >
              <badge.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Main headline */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(262,83%,58%)] via-[hsl(320,85%,60%)] to-[hsl(25,95%,65%)]">
              Social Followers
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-foreground mb-4 font-semibold">
            boost your Instagram & TikTok Followers - Likes - Views
          </p>
          <h3 className="text-pink-600 text-2xl md:text-3xl font-semibold mb-4 max-w-3xl mx-auto leading-relaxed">
            Boost your social media presence today!
          </h3>
          <p className="text-2xl md:text-2xl font-small mb-4 max-w-3xl mx-auto leading-relaxed">
          Whether you're a personal user, influencer, creator, or business - we help you grow your audience with high-quality, real followers who engage with your content.
          </p>
        </div>

        {/* Trust icons */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-medium">SSL Protection</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 3.993-.028.14a.793.793 0 0 1-.782.66H8.096a.5.5 0 0 1-.493-.577l.166-1.054.537-3.407.021-.138a.795.795 0 0 1 .783-.667h.49c2.713 0 4.841-1.103 5.463-4.284.233-1.19.11-2.185-.44-2.886-.16-.205-.35-.39-.567-.553a4.39 4.39 0 0 0-.514-.308z" />
              <path d="M9.182 4.96a.795.795 0 0 1 .783-.667h4.86c.577 0 1.116.067 1.607.204 1.556.434 2.638 1.582 2.913 3.324.102.648.068 1.282-.06 1.881-.011.054-.024.107-.037.16-.354 1.644-1.252 2.875-2.6 3.572-.44.227-.926.405-1.444.534.182-.52.3-1.082.346-1.684.05-.645-.01-1.248-.185-1.803-.514-1.63-1.87-2.67-3.788-2.908a9.04 9.04 0 0 0-.962-.063h-4.83a.795.795 0 0 0-.783.667l-1.616 10.26a.5.5 0 0 0 .493.577h2.791l.702-4.456z" />
            </svg>
            <span className="font-medium">PayPal Secured</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Money Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
